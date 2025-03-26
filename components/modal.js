import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';

export function Modalsenha( {senha, handleClose} ){
    return(
        <View style={styles.container}>

            <View style={styles.content}>
                <Text style={styles.titulo}>Senha Gerada</Text>
                
                <Pressable style={styles.press}>
                    <Text style={styles.presstext}>{senha}</Text>
                </Pressable>

                <View style={styles.areabotao}>
                        <TouchableOpacity style={styles.botao}onPress={handleClose}>
                            <Text style={styles.textbotao}>Copiar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={ [styles.botao, styles.botao2] }>
                            <Text style={[styles.textbotao, styles.texbotao2]}>Salvar</Text>
                        </TouchableOpacity>
                </View>
            </View>

        </View>            
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "rgba(24,24,24,0.7)",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    content:{
        backgroundColor: 'white',
        width: '85%',
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    titulo:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 20,
    },
    press:{
        backgroundColor: "#000000",
        width: '85%',
        padding: 10,
        borderRadius: 8,
    },
    presstext:{
        color: "#fff",
        textAlign: 'center',
        fontSize: 20,
    },
    areabotao:{
        flexDirection: 'row',
        width: '85%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    botao:{
        flex: 1,
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 14,
        padding: 8,
    },
    botao2:{
        backgroundColor: '#2F00FFFF',
        borderRadius: 8,
    },
    textbotao:{
        fontSize: 20,
    },
    texbotao2:{
        color: '#fff',
        fontWeight: 'bold',
    },
   
    
});
