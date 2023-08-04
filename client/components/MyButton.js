import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class MyButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={{ alignItems: "center", margin: 10 }}>
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

MyButton.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
};