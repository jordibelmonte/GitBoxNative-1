import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView, 
  ImageBackground} from 'react-native';

import Carousel from 'react-native-snap-carousel';

export default class App extends React.Component {

 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [{ img: 'https://fotos.subefotos.com/1d7a81a511a8c8d60cf3bb0a6d611a87o.png', text: 'Cenas,vinos y muchas cosas mas para disfrutar en casa', precio: '$2290' }, { img: 'https://fotos.subefotos.com/b5531068aea1af0225c5b5f439d3d865o.png', text: 'Cenas,vinos y muchas cosas mas para disfrutar en casa', precio: '$2290' }, { img: 'https://fotos.subefotos.com/acd49dd9adaaaa722702bf4cfc3a9a13o.png', text: 'Cenas,vinos y muchas cosas mas para disfrutar en casa', precio: '$2290' }, { img: 'https://fotos.subefotos.com/ebfb2c22ba2ba2ff9bc851da4fdc1b15o.png', text: 'Cenas,vinos y muchas cosas mas para disfrutar en casa', precio: '$2290'}, { img: 'https://fotos.subefotos.com/0fe5564c9e292b1ee35cb9fbd216c2eco.png',text: 'Cenas,vinos y muchas cosas mas para disfrutar en casa', precio: '$2290' }, { img: 'https://fotos.subefotos.com/79e894a709c1e1ab6e9a08677721fac9o.png',text: 'Cenas,vinos y muchas cosas mas para disfrutar en casa', precio: '$2290' }, { img: 'https://fotos.subefotos.com/2a81eb9dfce6a0f0ed14d294387ffb8bo.png',text: 'Cenas,vinos y muchas cosas mas para disfrutar en casa', precio: '$2290' }]
      }
    }

    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'transparent',
              padding: 0,
              
                }}>
            {/* <Text style={{fontSize: 30}}>{item.img}</Text> */}
            <ImageBackground source={{uri:item.img}} resizeMode='cover' style={{width:200, height:200,justifyContent:'flex-end'}}>
            </ImageBackground>
            <Text style={{color:item.color,fontSize:15,paddingBottom:5,paddingLeft:20}}>{item.text}</Text>
            <View style={{flexDirection:'row',paddingLeft:10}}>{[...Array(5)].map((m,i)=>{
                        const ratingValue = i +1
                            return (
                                <Text>⭐</Text>
                            )
                        })}</View>
            <Text style={{fontSize:25,fontWeight:'bold',paddingLeft:20}}>{item.precio}</Text>
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
