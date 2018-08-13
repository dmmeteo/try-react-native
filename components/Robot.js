import React, {Component} from 'react';
import {Image} from 'react-native';

export default class Robot extends Component{
    render(){
        const imageSource = {
            uri: 'https://www.robot-advance.com/EN/ori-maze-breaker-black-silverlit-1885.jpg'
        }
        return(
            <Image 
                source={imageSource}
                style={{width:200, height:200}}
            ></Image>
        );
    }
}