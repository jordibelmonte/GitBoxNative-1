import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
// import { FlatList } from 'react-native-gesture-handler';
// import Loader from './Loader'
// import TarjetaPaquete from './TarjetaPaquete'

const Paquetes = (props) => {
  console.log(props.todosLosPaquetes)
  const paquetes =props.todosLosPaquetes
  return (
    <View style={styles.viewAll}>
      <ScrollView style={styles.scroll}>

        <TextInput type='text' placeholder="HOLA"></TextInput>
        {/* <Text>{(location.categoria && !valor) && location.categoria}</Text> */}
        <View style={styles.packagesContainer}>
          {paquetes && paquetes.map(paquete => {
            return (
              <TouchableOpacity style={styles.package} key={paquete._id}>
                <ImageBackground style={styles.packageImage} imageStyle={{ borderRadius: 5 }} source={{ uri: paquete.imagen }}>
                  <View style={styles.packageCategoryContainer}>
                    <View style={styles.categoryContainer}>
                      <Text style={styles.category}>{paquete.categoria}</Text>
                    </View>
                    <ImageBackground style={styles.giftBoxImage}>
                    </ImageBackground>
                  </View>
                </ImageBackground>
                <View style={styles.packageDataContainer}>
                  <View style={styles.packageData}>
                    <View style={styles.starsAndAssessment}>
                      <Text>ESTRELLAS</Text>
                    </View>
                    <View style={styles.packageDescription}>
                      <Text>{paquete.descripcion}</Text>
                    </View>
                    <Text style={styles.precio}>{paquete.precio}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  viewAll: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgb(236, 236, 236)',
  },
  scroll: {
    width: Dimensions.get('window').width,
    // marginLeft: '10%',
    // marginRight: '10%'
  },
  packagesContainer: {
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  package: {
    position: 'relative',
    alignItems: 'center',
    width: 265,
    height: 375,
    marginTop: 20,
    marginBottom: 20,

  },
  packageImage: {
    justifyContent: 'flex-end',
    resizeMode: 'cover',
    position: 'absolute',
    zIndex: 10,
    elevation: 5,
    // boxShadow
    width: 244,
    height: 263,
  },
  packageCategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: 244,
    height: 132,
  },
  categoryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    marginLeft: 14,
    paddingTop: 5,
    paddingRight: 15,
    paddingBottom: 5,
    paddingLeft: 15,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  category: {
    color: 'rgb(255, 108, 95)',
    fontSize: 15,
    fontWeight: 'bold'
  },
  giftBoxImage: {
    width: 50,
    height: 50,
    marginRight: 20,
    marginBottom: 25,
    backgroundColor: 'blue'
  },
  packageDataContainer: {
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: 265,
    height: 132,
    backgroundColor: 'white',
    // boxShadow
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    elevation: 5,
  },
  packageData: {
    justifyContent: 'space-between',
    width: 252,
    height: 113,
  },
  starsAndAssessment: {
    marginTop: 14
  },
  packageDescription: {
    justifyContent:'flex-start',
    alignItems: 'center',
    height: 40
  },
  precio: {
    fontSize: 25,
    fontWeight: 'bold'
  }
});
const mapStateToProps = state => {
  return {
    todosLosPaquetes: state.paqueteReducer.todosLosPaquetes
  }
}
export default connect(mapStateToProps)(Paquetes)