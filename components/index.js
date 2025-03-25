import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function Modalsenha(){
    return(
        <View container={styles.container}>
            <View style={styles.content}>
                <Text style={styles.titulo}>Senha Gerada</Text>
            </View>
        </View>            
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FF0000FFFF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content:{
        backgroundColor: '#FF0000FF',
        
    },
    titulo:{
        fontSize: 20,
        fontWeight: 'bold',
    } 
    
});
