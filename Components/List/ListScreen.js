import React from 'react';
import { ScrollView, View } from 'react-native';
import ListScreenItem from '../list-screen-item/list-screen-item';
import Header from '../header/header';

const ListScreen = ({ goods }) => {
    return (
        <View>
            <Header />
            <ScrollView>
            {
            goods.map((good) => {
                return(
                    <View key={good.id}>
                        <ListScreenItem 
                            good={good} /></View>
                )
                })
            }
            </ScrollView>
        </View>
    )
}

export default ListScreen;