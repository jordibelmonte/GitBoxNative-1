import * as React from 'react';
import {Text,View,SafeAreaView,ImageBackground,TouchableOpacity} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import { connect } from 'react-redux';
 class Prueba extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: this.props.todasLasCategorias
      }
    }
    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'back',
              borderRadius: 5,
              padding: 0,
                }}>
            <TouchableOpacity>
              <ImageBackground source={{uri:item.imagen}} resizeMode='cover' style={{width:200, height:350,justifyContent:'flex-end'}}>
                  <Text style={{color:item.color,fontSize:23,fontWeight:'bold',paddingBottom:30,paddingLeft:20}}>{item.nombre}</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>

        )
        
    }
    

    render() {
        return (
          <SafeAreaView style={{flex: 1, }}>
            <View style={{ flex: 1, flexDirection:'row',paddingVertical:40 }}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  sliderWidth={300}
                  itemWidth={200}
                  renderItem={this._renderItem}
                  loop={true}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
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

export default connect(mapStateToProps)(Prueba)