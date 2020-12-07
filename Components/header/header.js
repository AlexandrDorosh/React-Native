import React from 'react'
import { ScrollView, View, Text, StyleSheet, FlatList, Button } from 'react-native'


class Header extends React.Component {
    render(){
        return(
            <View style={styles.header}>
                <ScrollView horizontal={true}>
                    <Text style={styles.text}>Phones</Text>
                    <Text style={styles.text}>Computers</Text>
                    <Text style={styles.text}>Laptops</Text>
                    <Text style={styles.text}>TVs</Text>
                    <Text style={styles.text}>Cameras</Text>
                </ScrollView>
                
                
            </View>

                
        )
    }
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: '#D8BFD8'
    },
    text: {
        fontSize: 30,
        color: 'black',
        marginVertical: 30,
        marginHorizontal: 10
    }
})

export default Header;