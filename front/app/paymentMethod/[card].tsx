import {View,Text, StyleSheet} from 'react-native';
import {Link, useLocalSearchParams} from 'expo-router';  

const CardDetails = () => {
    const  {card} = useLocalSearchParams();
    return (
        <View >
            <Text style = {styles.text}> Card Details {card}</Text>
            <Link href = "/paymentMethod" style = {styles.text}> Back</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    text : {
        color : 'white'
    }
})

export default CardDetails; 