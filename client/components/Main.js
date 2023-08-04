import React, { Component } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native';
import MyButton from './MyButton';
import settings from './Settings.json'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} >
                <View style={{ flex: 9, justifyContent: "center", alignItems: "center", backgroundColor: "#5d4037" }}>
                    <Text style={{ fontSize: 48, textAlign: "center", color: "white" }}>Register App</Text>
                </View>
                <View style={{ flex: 2, justifyContent: "center", alignItems: "center", borderBottomWidth: 1}}>
                    <MyButton title="Admin" onPress={() => this.registerUser(false)} />
                </View>
                <View style={{ flex: 10, padding: 20 }}>
                    <Text style={{ fontSize: 20 }}>username</Text>
                    <TextInput
                        style={{ height: 40, marginBottom: 20 }}
                        placeholder="username"
                        onChangeText={text => this.setUsername(text)}
                        defaultValue={this.state.text}
                    />
                    <Text style={{ fontSize: 20 }}>password</Text>
                    <TextInput
                        style={{ height: 40, marginBottom: 20 }}
                        placeholder="password"
                        onChangeText={text => this.setPassword(text)}
                        defaultValue={this.state.text}
                    />
                    <MyButton title="Zarejestruj" onPress={() => this.registerUser(true)} />
                </View>
            </KeyboardAvoidingView>
        );
    }
    setUsername(newText) {
        this.setState({ username: newText })
    }
    setPassword(newText) {
        this.setState({ password: newText })
    }
    registerUser(adding) {
        fetch(settings.url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                adding: adding,
                username: this.state.username,
                password: this.state.password
            })
        })
            .then((response) => response.json())
            .then((json) => {
                if (json.alert) {
                    window.alert("server response\nUSEREXIST")
                } else {
                    this.props.navigation.navigate("admin", json.tab)
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }
}