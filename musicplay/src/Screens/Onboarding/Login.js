import React, { useEffect, useState } from "react";
import { TextInput, View, StatusBar, TouchableOpacity} from "react-native";
import styled from "styled-components";

import {Colors, Images, Metrics, Fonts} from 'Constants';
import { McText, McImage, PlayButton } from 'Components';
import axios, { Axios } from "axios";


const Login = ({navigation}) => {

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
    });

    const { email, password } = loginForm;

    const fetchUserData = () => {
        fetch("http://127.0.0.1:8082/song/6442a558e017a59ec36fdb50")
          .then(response => {
            console.log(response);
            return response.json()
          })
          .then(data => {
            // localhost:8082/song/6442a558e017a59ec36fdb50
            console.log(data)
          })
      }
    
    //   useEffect(() => {
    //     fetchUserData()
    //   }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch("http://127.0.0.1:8082/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: "offthewallbn@gmail.com", password: "1234567"}),
        }
        )
        .then(response => {
          console.log(response);
          return response.json()
        })
        .then(data => {
            navigation.navigate('Home')
            console.log(data)
        })}


    const onChangeLoginForm = (event) => {
        setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
        // setTimeout(() => setAlert(null), 5000);
    };

    return (
        <Container>
            <StatusBar barStyle='light-content'/>
            <McImage source={Images.logo} style={{marginTop: 40}}/>

            <McText color={Colors.primary} size={24} black>The sound of life</McText>

            <McText color={Colors.grey4} size={14} medium align='center' style={{
                marginHorizontal: 51,
                marginTop: 8
            }}> Music is not an entertainment, but also it is our life </McText>

            <McText color={Colors.grey4} size={24} bold align='center' style={{
                marginTop: 28
            }}> Đăng nhập </McText>

            <View style={{
                height: 275,
                justifyContent: 'center',
                alignItems: 'center',
                
            }}>
                <InputSection>
                    <McImage 
                        source={Images.profile}
                        style={{height: 24, width: 24, marginLeft: 16, marginRight:12}}
                    ></McImage>
                    <TextInput 
                        placeholder="Email đăng nhập"
                        placeholderTextColor={Colors.grey3}
                        name="email"
                        
                        style={{
                            color: Colors.grey4,
                            
                        }}
                        onChange={onChangeLoginForm}
                    ></TextInput>
                </InputSection>
                <InputSection>
                    <McImage 
                        source={Images.password}
                        style={{marginLeft: 16, marginRight:12}}
                    ></McImage>
                    <TextInput 
                        placeholder="Mật khẩu"
                        placeholderTextColor={Colors.grey3}
                        name="password"
                        style={{
                            color: Colors.grey4,
                        
                        }}
                        // value={password}
                        onChange={onChangeLoginForm}
                    ></TextInput>
                </InputSection>
                <TouchableOpacity style={{marginTop: 28}} onPress={() => {navigation.navigate('ForgetPassword')}}>
                    <McText bold size={12} style={{
                        color: Colors.accent1,
                    }}>
                        Quên mật khẩu ? 
                    </McText>
                </TouchableOpacity>
                
                <View style={{
                    marginTop: 28,
                    flexDirection: 'row'
                }}>
                    <McText bold size={12} style={{
                        color: Colors.grey4
                    }}>Chưa có tài khoản ?</McText>
                    <TouchableOpacity onPress={() => {navigation.navigate('Register')}}>
                        <McText bold size={12} style={{
                            color: Colors.accent1
                        }}> Đăng ký </McText>
                    </TouchableOpacity>
                </View>
            </View>
        

            <View style={{marginTop: 639, position:"absolute"}}>
                <PlayButton 
                    size={78} 
                    circle={70} 
                    icon={Images.right_arrow}
                    onPress={ async (event)=>{
                        //await handleSubmit(event)
                        navigation.navigate('Home')
                    }}
                />
            </View>
        </Container>
)}

const Container = styled.SafeAreaView`
    flex: 1;
    background_color: ${Colors.background};
    justify-content: flex-start;
    align-items: center;
`;

const InputSection = styled.View`
    width: 268px;
    height: 52px;
    border-radius: 30px;
    background_color: ${Colors.secondary};
    marginTop: 28px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export default Login;