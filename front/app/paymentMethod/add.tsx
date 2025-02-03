import {View,Text, StyleSheet} from 'react-native';
import {Link} from 'expo-router';
import {CardForm} from '@/components/paymentMethod/CardForm';

const addView = () => {
    return (
       <View style={styles.container}>
             <View style = {styles.headerContainer}>
                <Link href = "/paymentMethod" > Back</Link>
                <Text style = {styles.headerText}> Registrar tarjeta</Text>
            </View>
            <CardForm/>
       </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems : 'center',
        backgroundColor: '#CCEDEB',
        padding: 20
    },
    headerContainer : {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        marginBottom: 20
    },
    headerText: {
        color : '#080808',
        fontWeight: 'bold',
        fontSize: 20
    },
}) 
export default addView;