import { connect } from "react-redux";
import React, { useEffect } from 'react'
import { Button, ImageBackground, Text, View } from "react-native";
import Loader from "./Loader";
import { useState } from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Carrito=({carrito})=>{
    const [carrito1,setCarrito1]=useState(null)
    console.log("=00000000000000000000000000000000")
    useEffect(() => {
        setCarrito1(carrito)

    }, ["",carrito])
    console.log(carrito1)
    console.log("0000000000000000000000000000000")
    return(
        <>
        <ScrollView>
        <View style={{flex:1,paddingBottom:50}}>
        
            <View >
                <Text style={{fontSize:40, fontWeight:'bold',paddingVertical:20}}> Tu carrito</Text>
            </View>
            <View style={{height:'100%',width:'100%',alignItems:'center'}}>
                <View >
                
                {carrito1&& carrito1.map((paquete) => {
                    return (<View>
                        
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <ImageBackground style={{width:100,height:100,marginBottom:35,marginLeft:20}} source={{uri:paquete.imagen}} resizeMode='cover'>
                            </ImageBackground>
                            <View>
                                <Text style={{fontSize:22,marginLeft:20}}>${paquete.precio}</Text>
                            </View>
                            <View>
                                <Text style={{fontSize:22,marginLeft:100}}>{paquete.cantidad}+</Text>
                            </View>
                        </View>
                    </View>)
                    

                    })}
                    {carrito1&& carrito1.map((paquete) => {
                    return (
                            <View style={{flexDirection:'row',justifyContent:'space-between',width:'70%'}}>
                                <Text style={{fontSize:22,marginLeft:20}}>{paquete.nombre}</Text>
                                <Text style={{fontSize:22,marginLeft:20}}>{paquete.precio}</Text>
                            </View>
                    )
                    
                    })}
                
                    {/* {carrito1 && carrito1.map(paquete=>
                        <View>
                            <View > */}
                                {/* <Text>{paquete.nombre}</Text> */}
                                {/* <Text>borrar</Text> */}
                            {/* </View> */}
                            {/* <View className="carritoPaqueteContenido">
                                <View id="carritoImagen">
                                    <View className="carritoImagen" style={{backgroundImage: `url(${paquete.imagen})`}}></View>
                                </View>
                                <View id="carritoDescripcion">
                                    <View>
                                        <p> <BsFillPeopleFill/> Para {paquete.cantidadPersonas} personas o mas</p>
                                        <p>Stock: {paquete.stock}</p>
                                    </View>
                                    <View>
                                        <h3>${paquete.precio}</h3>
                                    </View>
                                </View>
                                <View id="carritoCantidad">
                                    <Button className="buttonCarrito"><BsDash/></Button>
                                    <View style={{margin:"0 0.5vw"}}><h5 >x{paquete.cantidad}</h5></View>
                                     <Button className="buttonCarrito"><BsPlus/></Button>
                                </View>
                            </View> */}
                        {/* </View>)} */}
                </View>
            </View>
        </View>
        </ScrollView>
            {/* <h1>Lista del carrito</h1>
            <div>
                {carrito  && carrito.map(paquete=>
                <div style={{display:"flex",justifyContent:"space-evenly",border:"solid blue",width:"100vh",height:"10vh"}}>
                    <p>{paquete.nombre}</p> 
                    <button style={{width:"15%"}} value={1} onClick={(e)=>actualizarCarrito(paquete,e.target.value)}>+</button>
                    <button style={{width:"15%"}} value={-1} onClick={(e)=>actualizarCarrito(paquete,e.target.value)}>-</button>
                    <button style={{width:"15%"}} onClick={()=>eliminarDelCarrito(paquete)}>borrar</button>
                    <p>{paquete.cantidad}</p>
                    <p>${paquete.precio*paquete.cantidad}</p>
                </div>)}
                <p>TOTAL: {total}</p>
            </div> */}
        
        </>
    )
}
const mapStateToProps = state => {
    return {
        carrito:state.carritoReducer.carrito
    }
}


export default connect(mapStateToProps,null)(Carrito)