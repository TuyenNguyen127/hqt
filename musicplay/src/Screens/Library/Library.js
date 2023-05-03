import React, {useState, useEffect,useContext} from "react";
import { TouchableOpacity, View, StatusBar, TextInput, TouchableWithoutFeedback, FlatList, ScrollView} from "react-native";
import styled from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {Colors, Images, Metrics} from '/Constants';
import { McText, McImage, PlayButton } from 'Components';
import { dummyData } from 'Mock';
import BottomBar from './BottomBar';
import { MusicContext } from "../../Context/MusicProvider";

const Library = ({navigation}) => {
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

    const getDataMusic = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@selectedMusic')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
            console.log(e);
        }
    }
    const storeDataMusic = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('@selectedMusic', jsonValue);
        } catch (e) {
            console.log(e);
        }
    }

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
    
    const _renderItem = ({ item, index}) => {
        return(
            <TouchableWithoutFeedback onPress={() => {
                 navigation.navigate('InPlaylist', {selected: item});
            }}>
                <View>
                    <View style={{
                        marginTop:16,
                        marginLeft: index === 0? 24:0,
                        marginRight:index === dummyData.Playlists.length - 1?0:24
                    }}>
                    <McImage key={index} source={item.thumbnail} style={{marginBottom:12, height: 80, width: 80}}/>
                    <McText semi size={16} color={Colors.grey5}>{item.name}</McText>
                    <McText medium size={12} color={Colors.grey3} style={{
                        marginTop: 4
                    }}>
                        {item.songs} songs</McText>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    
    return(
        <Container>
            <StatusBar barStyle='light-content'/>

            <HeaderSection>
                <TouchableOpacity onPress={() =>{ navigation.push('Option')}}>
                    <McImage source={Images.profile} style={{height: 30, width: 30}}></McImage>
                </TouchableOpacity>
                    
                <McText 
                bold 
                align='center'
                size={28} 
                color={Colors.primary}
                >My Library</McText>

                <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                    <McImage source={Images.home}/>
                </TouchableOpacity>
                    
            </HeaderSection>
            
            <TouchableOpacity onPress={()=> {navigation.navigate('Search')}}>
                <SearchSetion>
                    <McImage 
                        source={Images.find}
                        style={{marginLeft: 16, marginRight:12}}
                    ></McImage>
                    <McText color={Colors.grey3} size={14}>Tìm kiếm bài hát, nghệ sĩ</McText>
                </SearchSetion>
            </TouchableOpacity>
            

            <TouchableWithoutFeedback onPress={()=>{
                    console.log('Go to Playlist page');
                    navigation.navigate('MyPlaylist', {id_song: null})
                }}>
                <TitleSection>
                    <McText medium size={20} color={Colors.grey4}>Danh sách kết hợp</McText>           
                    <McImage source={Images.right}/>
                </TitleSection>
            </TouchableWithoutFeedback>

            <View>
                <FlatList
                    keyExtractor={(item) => 'playlist_' + item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{}}
                    data={dummyData.Playlists}
                    renderItem={_renderItem}
                />

            </View>
            <TouchableWithoutFeedback onPress={()=>{
                    console.log('Go to Favorite page');
                    navigation.navigate('Favorites');
                }}>
                <TitleSection>
                    <McText medium size={20} color={Colors.grey4}>Bài hát yêu thích</McText>
                    <McImage source={Images.right}/>
                </TitleSection>
            </TouchableWithoutFeedback>

            <View style={{marginTop: 10, height: 250}}>
            <FlatList
                data={dummyData.Favorite}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableWithoutFeedback onPress={async () => {
                        storeDataMusic(item); 
                        
                        navigation.navigate('Player')
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
                        <TouchableOpacity onPress={() => navigation.navigate('Player')}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <McImage source={currentSong?.thumbnail} style={{
                                    width: 38,
                                    height: 38,
                                    borderRadius: 19,
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
    )
}


const Container = styled.SafeAreaView`
    flex: 1;
    background_color: ${Colors.background};
`;

const HeaderSection = styled.View`
    marginTop: 12px;
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

const TitleSection = styled.View`
    margin: 20px 24px 0px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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

export default Library;
