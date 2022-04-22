import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      pass: '',
      message: '',
    };
  }

  ChangeUser = (text) => {
    this.setState({ user: text });
  };

  ChangePassword = (text) => {
    this.setState({ pass: text });
  };

  onPress = () => {
    this.setState({ message: '' });
    if (this.state.user == 'rod' && this.state.pass == '12345') {
      this.textPassword.clear();
      this.textUsuario.clear();
      this.props.navigation.navigate('Lista');
    } else {
      this.textPassword.clear();
      this.textUsuario.clear();
      this.setState({
        message: 'contraseña incorrecta',
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view}>
          <Image
            style={styles.img}
            source={require('img/imagen.png')}
          />
        </View>

        <View style={styles.text}>
          <Text style={styles.label}>LOGIN</Text>
        </View>

        <View>
          <Text style={styles.label}> Usuario </Text>
          <TextInput style={styles.input}
            ref={(input) => {
              this.textUsuario = input;
            }}
            onChangeText={(text) => this.ChangeUser(text)}
          />
        </View>

        <View>
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            ref={(input) => {
              this.textPassword = input;
            }}
            secureTextEntry={true}
            onChangeText={(text) => this.ChangePassword(text)}
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text> Ingresar </Text>
        </TouchableOpacity>

        <Text style={styles.message}> {this.state.message} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 45,
    backgroundColor: 'red'
  },

  text: {
    alignItems: 'center',
    padding: 10,
  },

  view: {
    alignItems: 'center',
  },

  img: {
    width: 150,
    height: 150,
  },

  button: {
    top: 8,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    paddingVertical: 8,
    marginHorizontal: 10,
    borderRadius: 5,
    padding: 10,
  },

  input: {
    paddingVertical: 4,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
  },

  label: {
    marginBottom: 3,
    marginHorizontal: 10,
  },
  
  message: {
    margin: 20
  }
});