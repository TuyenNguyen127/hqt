import React, { useState, useEffect, useRef, useContext } from "react";
import { StatusBar, Text, TouchableOpacity, View, TextInput, Easing, ScrollView } from "react-native";
import styled from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Colors, Images, Metrics } from "/Constants";
import { McText, McImage, PlayButton } from "Components";
import { MusicContext } from "../../Context/MusicProvider";
import BottomBar from "../Library/BottomBar";


const Search = ({ navigation }) => {
    const context = useContext(MusicContext);
    const {currentSong, isPlaying, resume, pause } = context;

    const handlePlayPress = async () => {
        try {
            if (isPlaying) {
                await pause();
            } else {
                await resume();
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container>
            <StatusBar barStyle='light-content'/>
            {/* Thanh chức năng */}
            <HeaderSection>
                <TouchableOpacity onPress={()=>{
                    navigation.goBack();
                }}>
                    <McImage source={Images.left}/>
                </TouchableOpacity>
                <McText bold size={14} color={Colors.grey5}>Tìm kiếm bài hát, nghệ sĩ</McText>
                <View/>
            </HeaderSection>

            <SearchSetion>
                <McImage 
                    source={Images.find}
                    style={{marginLeft: 16, marginRight:12}}
                ></McImage>
                <TextInput 
                    placeholder="Nhập tên bài hát, nghệ sĩ"
                    placeholderTextColor={Colors.grey3}
                    style={{
                        color: Colors.grey4
                    }}
                ></TextInput>
            </SearchSetion>

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
                        <TouchableOpacity onPress={() => {navigation.navigate('Player')}}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <McImage source={currentSong?.thumbnail} style={{
                                    width: 38,
                                    height: 38,
                                    borderRadius: 19
                                }}/>
                                <View style={{marginLeft:12, width:199 - 12}}>
                                    <McText bold size={12} color={Colors.grey5}>
                                        {currentSong?.title}
                                    </McText>
                                    <McText medium size={10} color={Colors.grey3} style={{marginTop: 4}}>{currentSong?.artist}</McText>
                                </View>
                            </View>
                        </TouchableOpacity>
                        
                        <PlayButton size={46} circle={41.28} icon={isPlaying ? Images.stop : Images.play} onPress={handlePlayPress}></PlayButton>
                    </View>
                </BottomBar>
            </BottomSection>
        </Container>
    );
};

const Container = styled.SafeAreaView`
    flex: 1;
    background_color: ${Colors.background};
`;
const HeaderSection = styled.View`
    marginVertical: 15px;
    width: 327px;
    height: 30px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    alignSelf: center;
`;
const SearchSetion = styled.View`
    width: 317px;
    height: 52px;
    border-radius: 30px;
    background_color: ${Colors.secondary};
    margin: 20px 24px 0px;
    flex-direction: row;
    justify-content: flex-start;
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
export default Search;
