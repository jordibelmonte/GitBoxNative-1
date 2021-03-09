import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Button
} from 'react-native';
import { connect } from 'react-redux';




import Carousel from 'react-native-snap-carousel';
import { TouchableOpacity } from 'react-native-gesture-handler';


class Prueba extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: this.props.todasLasCategorias,
      navigation: this.props.navigation,
      screenName: 'registro'
    }
  }
  _renderItem({ item, index }) {
    return (
      <View style={{
        backgroundColor: 'black',
        borderRadius: 5,
        padding: 0,
      }}>
        {/* <Text style={{fontSize: 30}}>{item.img}</Text> */}

        <ImageBackground source={{ uri: item.imagen }} resizeMode='cover' style={{ width: 200, height: 350, justifyContent: 'flex-end' }}>
            <Text style={{ color: item.color, fontSize: 23, fontWeight: 'bold', paddingBottom: 30, paddingLeft: 20 }}>
              {item.nombre}
            </Text>
        </ImageBackground>
      </View>

    )
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, }}>
        <View style={{ flex: 1, flexDirection: 'row', paddingVertical: 40 }}>
          <Carousel
            layout={"default"}
            ref={ref => this.carousel = ref}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={200}
            renderItem={this._renderItem}
            loop={true}
            onSnapToItem={index => this.setState({ activeIndex: index })} />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    todasLasCategorias: state.categoriaReducer.todasLasCategorias
  }
}


export default connect(mapStateToProps, null)(Prueba)