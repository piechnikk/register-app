import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import ListItem from './ListItem';
import settings from './Settings.json';

export default class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <FlatList
                data={this.props.route.params}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => <ListItem num={index} item={item} showDetails={(i) => this.showDetails(i)} deleteElement={(i) => this.deleteElement(i)} />}
            />
        );
    }
    showDetails(i) {
        this.props.navigation.navigate("details", this.props.route.params[i])
    }
    deleteElement(i) {
        fetch(settings.url + "/delete", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                index: i,
            })
        })
            .then((response) => response.json())
            .then((json) => {
                this.props.navigation.navigate("admin", json)
            })
            .catch((error) => {
                console.error(error);
            });
    }
}
