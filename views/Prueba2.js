import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ImageBackground,
} from 'react-native';
import {connect} from 'react-redux'

const {width: screenWidth} = Dimensions.get('window');

const Prueba2 = (props) => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(props.todasLasCategorias);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ImageBackground
          backgroundColor='red'
          source={{uri: item.imagen}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
          
        >
        <Text style={{height:'100%',width:'100%',color:item.color,fontSize:24,fontWeight:'bold',paddingLeft:10,paddingTop:20}} numberOfLines={2} onPress={()=>props.navigation.navigate('paquetes',{categoria:item.nombre})} >
          {item.nombre} 
        </Text>
        </ImageBackground>
      </View>
    );
  };
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goForward}>
      </TouchableOpacity>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={200}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
    </View>
  );
};

const mapStateToProps = state => {
  return {
    todasLasCategorias: state.categoriaReducer.todasLasCategorias
  }
}

export default connect(mapStateToProps)(Prueba2)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '5%',
    paddingBottom: '5%',
/*     backgroundColor:"#050A1A", */
  },
  item: {
    width: 200,
    height: 350,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  title:{
   height:'100%',
   width:'100%'
  }
});