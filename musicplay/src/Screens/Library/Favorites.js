import React, {useState, useEffect,useContext} from "react";
import { TouchableOpacity, View, StatusBar, TextInput, TouchableWithoutFeedback, FlatList, ScrollView} from "react-native";
import styled from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {Colors, Images, Metrics} from '/Constants';
import { McText, McImage, PlayButton } from 'Components';
import { dummyData } from 'Mock';
import BottomBar from './BottomBar';
import { MusicContext } from "../../Context/MusicProvider";

const Favorite = ({navigation}) => {
    const context = useContext(MusicContext);
    const {currentSong, isPlaying, resume, pause , load} = context;

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

    const initialLikeState = dummyData.Favorite.reduce((likeSongState, item) => {
        likeSongState[item.id] = item.like;
        return likeSongState;
      }, {});
    
    const [likeSongState, setLikeSongState] = useState(initialLikeState);

    const touchContactSongs = async (itemId) => {
        setLikeSongState(prevState => ({
            ...prevState,
            [itemId]: !prevState[itemId]
          }));
    }

    const storeDataMusic = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('@selectedMusic', jsonValue);
        } catch (e) {
            console.log(e);
        }
    }

    return(
    <Container>
        <StatusBar barStyle='light-content'/>

        {/* Thanh chức năng */}
        <HeaderSection>
            <TouchableOpacity onPress={()=>{
                navigation.goBack();
            }}>
                <McImage source={Images.left}/>
            </TouchableOpacity>
            <McText bold size={14} color={Colors.grey5}>Danh sách bài hát yêu thích</McText>
            <McImage source={Images.menu}/>
        </HeaderSection>

        <FlatList
            data={dummyData.Favorite}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableWithoutFeedback onPress={async () => {
                    storeDataMusic(item); 
                    await load();
                    navigation.navigate('Player');
                }}>
                <FavoriteItemView>
                    <View style={{ flexDirection: "row" }}>                        
                        <MusicCirle>
                            <McImage source={Images.music} />
                        </MusicCirle>          
                        <View style={{ marginLeft: 12,width: 259 - 24 }}>
                            <McText semi size={14} color={Colors.grey5}>
                                {item.title}
                            </McText>
                            <McText medium size={12} color={Colors.grey3} style={{ marginTop: 4 }}>
                                {item.artist}
                            </McText>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => touchContactSongs(item.id)}>
                        <McImage source={likeSongState[item.id] ? Images.fullLike: Images.like} />
                    </TouchableOpacity>
                    
                </FavoriteItemView>
                </TouchableWithoutFeedback>
            )}
        />
        <View style={{
                        height:84,
                        marginTop: 30
                    }}
        ></View>
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
)}

const Container = styled.SafeAreaView`
    flex: 1;
    background_color: ${Colors.background};
`;

const HeaderSection = styled.View`
    marginHorizontal: 15px;
    width: 327px;
    height: 30px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    alignSelf: center;
`;

const FavoriteItemView = styled.View`
    margin: 10px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

const MusicCirle = styled.View`
    width: 42px;
    height: 42px;
    border-radius: 42px;
    background_color: ${Colors.secondary};
    justify-content: center;
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

export default Favorite;