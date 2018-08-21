import React, { Component } from 'react';
import {View, Text, SectionList} from 'react-native';
import sectionListData from '../data/sectionListData';

class SectionHeader extends Component{
    render(){
        return(
            <View style={{
                flex: 1,
                backgroundColor: 'rgb(77,120,140)'
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'white',
                    margin: 20
                }}>{this.props.section.title}</Text>
            </View>
        );
    }
}
class SectionListItem extends Component{
    render(){
        return(
            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'rgb(98, 197, 184)'
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'rgb(173, 252, 250)',
                    marginLeft: 20,
                    marginRight: 10
                }}>{this.props.item.name}</Text>
                <Text style={{
                    borderBottomWidth: 1,
                    borderColor: 'rgb(77,120,250)',
                    fontSize: 15,
                    color: 'rgb(173, 252, 250)',
                    marginLeft: 20,
                    marginRight: 10,
                    marginBottom: 4
                }}>{this.props.item.description}</Text>
            </View>
        )
    }
}
export default class BasicSectionList extends Component {
    render() {
        return (
            <View style={{flex: 1, marginTop: 20}}>
                <SectionList
                    renderItem={({ item, index }) => <SectionListItem item={item} index={index} />}
                    renderSectionHeader={({section}) => <SectionHeader section={section} />}
                    sections={sectionListData}
                    keyExtractor={(item, index) => item.name + index}
                />
            </View>
        );
    }
}
