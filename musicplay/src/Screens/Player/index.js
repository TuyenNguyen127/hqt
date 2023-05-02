import React, { useState, useEffect, useRef, useContext } from "react";
import { StatusBar, Text, TouchableOpacity, View, Animated, Easing, ScrollView } from "react-native";
import styled from "styled-components";
import Slider from "@react-native-community/slider";
import { Audio } from 'expo-av';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Colors, Images, Metrics } from "/Constants";
import { McText, McImage, PlayButton } from "Components";
import Swiper from "react-native-swiper";
import { MusicContext } from "../../Context/MusicProvider";

const Player = ({ navigation}) => {
    const [selected, setSelected] = useState(null);
    const [sliderValue, setSliderValue] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isReadyToSpin, setIsReadyToSpin] = useState(false);
    const [isSliding, setIsSliding] = useState(false);
    const [lyrics, setLyrics] = useState(null);

    const spinValue = useRef(new Animated.Value(0)).current;
    
    const [likeSong, setLikeSong] = useState(false);
    const context = useContext(MusicContext);
    const {currentSong, isPlaying, load, pause, resume, sound } = context;

    const clickLike = () => {
        if (likeSong) {
            setLikeSong(false);
        } else {
            setLikeSong(true);
        }
    }
    
    // Load nhạc
    async function loadSound() {
        try {
            await resume();
            setLikeSong(currentSong.like);
            const lyrics = currentSong.lyric;
            const sentences = lyrics.split(/\n/);
            setLyrics(sentences);
        } catch (error) {
            console.error(error);
        }
    }
    
    // Khởi động component
    useEffect(() => {
        loadSound(); 
        setIsReadyToSpin(true);
    }, []);

    // Cập nhật vị trí chấm trên thanh slider
    useEffect(() => {
        let interval;
        if (sound && !isSliding) {
            interval = setInterval(async () => {
                const status = await sound.getStatusAsync();
                
                setSliderValue(status.positionMillis / status.durationMillis);
                setCurrentTime(status.positionMillis);
                setDuration(status.durationMillis);
            }, 500);
        }
        return () => clearInterval(interval);
    }, [isSliding]);

    // Khởi động vòng đĩa quay
    useEffect(() => {
        if (isReadyToSpin) {
            spinAnimation();
        } else {
            spinValue.stopAnimation();
        }
    }, [isReadyToSpin]);

    // Phát nhạc đoạn ấn vào trên thanh slider
    const handleSlidingComplete = async (value) => {
        setIsSliding(false)
        const status = await sound.getStatusAsync();
        const newPosition = value * status.durationMillis;
        await sound.setPositionAsync(newPosition);
    };

    // Chơi hoặc tạm dừng
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

    // Tạo format cho thời gian của bài hát
    const formatTime = (millis) => {
        const totalSeconds = millis / 1000;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    // Thiết lập giá trị vòng quay
    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });
    
    // Tạo hoạt ảnh quay
    const spinAnimation = () => {
        Animated.timing(spinValue, {
            toValue: 1,
            duration: 50000,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(() => {
            spinValue.setValue(0);
            spinAnimation();
        });
    };

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
                <McImage source={Images.menu}/>
            </HeaderSection>
            
            {/* Thông tin bài hát */}
            <SwiperBanner>
                <Swiper style={{borderRadius: 10}}
                            paginationStyle={{ top: -450}}
                            dot={<View style={{
                                    backgroundColor:'#464646', 
                                    width: 5, 
                                    height: 5,
                                    borderRadius: 5, 
                                    marginLeft: 3, 
                                    marginRight: 3, 
                                    marginTop: 3, 
                                    marginBottom: 3,}} 
                            
                                />}
                            activeDot={<View style={{
                                    backgroundColor: '#B90078',
                                    width: 20,
                                    height: 5,
                                    borderRadius: 40, 
                                    marginLeft: 3, 
                                    marginRight: 3, 
                                    marginTop: 3, 
                                    marginBottom: 3,}} />}>
                    <MusicDetailSection>
                        <Animated.Image source={currentSong?.thumbnail} style={{
                            marginHorizontal: 81,
                            marginVertical: 20,
                            width: 250,
                            height: 250,
                            borderRadius: 250/2,
                            transform: [{ rotate: spin }]
                        }}/>
                        <View style={{
                            marginTop:16,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <McText semi size={20} color={Colors.grey5} align='center'>{currentSong?.title}</McText>
                            <McText medium size={14} color={Colors.grey3} style={{marginTop: 8}} align='center'>{currentSong?.artist}</McText>
                        </View>
                    </MusicDetailSection>
                    <View style={{marginLeft: 10}}>
                        <DetailLyricSection>
                            <McImage source={currentSong?.thumbnail} style={{
                                width: 50,
                                height:50,
                                borderRadius: 10
                            }}></McImage>
                            <View style={{ marginLeft: 12 }}>
                                <McText semi size={14} color={Colors.grey5}>
                                    {currentSong?.title}
                                </McText>
                                <McText medium size={12} color={Colors.grey3} style={{ marginTop: 4 }}>
                                    {currentSong?.artist}
                                </McText>
                            </View>
                        </DetailLyricSection>
                        <ScrollView>
                            {lyrics?.map((sentence, index) => (
                                <McText key={index} color={Colors.primary} size={18} style={{
                                    marginVertical: 3
                                }}>
                                {sentence.trim()}
                                </McText>
                            ))}
                        </ScrollView>
                    </View>
                    
                </Swiper>
            </SwiperBanner>


            {/* Thanh phát nhạc */}
            <SliderSection style={{marginTop: 8}}>
                <Slider
                    minimumValue={0}
                    maximumValue={1}
                    value={sliderValue ? sliderValue : 0}
                    onSlidingStart={() => setIsSliding(true)}//
                    onValueChange={(value) =>setSliderValue(value)}//
                    onSlidingComplete={handleSlidingComplete}//
                    minimumTrackTintColor={Colors.primary}
                    maximumTrackTintColor={Colors.grey3}
                    thumbImage={Images.thumb}
                />
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <McText size={12} color={Colors.grey4}>{formatTime(currentTime)}</McText>
                    <McText size={12} color={Colors.grey4}>{formatTime(duration)}</McText>
                </View>
            </SliderSection>

            {/* Tập hợp nút điều khiển */}
            <ControlSection>
                <McImage source={Images.refresh}/>
                <View style={{
                    width: 231,
                    height: 70,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        width: 231,
                        height: 54,
                        borderRadius: 54,
                        backgroundColor: Colors.secondary,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <McImage source={Images.back} style={{marginLeft: 24}}/>
                        <View style={{
                            width: 88,
                            height: 88,
                            borderRadius: 88,
                            backgroundColor: Colors.background,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <PlayButton size={70} circle={62.82} icon={isPlaying ? Images.stop : Images.play} onPress={handlePlayPress}></PlayButton>
                        </View>
                        <McImage source={Images.next} style={{marginRight: 24}}/>
                    </View>
                </View>
                <McImage source={Images.speedUp}/>
            </ControlSection>
            <ButtonSection>
                <TouchableOpacity onPress={clickLike}>
                    <McImage source={likeSong ? Images.fullLike : Images.like} style={{
                        marginLeft: 24
                    }}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('MyPlaylist', {id_song: currentSong?.id})}}>
                    <McImage source={Images.inplayList}/>
                </TouchableOpacity>
                
                <McImage source={Images.download}/>
                <McImage source={Images.share} style={{
                    marginRight: 24
                }}/>
            </ButtonSection>
        </Container>
    );}

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

const MusicDetailSection = styled.View`
    margin: 0px 24px;
    justify-content: center;
    align-items: center;
`;

const SwiperBanner = styled.View`
    marginTop: 30px;
    height: 429px;
    width: 327px;
    alignSelf: center;
`;

const SliderSection = styled.View`
    margin: 0px 24px;
`;

const ControlSection = styled.View`
    margin: 32px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const ButtonSection = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const DetailLyricSection = styled.View`
    flex-direction: row;
    height: 54px;
`;

export default Player;