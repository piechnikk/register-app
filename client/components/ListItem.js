import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import img from '../assets/user.png';
import MyButton from './MyButton';

export default class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, height: 40, flexDirection: "row", alignItems: "center", margin: 10, justifyContent: "space-between" }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={img} style={{ height: 40, width: 40 }} />
                    <Text style={{ fontSize: 18 }}>{this.props.num + 1 + ". u: \"" + this.props.item.username + "\", p: \"" + this.props.item.password + "\""}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <MyButton title="DETAILS" onPress={() => this.props.showDetails(this.props.num)} />
                    <MyButton title="DELETE" onPress={() => this.props.deleteElement(this.props.num)} />
                </View>
            </View>
        );
    }
}
