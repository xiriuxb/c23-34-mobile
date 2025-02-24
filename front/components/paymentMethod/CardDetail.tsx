import {View, StyleSheet, Text} from 'react-native';

interface CardProps {
    number : string,
    brand : string
}
export function CardDetail({number, brand}: CardProps){
    return (
        <View style={styles.container}>
                <Text style = {styles.numberText}> . . . . {number} </Text>
                <Text style = {styles.brandText}> {brand} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        borderRadius : 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: '#e6713c',
        minWidth: 300,
        minHeight :150,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexDirection: 'row',
    },
    numberText : {
        fontSize : 10,
        fontWeight : 'bold',
        padding: 5,
        color : 'white',
        backgroundColor : '#444444',
        opacity: 0.8,
        borderRadius: 5,
        textAlign: 'center',
        
    },
    brandText : {
        color : '#f0f0f0',
        fontSize : 15
    }
})