import React, {Component} from 'react';
import {signIn, signOut, isSignedIn} from '../services/auth';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Thumbnail } from 'native-base';
import image from '../assets/foto.jpg'

type Props = {};
export default class Home extends Component<Props> {
    static navigationOptions = {header: null}
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent 
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name='menu'/>
            </Button>
          </Left>
          <Body>
            <Title>Agus</Title>
          </Body>
          <Right>
              <Thumbnail source={image}/>
          </Right>
        </Header>
        <Content>
        <Button
                onPress={() => this._isLogin()}
            >
              <Text> Check Auth </Text>
        </Button>
        <Button
                onPress={() => this._signOut()}
            >
              <Text> Remove </Text>
        </Button>
        </Content>
      </Container>
    );
  }

  _isLogin = async ()=>{
    const signIn = await isSignedIn().catch((err)=>{alert(err)});
    if(signIn){
      alert(signIn);
    }else{
      alert(signIn);
    }
  }
  _signOut = async ()=>{
    const out = await  signOut().catch((err)=>{alert(err)})
    if(out){
      alert('success');
    }
  }
}