import React, {Component} from 'react';
import {Text, TextInput, View, StyleSheet, justifyContent, Button} from 'react-native';
import {addLesson} from '../redux/lessonAction'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

type Props = {};
class AddLesson extends Component<Props> {
    static navigationOptions = {header: null}
    
    constructor(props){
        super(props);
        this.state = {
            data : {
                id:'',
                description :'' 
              }
        }
      }
      
  render() {
      const data = {
        id: this.state.id,
        description : this.state.description
      }
    return (
        <View>
            <View style = {styles.rowForm}>
                <Text> id </Text>
                <TextInput
                    style={styles.formSize}
                    onChangeText={(text) =>{
                        let newData = Object.assign({}, this.state.data)
                        newData.id = text;
                        this.setState({data: newData})
                        } 
                    }
                />
            </View>
            <View style = {styles.rowForm}>
                <Text> description </Text>
                <TextInput
                    style={styles.formSize}
                    onChangeText={(text) => 
                        {
                            let newData = Object.assign({}, this.state.data)
                            newData.description = text;
                            this.setState({data: newData})
                        } 
                    }
                />
            </View>

            <View>
            <Button
                onPress={
                    this._handleAddNew 
                }
                title="add"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            </View> 

        </View>
    );
  }

  _handleAddNew =()=> {
    this.props.addLesson(this.state.data);
    this.props.navigation.navigate('list');
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addLesson,
    }, dispatch)
);

export default connect(null, mapDispatchToProps)(AddLesson);

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