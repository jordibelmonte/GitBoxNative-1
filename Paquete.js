
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image ,KeyboardAvoidingView} from 'react-native';

export default function Paquete() {
  const image = {uri : 'http://3.bp.blogspot.com/-jfidBPY7iek/Vtv2IlJVfkI/AAAAAAAArME/nqkMdJF6HkE/s1600/vintage-travel-wallpaper.jpg'}
  return (
    <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.containerKeyboard}>
    <ScrollView>
      <View style={styles.container}>
          <View style={styles.titulo}>
            <Text style={styles.tituloTitulo}>Titulo  Producto</Text>
            <Text style={styles.tituloPuntuacion}>4.65⭐</ Text>
          </View>
          <View style={styles.imageContainer}>
            <View style={styles.descripcionContenedor}>
              <Text style={styles.descripcion}>Regalá experiencias únicas. Esta Bigbox ofrece la posibilidad de elegir entre los más famosos lugares de street food para deleitarse en casa. Hamburgueserías, pizzerías y más propuestas internacionales.</Text>
            </View>            
            <Image source={{uri:"http://3.bp.blogspot.com/-jfidBPY7iek/Vtv2IlJVfkI/AAAAAAAArME/nqkMdJF6HkE/s1600/vintage-travel-wallpaper.jpg"}} style={styles.image}/>
          </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.acercaDe} >
          <Text style={styles.acercaDeTitulo}>Acerca de esta GiftBox</Text>
          <View style={styles.textoAcercaDePadre}>
            <Text style={styles.textoAcercaDe}>👥 Para 2 o más Personas</Text>
            <Text  style={styles.textoAcercaDe}>📅 Se puede user hasta el 03/09/2021</Text>
            <Text  style={styles.textoAcercaDe}>🎁 Contiene 11 opciones </Text>
            <Text  style={styles.textoAcercaDe}>🔁 Se puede cambiar por otra GiftBox</Text>
          </View>
        </View>
        <View style={styles.precioPadre}>
          <Text style={styles.precio}>$ 1090</Text>
        </View>
        <View style={styles.comprarBoton}>
          <Text style={styles.comprarBotonTexto}>Comprar esta BigBox</Text>
        </View>
        <View>
          <Image style={styles.imagenTarjetas} source={{uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAacAAAASCAMAAADIQeHYAAAC4lBMVEUAAAAAYJgAY5f///8SK3YTJXQEcNEVInMRRZERLXUVIXBUWFYcKHBUWFYgKW0AbtAeOXhTV1YcKGwSInAVJ21+V0MSInAoMWsnMWsAYpjkACQAL4cZHnEoMWsWKHGbtjUcouERI3BUWFfjACNUWFdQtOqxtssaH3EAYpgjLWwAAADjACRPs+kAAABUV1UqpeIIJnAIJ3BUWFcAnN5TWFebtTonL2lbY1SctznjACVQtOkAL4cMJXBPtOrhACQAL4cAnN4AMIcAnN5RVVTlFR8AMYUnMWvnAB8oMWtUWFcrL21TWFb3nBoAm92dtzoeI28AAABPtekUMnkAAABEi8L2NwwoMWtQtOlQtOkAAADlACE2rOVAgrf3nhpQtOkAnN8AMIhUV1YAMIflACEAAADKzNt7mLYAm96ctzrpAB2btzlGk8r3nRubtzoAnN7mACAAAADnAB83ZZ1ZcJ4oM20Altn3nhqcuDqctzk4Z6AAAAD3mxrjACAAnN4AAAD2nRqctTmcuDvsABvrABsJJ3AAY5j2nhs1WpEAAACcoLuEh6k0VI2btjucuDv///8AY5gBb9D///8aH3HrABv3nhuctzr/3QFQtOkAMIcAnN7/YAAHJ3EEZZnz9/riACXL3+qhxdqjyu6vzt8igdYTeNPe6/Ow0vGTwes5jtohd6XqAIv/4iv/3haPutKAsc1knsHj7va92fPQ4/G91uVyp8ilqsIxgawObJ7pIpn85ETr7vODuOhipOIgdrkVcKEBIWn//ezc3edMqd7/98Ndl8IEY6/5lBdWnuD/+tdJms87gLtMkbc+ibHl5O1xruVLmN2+wdKRoL60Z7dyg7b/9bXoSqozVY7/7oH3h3r/6lvlhcNHerzua7vsVLDpQJ8AS5nzWJjrEpL8x2f8TgRSkL6Sb7rYXLKfU606b6f+5qOgt476sHYqOHLX0Vz9y0HvERX8ewzh4+sBbs/pms34na/9zmAbs1HBAAAAj3RSTlMAVFmfECKAQwkXn31ePn9APl8fkjMJuLKilDLn3r9vHBLOv7Kbd/7xvE8QfV1DKyLy3dWSj38uEPHx282opqWCcVFJHBT6397LbWtRJOfgjFpHKyH++fPxlGtnNPjhvLW1rJmOevz69M/EuJ9jYVhNMBz159jPuqqekoU9J9uRfUk27+/q2NDBtLGXj4KBYKmZhRMAAAkFSURBVFjD7ZlnVFN3FMBv26TZaUgISQmEAAHKkF2QvZFZAVuGuLVa21rt3nvPNE8NiSFhyQbZylBERt227m3V7r2/976XSJuBhehpe077g/949+vv3PFeYKasXf3S+vWr58PTjy3csOG15/PAklvetw/8c6gpRvYc22O63QT/AbzXm7jrgw0UC/Mc8bRmNsk9HjATim6YLgIbT2MDGpLTe/4jniY1bdq04YooBzzdvnHjxieemJkmuFU1XW6z9nRSY6bt2HX1xKQh8LdAJwGEhgedTgNgOnMZLCqAT5bMN2v6YdOmTT+aRT3moCc8/iZPZk2tl0+1ajRj19PTEi0iSwKHoOU8eR/yJPfqpplckye+G0Hw8eJGeAJBzAW5H0EQblQAnyxZPZlOyAYzeQ57enz2mpl7OnCgcoaextDRb6cuXmpp+ea771pHrqOnOC1FEcwc1pN3Vpi5822WSZwABEKg4QJnWpSACVECvPm7gzOelBDUwiAIroAg/PH0c/F0oQIEHhasN/MJ6ekDs6f7Hfe08R6gSEuLnq6nLT1belQUw83bpudpQDPQ39LScuGLz8/27vj65F96SgyEaSLTavXIDYCwUlIYFpmRmpoaAhSKVAVYIVj56WjF6Kd9vofH947ufTgKQ8JMSbF7ZlQW/xG6JEueKc3iukukcyVZ7nPdpVJARIQfABtl5RAEXUQQNEAw4IdxCx606+l5K0/ba3Y3NB7qHqqpadzeuLu+rvNQ05Se3gEKr6XhvOl52qKu7VXXkoKq1YZalaqqu1JVW1/fM6zaX9+rGjbY8TSCbenCF58d2bFl30TPvq8HbDylu7o+Aw+6urqSyxWe8XZ1RlhAKyJ3FjuMiRYYuFlDR007d+7U5wMiJ0sgEyYJ0SEPAMkDOmtP9LvVho98jw76+u5S3/3RQbUvC8BfCpkgkRZLM/nF4C4XR9GlEklxkQDdMYsBqMxxFhKECFyw9M3FLCL7FQa4BGGZ0eJp5VNXd2ND41B9Y0P3oZrtQ11DDZ1TefLwwO0F0lO2F8/Li7fUSxkcvjQ3XDmVJ9RU31xZra6uVDWrt+Lz/u7OA6qq3uH6DlVtT71qq9qOp7GBleP7diAdE0ePHvm11cZTojHGG5dxjrcxJsaYmDgnR68P1evloaGheq4oLCyULhTp9Z5CsCZFq92JTFAalsloy7QCmoCFbZ6GzT1V90CqLoJZHhKiiFgFVrypRnb19Q2iJTXJW1c88d2juIJikEqdpVJ5jiTTP8c9i+v/CCA0P0KOqSTEAhgPQjeC6ld8zC8/ggsWzLHXn5629LS5bvOHTU1Nuz9sqvuwbnfTz/hQd5U54sV7SE8cLx7HixMuDlfmpnnxwoPte6I0qVSVtepq9DSMRmrb29tVVdUdnc3Dhq2GrXY9HRuYuHPfxNmznx3pP9ff/73G2lN6TGL6WmOgqzEw0Lh2vjEwJpEVGk8LdQkLY3mGeYax+HqXUBdnkV4E1iRptRkZH+/QPUv1KlmKTCbPkMm0jIwkiItL1iVH6JLzV63SRSx+FKx4GPPIzEFftXrQ92EAQQ5IgR/Fd+cLpSCUSLAzSaIY7hK6EE9AMI9EbgQbWAQhB2CKcJBgoDMReOKyINDOvLfQdt7DytfVVTPU0NDQ1VjTOFQzVT6JPV54d/YdlCeUpIwMh3COUhmpDE+bwlOvuruZKnk9Jk+Vho4OQ2VVT3tnx3hnc227XU972hZUHzxy7tzx/uNnWi5rbPJpvtEVvI3LvY2Bc2LIf2OgXM9m69l6F5E+TK73DPNn6MNEoWwWWLNM+7FusrplaLVxKbJlKI+2JC4poyhCp1sVEZGvCNElPxoBViyo2Dve5+tLZdXBvo69owtgGmCtI9UwyA3Bk8/FccLND+ugBeLJhPqj7OXZ8dS1vaGmZmh7V013w6EurIL2PEUD3LsRIT3xnHjg5MTjAR48cTbvKnWvahtqwo2qe/sNVVWGA1W9mFe1nVXdnXY9qdu+Ot9y6czxM798fv4Uvutae1qeiK68kUDjau/lrq7e8z1fiY/nFsUjIiY6A2B4xjvbHcvRU0RyOSAsbRLZsJKYS2SQkoEZtTifCbD4WUjWpeqSwYqHcMw7vGtX30/qQUPfYXx4HYM+CT7kUpQmFFJ3GximSZxPEEwGm8tloy8XgsIPLHlwUpRFd7LyhKVv82YsdrjVbSb/7Hla8ydPuejJTJo5l3j254h2dW0HaqJuhurqakyu9ipDvWG/4YBqm6FDPTjYa+PppKb1VP/54/2XWi62aTTHbppyzotJp06GPgeu4BnqQrvKWD6hywcTAm0KFZHJlqCzOID8xQAoSZevu0WXClbwcSgfXXm3wfejwb6VoxUVC7gAhbHlsUGl5SU+CeUlQYvKYwvBGmxQ2InMYwQJW4glkE4X4IBhXcyXk6ZeXp5+/0LqJdex73svop/ZazwmPUWmRQZHi8VivEZHi6Nxh2BIm2ouR01mKitxIeRBPlLYeBpBO23fXGhp6cfL6anfc9NNmoDJgumRwn1UtxjMmHQKmUwmJMnoAHgiCgVTAQqwhvbIPkyivb2+h4+O42VBFsaCFkGCT2xpCWZSSWkpLAoCG/hssvqK2FxgiFxc2AzwZ7OFGGfj1QbXtc+IAcl7Oi8dwCFPmEkUk554Sg7HKVLp5JSb7aTMzuY45XKCnZS2npDx/dtm+j1iTEPy/cXL+MI7gp6uH8kRqWDLshT4K4RZJ/54zz0hoZGeKkpLgmJ9YgtjEyoK8QwBx5kXEBCAqyAgAK8IBMwrcMSTxx0WnpS8YKdgXm4wquI5cYATCcDJ5Sx19LvRrVae1HvaNCYGRv4132G5Wd+eeOjLLx868a27PwCVT4UhUBikCPEJKmGGBCngGnjquRVlzxU8tWLeG2VPrVhXtqKsYFaZA55Q1BOzzZ7IuRy9OAVHL40Mzs6mPHGyczG/vBz09CrLyhPy1UBrW+vpsX/V7xpCfz6fL/dngYkQc6FTJCzygWtkFrJi3ax16wrm4a2gbNa8glkOeaKmcgowQbUmDIIYN6o3BYvBAsGN00PABAtusuI9+B8Iudk+8D/XxO+FfUXphJwRtQAAAABJRU5ErkJggg=="}}/>
        </View>
        <View style={styles.opiniones}>
          <Text style={styles.opinionesTitulo}>Aún no hay opioniones</Text>
          <Text style={styles.opinionesTexto}>Esta GiftBox es muy nueva no hay opiniones todavía</Text>
        </View>
      </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  containerKeyboard:{
    flex:1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomWidth:1,
    borderBottomColor: 'gray',
/*     marginTop:'10%' */
  },
  titulo:{
    flex:1,
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
  },
  tituloTitulo:{
    fontSize: 35,
    fontWeight:'bold',
    color:'rgb(63,63,63)'
  },
  tituloPuntuacion:{
    fontSize: 20,
    color: '#F9C53B',
    marginLeft: '5%',
  },
  imageContainer:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#FBFBFB',

  },
  image:{
    marginVertical:'5%',
    resizeMode:'contain',
    height:300,
    width:300,
  },
  descripcionContenedor:{
    marginVertical:'5%',
    flex:1,
    width:'100%',
    height:'100%'
  },
  descripcion:{
    fontSize:18,
    flex:1,
    width:300,
    height:'100%'
  },
  container2:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  acercaDe:{
    flex:1,
  },
  acercaDeTitulo:{
    marginVertical:'5%',
    fontSize:25,
    fontWeight:'bold'
  },
  comprarBoton:{
    backgroundColor:'#FF2A2A',
    paddingHorizontal:'5%',
    paddingVertical:'2%',
    borderRadius:5,
  },
  comprarBotonTexto:{

    fontSize:25,
    fontWeight:'bold',
    color:'white'
  },
  precio:{
    fontSize:30,
    fontWeight:'bold'
  },
  precioPadre:{
    marginVertical:'5%',
    alignItems:'flex-start'
  },
  textoAcercaDe:{
    fontSize:20,
  },
  imagenTarjetas:{
    marginBottom:'5%',
    resizeMode:'contain',
    height:100,
    width:300,
  },
  opiniones:{
    paddingVertical:'5%',
    paddingHorizontal:'5%',
    marginBottom:'5%',
    shadowOffset: {
	  width: 0,
	  height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  opinionesTitulo:{
    fontSize:20,
    fontWeight:'700'
  }
});
