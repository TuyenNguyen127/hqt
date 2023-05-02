import React, {useState, useEffect,useContext} from "react";
import { TouchableOpacity, View, StatusBar, TextInput, TouchableWithoutFeedback, FlatList, Modal} from "react-native";
import styled from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {Colors, Images, Metrics} from '/Constants';
import { McText, McImage, PlayButton } from 'Components';
import { dummyData } from 'Mock';
import BottomBar from './BottomBar';
import { MusicContext } from "../../Context/MusicProvider";

const InPlaylist = ({navigation, route}) => {
    const context = useContext(MusicContext);
    const [selected, setSelected] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalDelVisible, setModalDelVisible] = useState(false);
    const [selectedSong, setSelectedSong] = useState(null);
    const {currentSong, isPlaying, resume, pause, load } = context;

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

    
    const storeDataMusic = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('@selectedMusic', jsonValue);
        } catch (e) {
            console.log(e);
        }
    }

    const handleYes = () => {
        alert('Đã xóa bài hát khỏi danh sách kết hợp thành công');
        setModalDelVisible(false);
    };

    useEffect(() => {
        let { selected } = route.params;
        setSelected(selected);
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
            <McText bold size={14} color={Colors.grey5}>{selected?.name}</McText>
            <View/>
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
                    <Modal animationType="slide" transparent={true} visible={modalVisible}>
                        <View style={{
                            marginLeft: 30,
                            marginRight: 30,
                            marginVertical: 50,
                            aliginItems: 'center',
                            backgroundColor: Colors.grey4,
                            borderRadius: 10
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginHorizontal: 10,
                                paddingTop: 10,
                            }}>
                                <McText>{selectedSong?.title}</McText>
                                <TouchableOpacity onPress={() => setModalVisible(false)}>
                                    <McImage source={Images.close}/>
                                </TouchableOpacity>
                            </View>
                            <View style={{marginTop: 10,alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10}}>
                                <TouchableOpacity onPress={() => {setModalVisible(false);setModalDelVisible(true)}}>
                                    <McText aligin >Loại bài hát khỏi {selected?.name}</McText>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    <Modal animationType="slide" transparent={true} visible={modalDelVisible}>
                        <View style={{
                            marginLeft: 30,
                            marginRight: 30,
                            marginVertical: 50,
                            aliginItems: 'center',
                            backgroundColor: Colors.grey4,
                            borderRadius: 10
                        }}>
                            <View style={{marginTop: 10,alignItems: 'center'}}>
                                <McText>Bạn có muốn xóa bài hát khỏi {selected?.name}</McText>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginHorizontal: 50,
                                marginVertical: 20
                            }}>
                                <TouchableOpacity onPress={() => {setModalVisible(true);setModalDelVisible(false)}}>
                                    <McText>Không</McText>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={handleYes}>
                                    <McText>Có</McText>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                    <TouchableOpacity onPress={() => {
                        setModalVisible(true);
                        setSelectedSong(item);
                    }}>
                        <McImage source={Images.menu_n} />
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
                                    height: 38
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
    marginVertical: 15px;
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

export default InPlaylist;