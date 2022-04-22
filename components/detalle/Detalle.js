import React, {Component} from 'react';
import {View, Text,Image, StyleSheet} from 'react-native';

export default class Detalles extends Component {
  render() {
    const {params} = this.props.route;
    return ( 
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>{params.itemObject.title}</Text>
        <Image style={styles.imagen} source={{uri:params.itemObject.medium_cover_image}}/>
        <Text style={styles.descripcion}>{params.itemObject.summary}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    contenedor: {
      padding: 20,
      alignItems: 'center',
      marginVertical: 8,
      marginHorizontal: 16,
    },
    titulo: {
      fontSize: 20,
      textAlign: 'center',
    },
    imagen: {
      width: 100, 
      height:100,
      marginTop: 10,
      borderRadius:50, 
    },
    descripcion: {
      marginTop: 20,
      fontSize: 13,
    },
});