import React, {Component} from 'react';
import {TextInput, View, StyleSheet, justifyContent} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Thumbnail } from 'native-base';
import image from '../assets/foto.jpg';
import {signIn, signOut, isSignedIn} from '../services/auth';

type Props = {};
export default class Login extends Component<Props> {
    static navigationOptions = {header: null}
    
    constructor(props){
        super(props);
        this.state = {
          username: String,
          password: String
        }
      }
  render() {
    return (
      <Container>
        <Content>

            <Text>username: {this.state.username}</Text>
            <Text>password: {this.state.password}</Text>

            <Text style = {styles.fontStyle}> Login </Text>
            <View style = {styles.rowForm}>
                <Text> Username </Text>
                <TextInput
                    style={styles.formSize}
                    onChangeText={(text) => this.setState({username: text})}
                />
            </View>

            <View style = {styles.rowForm}>
                <Text> Password </Text>
                <TextInput
                    style={styles.formSize}
                    onChangeText={(text) => this.setState({password: text})}
                />
            </View>

            <Button style ={styles.buttonStyle}
                onPress={() => this._login(this.state.username, this.state.password)}
            >
              <Text> Login </Text>
            </Button>

            <Thumbnail style={styles.imageStyle} large source={image}/>

        </Content>
      </Container>
    );
  }

  _login = async (username, password)=>{
    const islogin = await signIn(username, password).catch((err)=>{alert(err)})
    if(islogin){
        this.props.navigation.navigate('home');
    }
  }

  _loginProccess = (query) =>{
    const data = {
        username: this.state.username,
        password: this.state.password
    }  
    fetch("url",{
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
    }).then((result)=>
        result.json().then((data) =>{
            alert(data);
        })
    )}
}

const styles = StyleSheet.create({
    rowForm: {
        justifyContent: "center",
        flexDirection: "row"
    },
    formSize: {
        height: 40, 
        width:300, 
        borderColor: 'blue', 
        borderWidth: 1,
        justifyContent: "space-between"
    },
    buttonStyle: {
        alignSelf: "center",
        alignItems: "center",
        color: 'blue'
    },
    fontStyle: {
        alignSelf: "center",
        fontSize: 25
    },
    imageStyle: {
        alignSelf: "center",
        height: 100,
        width: 100
    }
})