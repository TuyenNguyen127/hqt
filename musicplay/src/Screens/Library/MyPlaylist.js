import React, {useState, useEffect, useContext} from 'react';
import { TouchableOpacity, View, StatusBar, TextInput, TouchableWithoutFeedback, FlatList, Modal} from "react-native";
import styled from "styled-components";

import {Colors, Images, Metrics} from '/Constants';
import { McText, McImage, PlayButton } from 'Components';
import { dummyData } from 'Mock';
import BottomBar from './BottomBar';
import { MusicContext } from "../../Context/MusicProvider";


const MyPlaylist = ({navigation, route}) => {
    const context = useContext(MusicContext);
    const [songItem, setSongItem] = useState(null);
    const [currentPlaylist, setCurrentPlaylist] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalAddVisible, setModalAddVisible] = useState(false);
    const [playlistName, setPlaylistName] = useState('');
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

    const handleCancel = () => {
        setModalAddVisible(false);
        setModalVisible(false);
        setPlaylistName('');
    };

    const handleOk = () => {
        if (playlistName) {
            // Xử lý thông tin playlist tại đây
            setModalVisible(false);
            setPlaylistName('');
        } else {
            alert('Vui lòng nhập tên playlist');
        }
    };
    const handleYes = () => {
        
        alert('Đã thêm bài hát mới vào danh sách kết hợp thành công');
        setModalAddVisible(false);
        setSongItem(null);
    };

    useEffect(() => {
        setSongItem(route.params);
    }, []);

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
            <McText bold size={14} color={Colors.grey5}>Danh sách kết hợp</McText>
            <McImage source={Images.menu}/>
        </HeaderSection>
        
        <TouchableOpacity onPress={() => setModalVisible(true)}>
            <FavoriteItemView>
                <View style={{ flexDirection: "row" }}>                                               
                    <McImage source={require('Assets/images/new_playlist.png')} style={{height: 50, width: 50, borderRadius: 10}}/>                                  
                    <View style={{ marginLeft: 12,width: 259 - 24, justifyContent: 'center' }}>
                        <McText semi size={14} color={Colors.grey5}>
                            Thêm danh sách phát mới
                        </McText>
                    </View>
                </View>   
            </FavoriteItemView>
        </TouchableOpacity>
        
        <FlatList
            data={dummyData.Playlists}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableWithoutFeedback onPress={() => {
                    console.log(songItem?.id_song);
                    if (songItem?.id_song === null) navigation.navigate('InPlaylist', {selected: item});
                    else {
                        setModalAddVisible(true);
                        setCurrentPlaylist(item);
                    }
                }}>
                <FavoriteItemView>
                    <View style={{ flexDirection: "row" }}>                                               
                        <McImage source={(item.thumbnail)} style={{height: 50, width: 50, borderRadius: 10}}/>                                  
                        <View style={{ marginLeft: 12,width: 259 - 24 }}>
                            <McText semi size={14} color={Colors.grey5}>
                                {item.name}
                            </McText>
                            <McText medium size={12} color={Colors.grey3} style={{ marginTop: 4 }}>
                                {item.songs} songs
                            </McText>
                        </View>
                    </View>   
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
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={{
                marginHorizontal: 24,
                marginVertical: 100,
                aliginItems: 'center',
                backgroundColor: Colors.grey4,
                borderRadius: 20,
               
            }}>
                <View style={{marginTop: 10,alignItems: 'center'}}>
                    <McText>Tạo playlist mới :</McText>
                    <TextInput
                        onChangeText={setPlaylistName}
                        value={playlistName}
                        style={{ textAlign: 'center', marginTop: 10, width: 400}}
                        placeholder='Nhập tên playlist mới'
                        placeholderTextColor={Colors.grey3}
                        maxLength={30}
                    />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 50,
                    marginVertical: 20
                }}>
                    <TouchableOpacity onPress={handleCancel}>
                        <McText>Hủy</McText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleOk}>
                        <McText>Xong</McText>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
        <Modal animationType="slide" transparent={true} visible={modalAddVisible}>
            <View style={{
                marginHorizontal: 24,
                marginVertical: 100,
                aliginItems: 'center',
                backgroundColor: Colors.grey4,
                borderRadius: 20,
               
            }}>
                <View style={{marginTop: 10,alignItems: 'center'}}>
                    <McText>Bạn có muốn thêm bài hát vào {currentPlaylist?.name}</McText>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 50,
                    marginVertical: 20
                }}>
                    <TouchableOpacity onPress={handleCancel}>
                        <McText>Không</McText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleYes}>
                        <McText>Có</McText>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    </Container>
)}

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

const FavoriteItemView = styled.View`
    margin: 10px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
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

export default MyPlaylist;