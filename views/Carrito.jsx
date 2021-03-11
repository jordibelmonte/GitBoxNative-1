import { connect } from "react-redux";
import React, { useEffect } from 'react'
import { Button, Text, View } from "react-native";
import Loader from "./Loader";
import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Carrito=({carrito})=>{
    
    console.log("=00000000000000000000000000000000")
    console.log(carrito)
    console.log("0000000000000000000000000000000")
    return(
        <>
        <View>
            <View >
                <Text> Tu carrito</Text>
            </View>
            <View style={{height:500,width:600}}>
                <View >
                <FlatList
                data={carrito}
                keyExtractor={({ _id},index) => _id}
                renderItem={({ item }) => (
                    <View style={{width:300,height:300}}>
                        
                        
                            <Text style={{height:200,width:200, fontSize:20}}>{item.nombre}</Text>
                       
                       
                    </View>
                )}
            />
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