import {AsyncStorage} from 'react-native';
const USERNAME = "uname"

const signIn = async (username, password) => {
    await AsyncStorage.setItem(USERNAME, username);
    return new Promise((resolve, rejects)=>{
        resolve(true);
    })
}

const signOut = async ()=>{
    await AsyncStorage.removeItem(USERNAME);
    return new Promise((resolve, rejects)=>{
        resolve()
    })
}

const isSignedIn = async ()=>{
    const user = await AsyncStorage.getItem(USERNAME);
    return new Promise((resolve,rejects)=>{
        resolve(user===null ? false : true);
    })
}

export {signIn, signOut, isSignedIn}