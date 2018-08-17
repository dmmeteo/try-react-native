import React, { Component } from 'react';
import {Alert, View, FlatList, Text, Image, StyleSheet} from 'react-native';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout';

class FlatListItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            actiweRowKey: null
        }
    }
    render(){
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if (this.state.actiweRowKey != null) {
                    this.setState({actiweRowKey: null});
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({actiweRowKey: this.props.item.key});
            },
            right: [
                {
                    onPress: () => {
                        const deleteRow = this.state.actiweRowKey;
                        Alert.alert(
                            'Alert',
                            'You art sure you want to delete?',
                            [
                                {text: 'No', onPress: () => {console.log('Cancel Pressed')}, style: 'cancel'},
                                {text: 'Yes', onPress: () => {
                                    flatListData.splice(this.props.index, 1);
                                    // Refresh FlatList !
                                    this.props.parentFlatList.refreshFlatList(deleteRow);
                                }},
                                {cancaleble: true}
                            ]
                        )
                    },
                    text: 'Delete',
                    type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        }
        return(
            <Swipeout {...swipeSettings}>
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
            </Swipeout>
        )
    }
}

export default class BasicFlatList extends Component {
    constructor(props){
        super(props);
        this.state = ({
            deleteRowKey: null
        });
    }

    refreshFlatList(deleteKey){
        this.setState((prevState) => {
            return {
                deleteRowKey: deleteKey
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={flatListData}
                    renderItem={({item, index}) => {
                        return (
                            <FlatListItem item={item} index={index} parentFlatList={this}/>
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