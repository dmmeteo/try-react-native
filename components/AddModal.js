import React, { Component } from 'react';
import { Text, TextInput, Dimensions, Keyboard, StyleSheet, View, Alert, FlatList } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';

import {insertNewFoodToServer} from '../networking/Server';

const screen = Dimensions.get('window');
class AddModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            newFoodName: '',
            newFoodDescription: ''
        }
    }
    showAddModal(){
        this.refs.myModal.open();
    }
    gentrateKey(numberOfCharacters){
        return require('random-string')({length: numberOfCharacters});
    }
    render() {
        return (
            <Modal
                ref={'myModal'}
                style={{
                    justifyContent: 'center',
                    borderRadius: 30,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 280
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    Keyboard.dismiss;
                }}
            >
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40
                }}>New food's information</Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Enter new food's name"
                    underlineColorAndroid='transparent'
                    value={this.state.newFoodName}
                    onChangeText={(text) => this.setState({newFoodName: text})}
                />
                <TextInput 
                    style={styles.textInput}
                    placeholder="Enter new food's description"
                    underlineColorAndroid='transparent'
                    value={this.state.newFoodDescription}
                    onChangeText={(text) => this.setState({newFoodDescription: text})}
                />
                <Button
                    style={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'mediumseagreen',
                        color: 'white'
                    }}
                    onPress={() => {
                        if (this.state.newFoodName.length == 0 || this.state.newFoodDescription.length == 0){
                            alert("You must enter food's name and description");
                            return;
                        }
                        const newKey = this.gentrateKey(24)
                        const newFood = {
                            key: newKey,
                            name: this.state.newFoodName,
                            imageUrl: 'https://image.freepik.com/free-icon/restaurant-cutlery-circular-symbol-of-a-spoon-and-a-fork-in-a-circle_318-61086.jpg',
                            foodDescription: this.state.newFoodDescription
                        };
                        // flatListData.push(newFood);
                        // this.props.parentFlatList.refreshFlatList(newKey);
                        insertNewFoodToServer(newFood).then(result => {
                            if (result === 'ok') {
                                this.props.parentFlatList.refreshDataFromServer();
                            }
                        })
                        this.setState({
                            newFoodName: '',
                            newFoodDescription: ''
                        });
                        this.refs.myModal.close()
                    }}
                >
                    Save
                </Button>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderBottomColor: 'gray',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        marginBottom: 10,
        borderBottomWidth: 1
    }
})

export default AddModal;