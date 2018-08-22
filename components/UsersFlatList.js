import React, { Component } from 'react';
import { TouchableHighlight, Alert, Platform, View, FlatList, Text, Image, StyleSheet } from 'react-native';
import Swipeout from 'react-native-swipeout';
import flatListData from '../data/flatListData';
import AddModal from './AddModal';
import EditModal from './EditModal';
import Icon from 'react-native-vector-icons/Feather';

import { getFoodsFromServer } from '../networking/Server';

class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            actiweRowKey: null,
            numberOfRefresh: 0
        }
    }
    refreshFlatListItem() {
        this.setState((prevState) => {
            return {
                numberOfRefresh: prevState.numberOfRefresh + 1
            }
        });
    }
    render() {
        const swipeSettings = {
            style: {
                borderColor: 'white',
                borderTopWidth: 1
            },
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if (this.state.actiweRowKey != null) {
                    this.setState({ actiweRowKey: null });
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ actiweRowKey: this.props.item.key });
            },
            sensitivity: 1,
            right: [
                {
                    onPress: () => {
                        this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this);
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
                                { text: 'No', onPress: () => { console.log('Cancel Pressed') }, style: 'cancel' },
                                {
                                    text: 'Yes', onPress: () => {
                                        flatListData.splice(this.props.index, 1);
                                        // Refresh FlatList !
                                        this.props.parentFlatList.refreshFlatList(deleteRow);
                                    }
                                },
                                { cancaleble: true }
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
        return (
            <Swipeout {...swipeSettings}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: 'mediumseagreen'
                }}>
                    <Icon name='user' size={100} color='white'/>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                        <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                        <Text style={styles.flatListItem}>{this.props.item.email}</Text>
                    </View>
                </View>
            </Swipeout>
        )
    }
}

export default class BasicFlatList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            deleteRowKey: null,
            foodsFromServer: []
        });
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer() {
        getFoodsFromServer()
            .then((foods) => {
                this.setState({ foodsFromServer: foods });
            }).catch((error) => {
                this.setState({ foodsFromServer: [] });
            });
    }

    refreshFlatList(activeKey) {
        this.setState((prevState) => {
            return {
                deleteRowKey: activeKey
            }
        });
    }

    _onPressAdd() {
        this.refs.addModal.showAddModal();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    backgroundColor: 'black',
                    height: 64,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>
                    <TouchableHighlight
                        style={{
                            marginRight: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 35,
                            height: 35
                        }}
                        underlayColor='black'
                        onPress={this._onPressAdd}
                    >
                        <Icon name="plus-circle" size={30} color="white" />
                    </TouchableHighlight>
                </View>
                <FlatList
                    ref={'flatList'}
                    data={this.state.foodsFromServer}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListItem item={item} index={index} parentFlatList={this} />
                        )
                    }}
                    keyExtractor={item => item.phone}
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
        backgroundColor: 'black',
        paddingTop: Platform.OS === 'ios' ? 34 : 20,
        flex: 1
    },
    flatListItem: {
        padding: 10,
        fontSize: 16,
        color: 'white'
    }
})