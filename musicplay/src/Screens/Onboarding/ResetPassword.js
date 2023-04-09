import React, {useState} from "react";
import { TextInput, View, StatusBar, TouchableOpacity} from "react-native";
import styled from "styled-components";

import {Colors, Images, Metrics, Fonts} from 'Constants';
import { McText, McImage, PlayButton } from 'Components';


const ResetPassword = ({navigation}) => {
    const [numS, setNumS] = useState(true);

    const setNumS_ = () => {
        if (numS) {
            setNumS(false);
        } else {
            setNumS(true);
        }
    }

    const renderScreen_ = (numS) => {
        if (!numS)
            return (
                <View style={{
                    height: 270,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <InputSection>
                        <McImage 
                            source={Images.password}
                            style={{marginLeft: 16, marginRight:12}}
                        ></McImage>
                        <TextInput 
                            placeholder="Nhập mật khẩu mới"
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
                            placeholder="Nhập lại mật khẩu mới"
                            placeholderTextColor={Colors.grey3}
                            style={{
                                color: Colors.grey4,
                            
                            }}
                        ></TextInput>
                    </InputSection>
                </View>
        ) 
        else return (
            <View style={{
                height: 270,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <InputSection>
                    <McImage 
                        source={Images.password}
                        style={{marginLeft: 16, marginRight:12}}
                    ></McImage>
                    <TextInput 
                        placeholder="Nhập mật khẩu cũ"
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
                        placeholder="Nhập mật khẩu mới"
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
                        placeholder="Nhập lại mật khẩu mới"
                        placeholderTextColor={Colors.grey3}
                        style={{
                            color: Colors.grey4,
                        
                        }}
                    ></TextInput>
                </InputSection>
            </View>
        )
    }

    return (
    <Container>
        <StatusBar barStyle='light-content'/>
        <TouchableOpacity onPress={()=>{
            navigation.goBack();
        }} style={{
            marginLeft: 24,
            marginTop: 5
        }}>
            <McImage source={Images.left}/>
        </TouchableOpacity>

        <McImage source={Images.logo} style={{marginHorizontal: 100,marginTop: 20}}/>

        <McText color={Colors.primary} align='center' size={24} black>The sound of life</McText>

        <McText color={Colors.grey4} size={14} medium align='center' style={{
            marginHorizontal: 51,
            marginTop: 8
        }}> Music is not an entertainment, but also it is our life </McText>

        <McText color={Colors.grey4} size={24} bold align='center' style={{
            marginTop: 28
        }}> Đổi mật khẩu </McText>

        {renderScreen_(numS)}

        <View style={{marginTop: 639, position:"absolute", alignSelf: 'center'}}>
            <PlayButton 
                size={78} 
                circle={70} 
                icon={Images.right_arrow}
                onPress={ ()=>{
                    navigation.navigate("Home")
                }}
            />
        </View>
    </Container>
)}

const Container = styled.SafeAreaView`
    flex: 1;
    background_color: ${Colors.background};
    justify-content: flex-start;  
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

export default ResetPassword;