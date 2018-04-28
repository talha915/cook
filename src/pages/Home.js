import React, {Component} from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    ScrollView,
    Image,
    Dimensions
} from 'react-native';
import {Card, CardItem} from 'native-base';
import Data from '../Data/data';
import FitImage from 'react-native-fit-image';
export default class Home extends Component {
    render(){
        return(
            <View>
                <FlatList
                    data={Data}
                    renderItem={
                        ({item})=> 
                        <Card>
                            <CardItem>
                                <Text style={styles.heading}>
                                    {item.name}
                                </Text>
                            </CardItem>
                            <CardItem>
                                <FitImage
                                    style={styles.fitImage}
                                    source={{uri: item.image}}
                                />
                            </CardItem>
                            <CardItem>
                                <Text style= {styles.subheading}>
                                    Ingredients: 
                                </Text>
                            </CardItem>
                            <CardItem>
                                <Text style= {styles.text}> 
                                    {item.Ingredients}
                                </Text>
                            </CardItem>
                        </Card>
                    }
                />
            </View>
        );
    }
}

const styles= StyleSheet.create({
    heading: {
        fontSize: 20,
        color: 'black'
    },
    subheading: {
        color: 'black',
        fontSize: 15
    },
    text: {
        color: 'black'
    },
    fitImage: {
        borderRadius: 20,
    },
});