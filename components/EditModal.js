import React, { Component } from 'react';
import { Text, TextInput, Dimensions, Keyboard, StyleSheet, View, Alert, FlatList } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';

const screen = Dimensions.get('window');
class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodName: '',
            foodDescription: ''
        }
    }
    showEditModal(editingFood, flatListItem) {
        this.setState({
            key: editingFood.key,
            foodName: editingFood.name,
            foodDescription: editingFood.foodDescription,
            flatListItem: flatListItem
        })
        this.refs.myModal.open();
    }
    gentrateKey(numberOfCharacters) {
        return require('random-string')({ length: numberOfCharacters });
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
                    placeholder="Enter food's name"
                    underlineColorAndroid='transparent'
                    value={this.state.foodName}
                    onChangeText={(text) => this.setState({ foodName: text })}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter food's description"
                    underlineColorAndroid='transparent'
                    value={this.state.foodDescription}
                    onChangeText={(text) => this.setState({ foodDescription: text })}
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
                        if (this.state.foodName.length == 0 || this.state.foodDescription.length == 0) {
                            alert("You must enter food's name and description");
                            return;
                        }
                        let foundIndex = flatListData.findIndex(item => this.state.key == item.key);
                        if (foundIndex < 0){return;}
                        flatListData[foundIndex].name = this.state.foodName;
                        flatListData[foundIndex].foodDescription = this.state.foodDescription;
                        this.state.flatListItem.refreshFlatListItem();
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

export default EditModal;