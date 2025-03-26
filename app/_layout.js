import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';

import Slider from '@react-native-community/slider';

import { useState } from 'react';

import {Modalsenha} from '../components/modal';



export default function _layout() {
    const [size, setSize] = useState(10);
    const [senha, setSenha] = useState('');
    const [modalvisivel, setModalvisivel] = useState(false);

    function gerarSenha(){
        let caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let tamanho = caracteres.length;
        let senha = '';

        for(let i = 0; i < size; i++){
            senha += caracteres.charAt(Math.floor(Math.random() * tamanho));
        }
        console.log("Senha gerada: " + senha);  

        setSenha(senha);
        setModalvisivel(true);
    }

  return (

    <View style={styles.container}> 
        <Image source={require('../assets/images/logo.png')}
        style={styles.logo}/>

        <Text style={styles.caracteres}>{size} CARATERES</Text>

        <View style={styles.areaSlider}>
            <Slider 
            style={styles.slider}
            minimumValue= {5}
            maximumValue= {20}
            minimmumTrackTintColor= "#fffb00"
            thumbTintColor="#2F00FFFF"
            value={size}
            onValueChange={ (value) => setSize(value.toFixed(0)) }
            />
        </View>

        <TouchableOpacity 
        style={styles.botao}
        onPress={ gerarSenha }>
            <Text style={styles.botaoText}> Gerar senha </Text>
        </TouchableOpacity>

        <Modal visible={modalvisivel} 
        animationType="fade"
        transparent={true}>

            <Modalsenha senha={senha}
            handleClose={ () => setModalvisivel(false) } />
        </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dad9d9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo:{
    marginBottom: 50
  },

  caracteres:{
    fontSize: 30,
    fontWeight: 'bold',
  },

  areaSlider:{
    marginTop: 30,
    marginBottom: 30,
    width: "60%",
    backgroundColor: 'white',
    borderRadius: 10,
  },

  slider:{
    height: 50,
  },

  botao:{
    backgroundColor: '#2F00FFFF',
    width: "60%",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  botaoText:{
    color: 'white',
    fontSize: 18,
  },

});