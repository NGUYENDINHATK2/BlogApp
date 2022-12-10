import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableHighlight, Alert, BackHandler, Platform } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
const LoginScreen = () => {
    const natigation = useNavigation();
    const [hidePass, setHidePass] = React.useState(true);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin = () => {
        if (email === '' || password === '') {
            Alert.alert('Thông báo', 'Vui lòng nhập đầy đủ thông tin');
        } else {
            const res = axios.post('http://192.168.254.80:8000/api/LoginBlogApp')
            res.then((res) => {
                if (res.data.status == true) {
                    natigation.navigate('Main');
                } else {
                    Alert.alert('Thông báo', 'Đăng nhập thất bại');
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }
    React.useEffect(() => {
        const backAction = () => {
            BackHandler.exitApp()
            return true;
        };
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        return () => backHandler.remove();
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.imageCotainer}>
                <Image
                    source={{
                        uri: 'https://png.pngtree.com/png-clipart/20210404/original/pngtree-cartoon-galaxy-stars-universe-png-image_6182660.png'
                    }}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.formLoginContainer}>
                <Text style={styles.totleLogin}>Sign Up</Text>
                <View style={styles.formLogin}>
                    <View style={styles.formLoginEmail}>
                        <Entypo name="email" size={24} color="gray" />
                        <TextInput
                            style={styles.inputEmail}
                            placeholder="Email"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            placeholderTextColor="gray"
                        />
                    </View>
                    <View style={styles.formLoginEmail}>
                        <Entypo name="lock" size={24} color="gray" />
                        <TextInput
                            style={styles.inputEmail}
                            placeholder="Password"
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            placeholderTextColor="gray"
                            secureTextEntry={hidePass}
                        />
                        {/* hiden pass */}
                        <TouchableOpacity onPress={() => {
                            setHidePass(!hidePass);
                        }}>
                            <Entypo name={
                                hidePass ? "eye-with-line" : "eye"
                            } size={24} color="gray" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btnLoginContainer}>
                        <TouchableOpacity
                            onPress={handleLogin}
                            style={styles.btnLogin}>
                            <Text style={styles.btnLoginText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    imageCotainer: {
        width: '100%',
        flex: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    formLoginContainer: {
        flex: 2,
        width: '100%',
        paddingTop: 20,
    },
    formLogin: {
        marginTop: 10,
    },
    totleLogin: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    formLoginEmail: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.6,
        borderColor: 'gray',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginTop: 20,
    },
    inputEmail: {
        flex: 1,
        marginLeft: 10,
        height: 40,
    },
    btnLoginContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    btnLogin: {
        width: '100%',
        height: 50,
        backgroundColor: 'blue',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnLoginText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },

});