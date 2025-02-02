import {View,Text, StyleSheet} from 'react-native';
import {CardForm} from '@/components/paymentMethod/CardForm';

const addView = () => {
    return (
       <View>
            <Text style= {styles.text}> Add Card</Text>
            <CardForm/>
       </View>
    )
}

const styles = StyleSheet.create({
    text : {
        color : 'white'
    }
}) 
export default addView;