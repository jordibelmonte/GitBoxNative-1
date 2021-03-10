import React, { useState, useEffect } from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import paqueteActions from '../redux/actions/paqueteActions'
// import { FlatList } from 'react-native-gesture-handler';
// import Loader from './Loader'
// import TarjetaPaquete from './TarjetaPaquete'

const Paquetes = (props) => {
  /* const paquetes = props.todosLosPaquetes.response */

  
  // console.log(props.route.params.categoria)

  const [valor, setValor] = useState(false)
  const [categoria, setCategoria] = useState(true)
  const [filterValue, setFilterValue] = useState("");
  const [nombreCategoria, setNombreCategoria] = useState(props.route.params.categoria)
  console.log(nombreCategoria)

  // const buscando = (value) => {
  //   setFilterValue(value)
  //   props.filtrarPaquetes(props.route.params.categoria)
  // }

  useEffect(() => {
    /*  if(props.paquetesFiltrados.lenght ===0){
       const pepe = props.filtrarPaquetes('Aventura')
       
     } */
    props.filtrarPaquetes(filterValue)
  }, [filterValue])

  // props.filtrarPaquetes(props.route.params.categoria)
  //   const [filterValue,setFilterValue]=useState("");
  // <TextInput placeholder="Categoria" 
  //                     onChangeText={(value)=>setFilterValue(value)} 
  //                      value={filterValue} />

  // if (!props.route.params.categoria && !valor) {
  //   paquetes = props.todosLosPaquetes
  // } else if (!categoria || valor) {
  //   paquetes = props.paquetesFiltrados
  // }

  // if (categoria && props.route.params.categoria) {
  //   props.filtrarPaquetes(props.route.params.categoria)
  //   setCategoria(false)
  // }


  return (
    <View style={styles.viewAll}>
      <ScrollView style={styles.scroll}>
        <TextInput type='text' placeholder="HOLA" value={filterValue} onChangeText={(value) => setFilterValue(value)}></TextInput>
        {/* <Text>{(location.categoria && !valor) && location.categoria}</Text> */}
        <View style={styles.packagesContainer}>
          {props.todosLosPaquetes && props.todosLosPaquetes.filter((paquete) => paquete.categoria === nombreCategoria).map(paquete => {
            return (
              <TouchableOpacity style={styles.package} key={paquete._id}>
                <ImageBackground style={styles.packageImage} resizeMode={'cover'}  imageStyle={{ borderRadius: 5 }} source={{ uri: paquete.imagen }}>
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
                    <Text style={styles.precio}>$ {paquete.precio}</Text>
                  </View>
                  <View>
                    <Text style={{color:'red',fontSize:30}} onPress={()=>props.navigation.navigate('paquete',{paqueteId:paquete._id})}>Ver</Text>
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
    width: '100%',
  },
  package: {
    alignItems: 'center',
    width: '100%',
    height: 450,
    marginTop: 20,
    marginBottom: 20,
  },
  packageImage: {
    justifyContent: 'flex-end',
    width:'100%',
    height:300,
    borderWidth:3,
    borderColor:'green'
    

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
    
  },
  packageDataContainer: {
    bottom: 0,
    flexDirection:'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 132,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    elevation: 5,
    borderWidth:3,
    borderColor:'red'

  },
  packageData: {
    justifyContent: 'space-between',
    paddingLeft:20,
    width: 252,
    height: 113,
    borderWidth:3,
    borderColor:'blue'
  },
  starsAndAssessment: {
    marginTop: 14
  },
  packageDescription: {
    justifyContent: 'flex-start',
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
    todosLosPaquetes: state.paqueteReducer.todosLosPaquetes,
    paquetesFiltrados: state.paqueteReducer.paquetesFiltrados
  }
}

const mapDispatchToProps = {
  filtrarPaquetes: paqueteActions.filtrarPaquetes
}
export default connect(mapStateToProps, mapDispatchToProps)(Paquetes)