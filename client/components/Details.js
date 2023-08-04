import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import img from '../assets/user.png';

export default class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Image source={img} style={{ height: "40%", width: "40%" }} />
                <Text>login: {this.props.route.params.username}</Text>
                <Text>password: {this.props.route.params.password}</Text>
                <Text>registered: {this.props.route.params.registered}</Text>
            </View>
        );
    }
}
