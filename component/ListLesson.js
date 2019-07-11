import React, {Component} from 'react';
import {Text, TextInput, View, StyleSheet, justifyContent, Button, FlatList} from 'react-native';
import {connect} from 'react-redux';

import addLesson from '../redux/lessonAction';


type Props = {};
class ListLesson extends Component<Props> {
    static navigationOptions = {
        title: 'List Data'
    }

    static navigationOptions = {header: null}
    
    constructor(props){
        super(props);
        this.state = {
          id: String,
          description: String
        }
      }
      
  render() {
    let data = this.props.lessons;
    return (
        <View>
            <View>
            <Button
                onPress={
                    ()=> this.props.navigation.navigate('Add') 
                }
                title="add"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            </View> 
            <View>
                <FlatList
                    data={data}
                    renderItem={({item}) => <Text> {item.id} - {item.description} </Text>}
                />
            </View>
        </View>
    );
  }
}

const mapStateToProps = (state) => {
    const {lessons} = state
    return {lessons}
}

export default connect(mapStateToProps)(ListLesson);

const styles = StyleSheet.create({
    rowForm: {
        justifyContent: "center",
        flexDirection: "row"
    },
    formSize: {
        height: 40, 
        width:250, 
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