import React, { Component } from 'react';
import {View, FlatList, Text, Image, StyleSheet} from 'react-native';
import flatListData from '../data/flatListData';

class FlatListItem extends Component{
    render(){
        return(
            <View style={{
                flex:1,
                flexDirection: 'row',
                borderBottomColor: 'white',
                borderBottomWidth: 1,
                backgroundColor: 'mediumseagreen'
            }}>
                <Image source={{uri: this.props.item.imageUrl}}
                    style={{width: 100, height: 100, margin: 5,}}
                />
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                    <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
                </View>
            </View>
        )
    }
}

export default class BasicFlatList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={flatListData}
                    renderItem={({item, index}) => {
                        return (
                            <FlatListItem item={item} index={index} />
                        )
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1
    },
    flatListItem: {
        padding: 10,
        fontSize: 16,
        color: 'white'
    }
})