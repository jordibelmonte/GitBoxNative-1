import React from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
// import { FlatList } from 'react-native-gesture-handler';
// import Loader from './Loader'
// import TarjetaPaquete from './TarjetaPaquete'

const Paquetes = () => {

  const paquetes = [{ "productos": [], "_id": "6041af925f81b737203597bf", "nombre": "En las Nubes", "precio": 6640, "categoria": "Aventura", "descripcion": "¡Tocar el cielo con las manos!", "cantidadPersonas": 2, "ubicacion": "Córdoba", "stock": 20, "cantidadVendidos": [{ "_id": "6041af925f81b737203597c0", "idUsuario": "603fe8908c3b1908542a85da", "cantidad": 4 }], "valoracion": [{ "_id": "6041af925f81b737203597c1", "idUsuario": "604010e05985ee1670c07ab8", "valor": 5 }, { "_id": "6041af925f81b737203597c2", "idUsuario": "604010e05985ee1670c07ab7", "valor": 3 }, { "_id": "6041af925f81b737203597c3", "idUsuario": "604010e05985ee1670c07ab6", "valor": 2 }, { "valor": 5, "_id": "6042cf4c9035c34f6cf12d9b", "idUsuario": "6042a1780ccdce4de865acbd" }, { "valor": 3, "_id": "6042d01c5897dd23747947cc", "idUsuario": "6042c4ef427e6d0a78cb1c1d" }, { "valor": 4.5, "_id": "6042d02cc49c463fe025352a", "idUsuario": "6042c4ef427e6d0a78cb1c1d" }, { "valor": 3.5, "_id": "6042d08bee538d42e896433c", "idUsuario": "6042c4ef427e6d0a78cb1c1d" }, { "valor": 0.5, "_id": "6042d09aee538d42e896433d", "idUsuario": "6042c4ef427e6d0a78cb1c1d" }, { "valor": 5, "_id": "6042d10633fff04128a8e469", "idUsuario": "6042c4ef427e6d0a78cb1c1d" }, { "valor": 1, "_id": "6042d10733fff04128a8e46a", "idUsuario": "6042c4ef427e6d0a78cb1c1d" }, { "valor": 4.5, "_id": "6042d10c33fff04128a8e46b", "idUsuario": "6042c4ef427e6d0a78cb1c1d" }, { "valor": 4, "_id": "6042d11033fff04128a8e46c", "idUsuario": "6042c4ef427e6d0a78cb1c1d" }, { "valor": 5, "_id": "6042d12833fff04128a8e46d", "idUsuario": "6042c4ef427e6d0a78cb1c1d" }, { "valor": 1.5, "_id": "6042d13133fff04128a8e46e", "idUsuario": "6042c4ef427e6d0a78cb1c1d" }, { "valor": 0.5, "_id": "6042d13333fff04128a8e46f", "idUsuario": "6042c4ef427e6d0a78cb1c1d" }, { "valor": 3.5, "_id": "6042d13a33fff04128a8e470", "idUsuario": "6042c4ef427e6d0a78cb1c1d" }, { "valor": 5, "_id": "6042d13d33fff04128a8e471", "idUsuario": "6042c4ef427e6d0a78cb1c1d" }, { "valor": 5, "_id": "6042d1e833fff04128a8e472", "idUsuario": "6042c4ef427e6d0a78cb1c1d" }, { "valor": 0.5, "_id": "6042d1f633fff04128a8e473", "idUsuario": "6042c4ef427e6d0a78cb1c1d" }, { "valor": 5, "_id": "6042d1f833fff04128a8e474", "idUsuario": "6042c4ef427e6d0a78cb1c1d" }, { "valor": 4.5, "_id": "6042d22d33fff04128a8e475", "idUsuario": "6042c4ef427e6d0a78cb1c1d" }, { "valor": 1, "_id": "6042d25133fff04128a8e476", "idUsuario": "6042c4ef427e6d0a78cb1c1d" }], "opiniones": [], "imagen": "https://fotos.subefotos.com/61981f5e776e8ab15946b49ee81636f6o.png", "__v": 0 }, { "productos": [], "_id": "6041affe5f81b737203597c4", "nombre": "Adrenalina", "precio": 3540, "categoria": "Aventura", "descripcion": "Actividades sorprendentes para una, dos o más personas", "cantidadPersonas": 4, "ubicacion": "Santa Fe", "stock": 17, "cantidadVendidos": [{ "_id": "6041affe5f81b737203597c5", "idUsuario": "603fe8908c3b1908542a85da", "cantidad": 7 }], "valoracion": [{ "_id": "6041affe5f81b737203597c6", "idUsuario": "604010e05985ee1670c07ab8", "valor": 1 }, { "_id": "6041affe5f81b737203597c7", "idUsuario": "604010e05985ee1670c07ab7", "valor": 2 }, { "_id": "6041affe5f81b737203597c8", "idUsuario": "604010e05985ee1670c07ab6", "valor": 5 }], "opiniones": [], "imagen": "https://fotos.subefotos.com/846d622569fe9ff8dc1d5a95a9d05106o.png", "__v": 0 }, { "productos": [], "_id": "6041b0565f81b737203597c9", "nombre": "Extreme", "precio": 6640, "categoria": "Aventura", "descripcion": "Aventuras extremas para desafiar los límites", "cantidadPersonas": 2, "ubicacion": "Chaco", "stock": 16, "cantidadVendidos": [{ "_id": "6041b0565f81b737203597ca", "idUsuario": "603fe8908c3b1908542a85da", "cantidad": 5 }], "valoracion": [{ "_id": "6041b0565f81b737203597cb", "idUsuario": "604010e05985ee1670c07ab8", "valor": 4 }, { "_id": "6041b0565f81b737203597cc", "idUsuario": "604010e05985ee1670c07ab7", "valor": 5 }, { "_id": "6041b0565f81b737203597cd", "idUsuario": "604010e05985ee1670c07ab6", "valor": 3 }], "opiniones": [], "imagen": "https://fotos.subefotos.com/7087c3322ca4f1ff61e40c35dc2c25c2o.png", "__v": 0 }, { "productos": [], "_id": "6041b0d85f81b737203597ce", "nombre": "No Limits", "precio": 9540, "categoria": "Aventura", "descripcion": "¡Para los valientes! Experiencias de alto vuelo!", "cantidadPersonas": 4, "ubicacion": "Buenos Aires", "stock": 12, "cantidadVendidos": [{ "_id": "6041b0d85f81b737203597cf", "idUsuario": "603fe8908c3b1908542a85da", "cantidad": 9 }, { "_id": "6041b0d85f81b737203597d0", "idUsuario": "604010e05985ee1670c07ab8", "cantidad": 2 }], "valoracion": [{ "_id": "6041b0d85f81b737203597d1", "idUsuario": "604010e05985ee1670c07ab8", "valor": 1 }, { "_id": "6041b0d85f81b737203597d2", "idUsuario": "604010e05985ee1670c07ab7", "valor": 2 }, { "_id": "6041b0d85f81b737203597d3", "idUsuario": "604010e05985ee1670c07ab6", "valor": 5 }], "opiniones": [], "imagen": "https://fotos.subefotos.com/03d4b7f90d90f22b44d2f85721df6883o.png", "__v": 0 }, { "productos": [], "_id": "6041b35862b89b3e58dd18d3", "nombre": "Show Time", "precio": 1640, "categoria": "En casa", "descripcion": "Funciones de teatro online, shows en vivo y mucho más", "cantidadPersonas": 4, "ubicacion": "Buenos Aires", "stock": 74, "cantidadVendidos": [{ "_id": "6041b35862b89b3e58dd18d4", "idUsuario": "603fe8908c3b1908542a85da", "cantidad": 2 }, { "_id": "6041b35862b89b3e58dd18d5", "idUsuario": "604010e05985ee1670c07ab8", "cantidad": 4 }], "valoracion": [{ "_id": "6041b35862b89b3e58dd18d6", "idUsuario": "604010e05985ee1670c07ab8", "valor": 4 }, { "_id": "6041b35862b89b3e58dd18d7", "idUsuario": "604010e05985ee1670c07ab7", "valor": 4 }, { "_id": "6041b35862b89b3e58dd18d8", "idUsuario": "604010e05985ee1670c07ab6", "valor": 5 }], "opiniones": [], "imagen": "https://fotos.subefotos.com/0fe5564c9e292b1ee35cb9fbd216c2eco.png", "__v": 0 }, { "productos": [], "_id": "6041b3e362b89b3e58dd18d9", "nombre": "Deli (very)", "precio": 2290, "categoria": "En casa", "descripcion": "Cenas, vinos y muchas cosas más para disfrutar en casa", "cantidadPersonas": 2, "ubicacion": "Corrientes", "stock": 23, "cantidadVendidos": [{ "_id": "6041b3e362b89b3e58dd18da", "idUsuario": "603fe8908c3b1908542a85da", "cantidad": 5 }, { "_id": "6041b3e362b89b3e58dd18db", "idUsuario": "604010e05985ee1670c07ab8", "cantidad": 12 }], "valoracion": [{ "_id": "6041b3e362b89b3e58dd18dc", "idUsuario": "604010e05985ee1670c07ab8", "valor": 3 }, { "_id": "6041b3e362b89b3e58dd18dd", "idUsuario": "604010e05985ee1670c07ab7", "valor": 2 }, { "_id": "6041b3e362b89b3e58dd18de", "idUsuario": "604010e05985ee1670c07ab6", "valor": 5 }], "opiniones": [], "imagen": "https://fotos.subefotos.com/5c96dda9f7f0f0fa945d5ce01fe6d51bo.png", "__v": 0 }, { "productos": [], "_id": "6041b44c62b89b3e58dd18df", "nombre": "Home Spa", "precio": 2840, "categoria": "En casa", "descripcion": "Kits de productos de belleza para vivir un día de spa en casa", "cantidadPersonas": 1, "ubicacion": "Rosario", "stock": 14, "cantidadVendidos": [{ "_id": "6041b44c62b89b3e58dd18e0", "idUsuario": "603fe8908c3b1908542a85da", "cantidad": 1 }, { "_id": "6041b44c62b89b3e58dd18e1", "idUsuario": "604010e05985ee1670c07ab8", "cantidad": 2 }], "valoracion": [{ "_id": "6041b44c62b89b3e58dd18e2", "idUsuario": "604010e05985ee1670c07ab8", "valor": 5 }, { "_id": "6041b44c62b89b3e58dd18e3", "idUsuario": "604010e05985ee1670c07ab7", "valor": 5 }, { "_id": "6041b44c62b89b3e58dd18e4", "idUsuario": "604010e05985ee1670c07ab6", "valor": 3 }], "opiniones": [], "imagen": "https://fotos.subefotos.com/79e894a709c1e1ab6e9a08677721fac9o.png", "__v": 0 }, { "productos": [], "_id": "6041b4eb62b89b3e58dd18e5", "nombre": "Level Up", "precio": 1790, "categoria": "En casa", "descripcion": "Cursos y talleres para aprender desde la comodidad de casa", "cantidadPersonas": 2, "ubicacion": "Formosa", "stock": 98, "cantidadVendidos": [{ "_id": "6041b4eb62b89b3e58dd18e6", "idUsuario": "603fe8908c3b1908542a85da", "cantidad": 11 }, { "_id": "6041b4eb62b89b3e58dd18e7", "idUsuario": "604010e05985ee1670c07ab8", "cantidad": 5 }], "valoracion": [{ "_id": "6041b4eb62b89b3e58dd18e8", "idUsuario": "604010e05985ee1670c07ab8", "valor": 4 }, { "_id": "6041b4eb62b89b3e58dd18e9", "idUsuario": "604010e05985ee1670c07ab7", "valor": 3 }, { "_id": "6041b4eb62b89b3e58dd18ea", "idUsuario": "604010e05985ee1670c07ab6", "valor": 5 }], "opiniones": [], "imagen": "https://fotos.subefotos.com/2a81eb9dfce6a0f0ed14d294387ffb8bo.png", "__v": 0 }, { "productos": [], "_id": "6041c73b718c403cf083bcb5", "nombre": "Weekend", "precio": 19800, "categoria": "Estadías", "descripcion": "Estancias, hoteles y hosterías para vivir un fin de semana diferente", "cantidadPersonas": 2, "ubicacion": "Bariloche", "stock": 36, "cantidadVendidos": [{ "_id": "6041c73b718c403cf083bcb6", "idUsuario": "603fe8908c3b1908542a85da", "cantidad": 14 }, { "_id": "6041c73b718c403cf083bcb7", "idUsuario": "604010e05985ee1670c07ab8", "cantidad": 2 }], "valoracion": [{ "_id": "6041c73b718c403cf083bcb8", "idUsuario": "604010e05985ee1670c07ab8", "valor": 4 }, { "_id": "6041c73b718c403cf083bcb9", "idUsuario": "604010e05985ee1670c07ab7", "valor": 3 }, { "_id": "6041c73b718c403cf083bcba", "idUsuario": "604010e05985ee1670c07ab6", "valor": 5 }], "opiniones": [], "imagen": "https://fotos.subefotos.com/1d7a81a511a8c8d60cf3bb0a6d611a87o.png", "__v": 0 }, { "productos": [], "_id": "6041c7db718c403cf083bcbb", "nombre": "Noches insólitas", "precio": 20400, "categoria": "Estadías", "descripcion": "Lujosas estadías en lugares extraordinarios", "cantidadPersonas": 4, "ubicacion": "Buenos Aires", "stock": 76, "cantidadVendidos": [{ "_id": "6041c7db718c403cf083bcbc", "idUsuario": "603fe8908c3b1908542a85da", "cantidad": 2 }, { "_id": "6041c7db718c403cf083bcbd", "idUsuario": "604010e05985ee1670c07ab8", "cantidad": 4 }], "valoracion": [{ "_id": "6041c7db718c403cf083bcbe", "idUsuario": "604010e05985ee1670c07ab8", "valor": 2 }, { "_id": "6041c7db718c403cf083bcbf", "idUsuario": "604010e05985ee1670c07ab7", "valor": 1 }, { "_id": "6041c7db718c403cf083bcc0", "idUsuario": "604010e05985ee1670c07ab6", "valor": 5 }], "opiniones": [], "imagen": "https://fotos.subefotos.com/b5531068aea1af0225c5b5f439d3d865o.png", "__v": 0 }, { "productos": [], "_id": "6041c858718c403cf083bcc1", "nombre": "Encanto", "precio": 8940, "categoria": "Estadías", "descripcion": "Una noche especial en hoteles urbanos", "cantidadPersonas": 1, "ubicacion": "Entre Ríos", "stock": 23, "cantidadVendidos": [{ "_id": "6041c858718c403cf083bcc2", "idUsuario": "603fe8908c3b1908542a85da", "cantidad": 5 }, { "_id": "6041c858718c403cf083bcc3", "idUsuario": "604010e05985ee1670c07ab8", "cantidad": 7 }], "valoracion": [{ "_id": "6041c858718c403cf083bcc4", "idUsuario": "604010e05985ee1670c07ab8", "valor": 3 }, { "_id": "6041c858718c403cf083bcc5", "idUsuario": "604010e05985ee1670c07ab7", "valor": 2 }, { "_id": "6041c858718c403cf083bcc6", "idUsuario": "604010e05985ee1670c07ab6", "valor": 4 }], "opiniones": [], "imagen": "https://fotos.subefotos.com/acd49dd9adaaaa722702bf4cfc3a9a13o.png", "__v": 0 }, { "productos": [], "_id": "6041c8ca718c403cf083bcc7", "nombre": "Boutique", "precio": 9990, "categoria": "Estadías", "descripcion": "Estadías de ensueño en los hoteles boutique más lindos", "cantidadPersonas": 4, "ubicacion": "La Pampa", "stock": 56, "cantidadVendidos": [{ "_id": "6041c8ca718c403cf083bcc8", "idUsuario": "603fe8908c3b1908542a85da", "cantidad": 1 }, { "_id": "6041c8ca718c403cf083bcc9", "idUsuario": "604010e05985ee1670c07ab8", "cantidad": 7 }], "valoracion": [{ "_id": "6041c8ca718c403cf083bcca", "idUsuario": "604010e05985ee1670c07ab8", "valor": 5 }, { "_id": "6041c8ca718c403cf083bccb", "idUsuario": "604010e05985ee1670c07ab7", "valor": 5 }, { "_id": "6041c8ca718c403cf083bccc", "idUsuario": "604010e05985ee1670c07ab6", "valor": 4 }], "opiniones": [], "imagen": "https://fotos.subefotos.com/ebfb2c22ba2ba2ff9bc851da4fdc1b15o.png", "__v": 0 }]

  return (
    <View style={styles.viewAll}>
      <ScrollView style={styles.scroll}>

        <TextInput type='text' placeholder="HOLA"></TextInput>
        {/* <Text>{(location.categoria && !valor) && location.categoria}</Text> */}
        <View style={styles.packagesContainer}>
          {paquetes.map(paquete => {
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

export default Paquetes