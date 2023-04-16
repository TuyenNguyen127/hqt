import React from 'react';
import { View, StatusBar, TouchableOpacity } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

import { Fonts, Images, Metrics, Colors } from 'Constants';
import { McText, McImage, McAvatar, PlayButton } from 'Components';
import BottomBar from '../Library/BottomBar';


const Option = ({ navigation }) => {
    return (
        
        <Container>
           <StatusBar barStyle='light-content'/>

            <HeaderSection>
                <TouchableOpacity onPress={()=>{
                    navigation.goBack();
                }}>
                    <McImage source={Images.left}/>
                </TouchableOpacity>
                <McText size={15} medium color={Colors.grey5}>Tài khoản</McText>
                <McImage source={Images.menu}/>
            </HeaderSection>
            
            <View style={{
                marginTop: 30,
                alignItems: 'center'
            }}>
                <McImage source={Images.profile}></McImage>

                <McText size={14} bold color={Colors.grey5} style={{marginTop: 10}}>20020221@vnu.edu.vn</McText>
            </View>
            

            <View style={{marginTop: 72}}>
                <TouchableOpacity onPress={()=>{
                    navigation.navigate('Library');
                }}>
                    <SelectSection>
                        <McText medium size={20} color={Colors.grey4}>Thư viện của tôi</McText>
                        <McImage source={Images.right}/>        
                    </SelectSection>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                        navigation.navigate('Download');
                }}>
                    <SelectSection>
                        <McText medium size={20} color={Colors.grey4}>Đã tải xuống</McText>
                        <McImage source={Images.right}/>        
                    </SelectSection>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                        navigation.navigate('ResetPassword',{numS: false});
                }}>
                    <SelectSection>
                        <McText medium size={20} color={Colors.grey4}>Đổi mật khẩu</McText>
                        <McImage source={Images.right}/>        
                    </SelectSection>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{
                        navigation.navigate('Login');
                }}>
                    <SelectSection>
                        <McText medium size={20} color={Colors.grey4}>Đăng xuất</McText>
                        <McImage source={Images.right}/>        
                    </SelectSection>
                </TouchableOpacity>
            </View>
            
            <BottomSection>
                <BottomBar>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: 16,
                        marginVertical: 12
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <McImage source={require('Assets/images/thumb_3.png')} style={{
                                width: 38,
                                height: 38
                            }}/>
                            <View style={{marginLeft:12}}>
                                <McText bold size={16} color={Colors.grey5}>Chưa hề yêu em</McText>
                                <McText medium size={12} color={Colors.grey3} style={{marginTop: 4}}>Văn Tuyển</McText>
                            </View>
                        </View>
                        <PlayButton size={46} circle={41.28} icon={Images.stop}></PlayButton>
                    </View>
                </BottomBar>
            </BottomSection>   
        </Container>
    )
}

const Container = styled.SafeAreaView`
    flex: 1;
    background_color: ${Colors.background};
`;

const HeaderSection = styled.View`
    margin: 12px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const SelectSection = styled.View`
    margin: 20px 24px 0px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const BottomSection = styled.View`
    margin: 0px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start; 
    position: absolute;
    bottom: 10px;
    left: 0px;
    z-index: 1;
`;

export default Option
