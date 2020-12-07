import React from 'react';
import { View, Image, Text, StyleSheet, FlatList } from 'react-native';

const ListScreenItem = ({ good }) => {
    const { name, title, category, price, image } = good;
    return (
        <View style={styles.container}>
                <Text style={ styles.name }>{ name }</Text>
                <View>
                    <Image style={{width: 200, height: 200}} source={{uri: image}} />
                </View>
                <View style={ styles.list }>
                    <Text style={ styles.title }>{ title }</Text>
                    <Text style={{ fontSize: 25 }}>category: { category }</Text>
                    <Text style={ styles.price }>Price: ${ price }</Text>
                </View>
        </View>
        
    );
};

export default ListScreenItem;
        
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        // width: 400,
        backgroundColor: 'white',
    },
    list: {
        flexDirection: 'column',
    },
    title: {
        marginTop: 30,
        maxWidth: 180,
        fontSize: 25,
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    },
    name: {
        fontSize: 23,
        textDecorationLine: 'underline',
        margin: 5,
        marginTop: 30,
        color: 'tomato'
    },
    price: {
        color: 'red',
        fontSize: 25
    }
})

