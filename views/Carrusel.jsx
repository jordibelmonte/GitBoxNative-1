import React, {useRef, useState, useEffect} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

// const ENTRIES1 = [
//   {
//     title: 'Paris',
//     illustration: 'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900',
//   },
//   {
//     title: 'Amsterdam',
//     illustration: 'https://www.telegraph.co.uk/content/dam/insurance/2016/04/06/amsterdam.jpg',
//   },
//   {
//     title: 'Buenos Aires',
//     illustration: 'https://www.buenosaires.gob.ar/sites/gcaba/files/al_avenida_9_dejulio.jpg',
//   },
//   {
//     title: 'La Habana',
//     illustration: 'https://viajeropeligro.com/wp-content/uploads/2017/02/cuba1.jpg',
//   },
//   {
//     title: 'Malaga',
//     illustration: 'https://pix10.agoda.net/geo/city/12521/1_12521_02.jpg?s=1920x822',
//   },
// ];

const fotos = [{ img: 'https://fotos.subefotos.com/56c90e1f86df75fcfc6a019320c6deefo.png', text: 'Aventura', color: '#FFC715' }, { img: 'https://fotos.subefotos.com/32bf744cf1edec87692e8e32b04b89d8o.jpg', text: 'Blends', color: '#30d42a' }, { img: 'https://fotos.subefotos.com/26d409700fdaa30b2a9c9d51283b0fd8o.jpg', text: 'En casa', color: '#CA360C' }, { img: 'https://fotos.subefotos.com/654fee5dbf75e34d3e4b9d362705b774o.jpg', text: 'Entretenimiento', color: '#C7BBEC' }, { img: 'https://fotos.subefotos.com/e606178ce6f8e48f545dc3b053324f59o.jpg', text: 'Estadias', color: '#43DCB7' }, { img: 'https://i.postimg.cc/DfR65MtV/Estar-bien.jpg', text: 'Estar bien', color: '#B6B6EF' }, { img: 'https://fotos.subefotos.com/75ba75aa9a87f616e495467ec2ec2746o.jpg', text: 'Gastronomia', color: '#FF4F6D' }]
const {width: screenWidth} = Dimensions.get('window');

const MyCarousel = props => {
  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(fotos);
  }, []);

  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.item}>
        <ParallaxImage
          source={{uri: item.img}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <Text style={styles.title} numberOfLines={2}>
          {item.text}
        </Text>
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
        itemWidth={screenWidth - 60}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
        loop={true}
      />
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '5%',
    paddingBottom: '5%',
/*     backgroundColor:"#050A1A", */
  },
  item: {
    width: screenWidth - 180,
    height: screenWidth - 20,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 2,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});