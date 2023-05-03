import React, {useState, useEffect,useContext} from "react";
import { TouchableOpacity, View, StatusBar, TextInput, TouchableWithoutFeedback, FlatList, Modal} from "react-native";
import styled from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {Colors, Images, Metrics} from '/Constants';
import { McText, McImage, PlayButton } from 'Components';
import { dummyData } from 'Mock';
import BottomBar from "../Library/BottomBar";
import { MusicContext } from "../../Context/MusicProvider";
import RNFetchBlob from 'rn-fetch-blob';
import TrackPlayer from "react-native-track-player";

const Downloader = ({navigation}) => {
    // const [pastedURL, setPastedURL] = useState('');
  
    // const requestStoragePermission = async () => {
    //     try {
    //         const granted = await PermissionsAndroid.request(
    //             PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    //             {
    //                 title: 'Downloader App Storage Permission',
    //                 message:
    //                 'Downloader App needs access to your storage ' +
    //                 'so you can download files',
    //                 buttonNeutral: 'Ask Me Later',
    //                 buttonNegative: 'Cancel',
    //                 buttonPositive: 'OK',
    //             },
    //         );
    //         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //             downloadFile();
    //         } else {
    //             console.log('storage permission denied');
    //         }
    //     } catch (err) {
    //         console.warn(err);
    //     }
    // };
  
    // const downloadFile = () => {
    //     const {config, fs} = RNFetchBlob;
    //     const date = new Date();
    //     const fileDir = fs.dirs.DownloadDir;
    //     config({
    //         // add this option that makes response data to be stored as a file,
    //         // this is much more performant.
    //         fileCache: true,
    //         addAndroidDownloads: {
    //         useDownloadManager: true,
    //         notification: true,
    //         path:
    //             fileDir +
    //             '/download_' +
    //             Math.floor(date.getDate() + date.getSeconds() / 2) +
    //             '.mp4',
    //         description: 'file download',
    //         },
    //     })
    //     .fetch('GET', pastedURL, {
    //       //some headers ..
    //     })
    //     .then(res => {
    //       // the temp file path
    //       console.log('The file saved to ', res.path());
    //       alert('file downloaded successfully ');
    //     });
    // };

    const context = useContext(MusicContext);
    const {currentSong, isPlaying, resume, pause } = context;

    const storeDataMusic = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem('@selectedMusic', jsonValue);
        } catch (e) {
            console.log(e);
        }
    }
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
            <StatusBar styled='light-content'/>
            <HeaderSection>
                <TouchableOpacity onPress={()=>{
                    navigation.goBack();
                }}>
                    <McImage source={Images.left}/>
                </TouchableOpacity>
                <McText bold size={14} color={Colors.grey5}>Đã tải xuống</McText>
                <View/>
            </HeaderSection>
            <FlatList
                data={dummyData.Favorite}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                    <TouchableWithoutFeedback onPress={async () => {
                        await storeDataMusic(item);
                        await TrackPlayer.reset();
                        await TrackPlayer.add(dummyData.Favorite);
                        await TrackPlayer.skip(index);
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
    );
};

const Container = styled.SafeAreaView`
    flex: 1;
    background_color: ${Colors.background};
`;

const HeaderSection = styled.View`
    marginTop: 10px;
    width: 327px;
    height: 30px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    alignSelf: center;
`;

const MusicCirle = styled.View`
    width: 42px;
    height: 42px;
    border-radius: 42px;
    background_color: ${Colors.secondary};
    justify-content: center;
    align-items: center;
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
export default Downloader;