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
      console.log(this.state)
      console.log('----------------')
      
      
    }
    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'black',
              borderRadius: 5,
              padding: 0,
                }}>
              <ImageBackground source={{uri:item.imagen}} resizeMode='cover' style={{width:200, height:350,justifyContent:'flex-end'}}>
                  <Text style={{height:'100%',width:'100%',color:item.color,fontSize:23,fontWeight:'bold',paddingBottom:30,paddingLeft:20}} onPress={()=>props.navigation.navigate('registro')}>{item.nombre}</Text>
              </ImageBackground>
          </View>

        )
        
    }
    
    
    render() {
        return (
          <SafeAreaView style={{flex: 1, }}>
            <View style={{ flex: 1, flexDirection:'row',paddingVertical:40 }}>
                <Carousel
                  layout={"default"}
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