import React from "react";
import { TextInput, View, StatusBar, TouchableOpacity} from "react-native";
import styled from "styled-components";

import {Colors, Images, Metrics, Fonts} from 'Constants';
import { McText, McImage, PlayButton } from 'Components';


const Register = ({navigation}) => (
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
        }}> Đăng ký tài khoản </McText>

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
                    
                    style={{
                        color: Colors.grey4,
                        
                    }}
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
                    style={{
                        color: Colors.grey4
                    }}
                ></TextInput>
            </InputSection>

            <InputSection>
                <McImage 
                    source={Images.password}
                    style={{marginLeft: 16, marginRight:12}}
                ></McImage>
                <TextInput 
                    placeholder="Nhập lại mật khẩu"
                    placeholderTextColor={Colors.grey3}
                    style={{
                        color: Colors.grey4
                    }}
                ></TextInput>
            </InputSection>

            <View style={{
                marginTop: 28,
                flexDirection: 'row'
            }}>
                <McText bold size={12} style={{
                    color: Colors.grey4
                }}>Đã có tài khoản ?</McText>
                <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
                    <McText bold size={12} style={{
                        color: Colors.accent1
                    }}> Đăng nhập </McText>
                </TouchableOpacity>
            </View>
        </View>
    

        <View style={{marginTop: 639, position:"absolute"}}>
            <PlayButton 
                size={78} 
                circle={70} 
                icon={Images.right_arrow}
                onPress={ ()=>{
                    navigation.navigate("Library")
                }}
            />
        </View>
    </Container>
)

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

export default Register;