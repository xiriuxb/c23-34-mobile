import { View, Text, StyleSheet} from 'react-native';
import { useState, useEffect } from 'react';
import { Card } from '@/components/paymentMethod/Card';
import {Link} from 'expo-router';

const indexView = () => {

    const [cards, setCards] = useState( [
        {
            id : '001',
            number : '3456',
            brand : 'Visa'
        },
        {
            id : '002',
            number : '3456',
            brand : 'Mastercard'
        }
    ]); 
    const token = "";

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch('http://localhost:3000/cards', {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                });
                const json = await response.json();
                setCards(json);
            } catch (error) {
                console.log(error);
            }
        };

        fetchCards();
    }, []);

    return (
        <View style={styles.container}>
            {cards.length > 0 ? (
                cards.map((c) => (
                    <Card key={c.id} number={c.number} brand = {c.brand} id = {c.id}/> 
                ))
            ) : (
                <Text>The are no cards registered</Text>
            )}
            <Link href="/paymentMethod/add" style = {styles.link}> Add Card</Link>
          
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        gap: 10,
    },
    link : {
        color : 'white',
    }
});

export default indexView;
