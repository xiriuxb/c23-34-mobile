import {View, StyleSheet, Text} from 'react-native';
import {Link} from 'expo-router';

interface CardProps {
    id: string,
    number : string,
    brand : string
}
export function Card({id, number, brand}: CardProps){
    return (
       <Link asChild href={`/paymentMethod/${id}`}>
            <View style={styles.container}>
                <Text style = {styles.numberText}> . . . . {number} </Text>
                <Text style = {styles.brandText}> {brand} </Text>
            </View>
       </Link>
    )
}

const styles = StyleSheet.create({
    container : {
        borderRadius : 10,
        padding: 10,
        backgroundColor: '#e6713c',
        minWidth: 300,
        minHeight :80,
        justifyContent: 'space-between',
        alignItems: 'center',
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