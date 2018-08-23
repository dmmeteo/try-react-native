import React, { Component } from 'react';
import {TouchableHighlight, Alert, Platform, View, FlatList, Text, Image, StyleSheet, RefreshControl} from 'react-native';
import Swipeout from 'react-native-swipeout';
import flatListData from '../data/flatListData';
import AddModal from './AddModal';
import EditModal from './EditModal';
import Icon from 'react-native-vector-icons/Feather';

import {getFoodsFromServer} from '../networking/Server';

class FlatListItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            actiweRowKey: null,
            item: {}
        };
        }
    refreshFlatListItem(changeItem){
        this.setState({item: changeItem});
    }
    render(){
        const swipeSettings = {
            style: {
                borderColor: 'white',
                borderTopWidth: 1
            },
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if (this.state.actiweRowKey != null) {
                    this.setState({actiweRowKey: null});
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({actiweRowKey: this.props.item.key});
            },
            sensitivity: 1,
            right: [
                {
                    onPress: () => {
                        //this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this);
                        let selectedItem = this.state.item.name ? this.state.item : this.props.item;
                        this.props.parentFlatList.refs.editModal.showEditModal(selectedItem, this);
                    },
                    text: (<Icon name="edit" size={30} color="white" />),
                    type: 'primary'
                },
                {
                    onPress: () => {
                        const deleteRow = this.state.actiweRowKey;
                        Alert.alert(
                            'Alert',
                            'You art sure you want to delete?',
                            [
                                {text: 'No', onPress: () => {console.log('Cancel Pressed')}, style: 'cancel'},
                                {text: 'Yes', onPress: () => {
                                    // flatListData.splice(this.props.index, 1);
                                    // Refresh FlatList !
                                    this.props.parentFlatList.refreshFlatList(deleteRow);
                                }},
                                {cancaleble: true}
                            ]
                        )
                    },
                    text: (<Icon name="delete" size={30} color="white" />),
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
                        <Text style={styles.flatListItem}>
                            {this.state.item.name ? this.state.item.name : this.props.item.name}
                        </Text>
                        <Text style={styles.flatListItem}>
                            {this.state.item.foodDescription ? this.state.item.foodDescription : this.props.item.foodDescription}
                        </Text>
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
            deleteRowKey: null,
            refreshing: false,
            foodsFromServer: []
        });
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    componentDidMount(){
        this.refreshDataFromServer();
    }
    onRefresh(){
        this.refreshDataFromServer();
    }
    refreshDataFromServer(){
        this.setState({refreshing: true});
        getFoodsFromServer()
            .then((foods) => {
                this.setState({foodsFromServer: foods});
                this.setState({refreshing: false});
            }).catch((error) => {
                this.setState({foodsFromServer: []})
                this.setState({refreshing: false});
            });
    }
    refreshFlatList(activeKey){
        this.setState((prevState) => {
            return {
                deleteRowKey: activeKey
            }
        });
    }

    _onPressAdd(){
        this.refs.addModal.showAddModal();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    backgroundColor: 'tomato',
                    height: 64,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>
                    <Text style={{color: 'white', marginRight: 45, fontSize: 30}}>Tomato color </Text>
                    <TouchableHighlight 
                        style={{marginRight: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 35,
                            height: 35
                        }}
                        underlayColor='tomato'
                        onPress={this._onPressAdd}
                    >
                        <Icon name="plus-circle" size={30} color="white" />
                    </TouchableHighlight>
                </View>
                <FlatList
                    ref={'flatList'}
                    data={this.state.foodsFromServer}
                    renderItem={({item, index}) => {
                        return (
                            <FlatListItem item={item} index={index} parentFlatList={this}/>
                        )
                    }}
                    keyExtractor={(item, index) => item.key}
                    refreshControl={
                        <RefreshControl 
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh.bind(this)}
                        />
                    }
                />
                <AddModal 
                    ref={'addModal'}
                    parentFlatList={this}
                />
                <EditModal
                    ref={'editModal'}
                    parentFlatList={this}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'tomato',
        paddingTop: Platform.OS === 'ios' ? 34 : 20,
        flex: 1
    },
    flatListItem: {
        padding: 10,
        fontSize: 16,
        color: 'white'
    }
})