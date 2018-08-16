import React, { Component } from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import flatListData from '../data/flatListData';

class FlatListItem extends Component{
    render(){
        return(
            <View style={{
                flex: 1,
                backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen' : 'tomato'
            }}>
                <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
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