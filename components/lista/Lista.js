import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

function Item({title,image}) {
  return (
    <View style={styles.contenedor}>
      <Image source={{uri:image}} style={styles.imagen}/>
      <Text style={styles.titulo}>{title}</Text>
    </View>
  );
}

export default class ConexionFetch extends Component {
  constructor (props){
    super(props);
    this.state = {
      textValue: 0,
      count: 0,
      items: [],
      error: null,
    };
  }

  async componentDidMount() {
    await fetch('https://yts.mx/api/v2/list_movies.json')
    .then(res => res.json())
    .then(
      result => {
        console.warn('result', result.data.movies);
        this.setState({items:result.data.movies});
      },
      error => {
        this.setState({error: error,});
      },
    );
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.items.length > 0 ? this.state.items:[]}
          renderItem={({item}) => {
            return(
              <TouchableOpacity onPress={() => navigate('Detalle', {itemObject: item})}>
                <Item
                  title={item.title}
                  image={item.medium_cover_image} 
                  navigation={this.props.navigation}
                />
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.id}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 1,
    },

    contenedor: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      padding: 5,
      marginTop: 2,
      backgroundColor: 'red',
    },

    titulo: {
      marginLeft: 20,
      fontSize:13,
    },

    imagen: {
      width: 50, 
      height:50,
      borderRadius:50, 
    },
});
