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
          carouselItems: [{ img: 'https://fotos.subefotos.com/56c90e1f86df75fcfc6a019320c6deefo.png', text: 'Aventura', color: '#FFC715' }, { img: 'https://fotos.subefotos.com/32bf744cf1edec87692e8e32b04b89d8o.jpg', text: 'Blends', color: '#30d42a' }, { img: 'https://fotos.subefotos.com/26d409700fdaa30b2a9c9d51283b0fd8o.jpg', text: 'En casa', color: '#CA360C' }, { img: 'https://fotos.subefotos.com/654fee5dbf75e34d3e4b9d362705b774o.jpg', text: 'Entretenimiento', color: '#C7BBEC' }, { img: 'https://fotos.subefotos.com/e606178ce6f8e48f545dc3b053324f59o.jpg', text: 'Estadias', color: '#43DCB7' }, { img: 'https://i.postimg.cc/DfR65MtV/Estar-bien.jpg', text: 'Estar bien', color: '#B6B6EF' }, { img: 'https://fotos.subefotos.com/75ba75aa9a87f616e495467ec2ec2746o.jpg', text: 'Gastronomia', color: '#FF4F6D' }]
      }
    }

    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'black',
              borderRadius: 5,
              padding: 0,
                }}>
            {/* <Text style={{fontSize: 30}}>{item.img}</Text> */}
            <ImageBackground source={{uri:item.img}} resizeMode='cover' style={{width:200, height:350,justifyContent:'flex-end'}}>
                <Text style={{color:item.color,fontSize:23,fontWeight:'bold',paddingBottom:30,paddingLeft:20}}>{item.text}</Text>
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
