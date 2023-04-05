import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { View, TouchableOpacity, StatusBar, FlatList, TouchableWithoutFeedback } from 'react-native';

import {Colors, Images, Metrics} from '/Constants';
import { McText, McImage, PlayButton } from 'Components';
import { dummyData } from 'Mock';
import BottomBar from '../Library/BottomBar';

const Thealbums = ({ navigation, route }) => {
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [likeAlbum, setlikeAlbum] = useState(false);

    const initialLikeState = dummyData.Favorite.reduce((likeSongState, item) => {
        likeSongState[item.id] = item.like;
        return likeSongState;
      }, {});
    
    const [likeSongState, setLikeSongState] = useState(initialLikeState);

    useEffect(() => {
        let { selectedAlbum } = route.params;
        setSelectedAlbum(selectedAlbum);
        setlikeAlbum(selectedAlbum.like);
    }, []);

    const clickLikeAlbum = async () => {
        if (likeAlbum) {
            setlikeAlbum(false);
        } else {
            setlikeAlbum(true);
        }
    }

    const clickLikeSong = async (itemId) => {
        setLikeSongState(prevState => ({
            ...prevState,
            [itemId]: !prevState[itemId]
          }));
    }

    return (
        <Container>
            <StatusBar barStyle='light-content'/>

            <HeaderSection>
                <TouchableOpacity onPress={()=>{
                    navigation.goBack();
                }}>
                    <McImage source={Images.left}/>
                </TouchableOpacity>
                <McImage source={Images.menu}/>
            </HeaderSection>
            
            <DetailSection>
                <McImage source={selectedAlbum?.thumbnail} style={{
                    alignItems: 'center',
                    marginVertical: 4,
                    width: 180,
                    height: 180,
                    borderRadius: 20,
                }}/>
                <View style={{
                    marginTop:16,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <McText semi size={24} color={Colors.grey5} align='center'>{selectedAlbum?.name} the album</McText>
                    <McText medium size={14} color={Colors.grey3} style={{marginTop: 8}} align='center'>{selectedAlbum?.artist} - {selectedAlbum?.songs} bài hát</McText>
                </View>
            </DetailSection> 
            
            <SelectOptionSection>
                <TouchableWithoutFeedback onPress={clickLikeAlbum}>
                    <McImage source={likeAlbum ? Images.fullLike : Images.like} style={{
                        marginLeft: 10
                    }}/>
                </TouchableWithoutFeedback>
                
                <TouchableOpacity style={{
                    height: 40,
                    width: 200,
                    borderRadius: 40,
                    justifyContent: 'center',
                    alignItems:'center',
                    backgroundColor: Colors.secondary
                }}>
                    <McText bold color={Colors.grey5} size={14}>Phát ngẫu nhiên</McText>
                </TouchableOpacity>
                <McImage source={Images.share} style={{
                    marginRight: 10
                }}/>
            </SelectOptionSection>
            
            <McText semi align='center' size={12} style={{
                marginVertical: 25,
                color: Colors.grey3
            }}>{selectedAlbum?.description}</McText>

            <View style={{height: 204, width: 327, alignSelf: 'center'}}>
                <FlatList
                    data={dummyData.Favorite}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        if (item.album === selectedAlbum?.name) {
                            return (
                                <TouchableWithoutFeedback onPress={() => {
                                    navigation.navigate('Player',{selectedMusic: item})
                                }}>
                                <FavoriteItemView>
                                    <View style={{ flexDirection: "row" }}>
                                    <MusicCirle>
                                        <McImage source={Images.music} />
                                    </MusicCirle>
                                    <View style={{ marginLeft: 12, width: 246 }}>
                                        <McText semi size={14} color={Colors.grey5}>
                                        {item.title}
                                        </McText>
                                        <McText medium size={12} color={Colors.grey3} style={{ marginTop: 4 }}>
                                        {item.artist}
                                        </McText>
                                    </View>
                                    </View>
                                    <TouchableOpacity onPress={() => clickLikeSong(item.id)}><McImage source={likeSongState[item.id] ? Images.fullLike : Images.like} /></TouchableOpacity>
                                </FavoriteItemView>
                                </TouchableWithoutFeedback>
                            )
                        }
                    }}   
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
    );
};

const Container = styled(LinearGradient).attrs({
        colors: ['#D512C1','#1A0938','#1A0938'],
        start: { x: 1, y: 0 },
        end: { x: 1 , y: 1 },
    })`
    flex: 1;
`;

const HeaderSection = styled.View`
    margin: 12px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const DetailSection = styled.View`
    margin: 0px 24px;
    justify-content: center;
    align-items: center;
`;

const SelectOptionSection = styled.View`
    marginTop: 16px;
    width: 327px;
    height: 30px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    alignSelf: center;
`;

const FavoriteItemView = styled.View`
    marginBottom: 12px;
    flex-direction: row;
    
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
    marginTop: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start; 
    position: absolute;
    bottom: 5px;
    left: 0px;
    z-index: 1;
`;
export default Thealbums;
