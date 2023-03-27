import React, { useState, useEffect, useRef } from "react";
import { StatusBar, Text, TouchableOpacity, View, Animated, Easing } from "react-native";
import styled from "styled-components";
import Slider from "@react-native-community/slider";
import { Audio } from 'expo-av';

import { Colors, Images, Metrics } from "/Constants";
import { McText, McImage, PlayButton } from "Components";
import { dummyData } from "Mock";

const Player = ({ navigation, route }) => {
    const [selectedMusic, setSelectedMusic] = useState(null);
    const [sound, setSound] = React.useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isReadyToSpin, setIsReadyToSpin] = useState(false);
    const [isSliding, setIsSliding] = useState(false);

    const spinValue = useRef(new Animated.Value(0)).current;
    
    // Load nhạc
    async function loadSound() {
        try {
            console.log('Loading Sound');
            const { sound } = await Audio.Sound.createAsync(
                require('Assets/audio/13.mp3')
            );
            setSound(sound);
            console.log('Loaded Sound');
        } catch (error) {
            console.error(error);
        }
    }
    
    // Khởi động component
    useEffect(() => {
        let { selectedMusic } = route.params;
        setSelectedMusic(selectedMusic);
        loadSound();
        setIsReadyToSpin(true);
    }, []);

    // Cập nhật vị trí chấm trên thanh slider
    useEffect(() => {
        let interval;
        if (sound && !isSliding) {
            interval = setInterval(async () => {
                const status = await sound.getStatusAsync();
                setCurrentTime(status.positionMillis);
                setDuration(status.durationMillis);
                setSliderValue(status.positionMillis / status.durationMillis);
            }, 300);
        }
        return () => clearInterval(interval);
    }, [sound, isSliding]);

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
        if (sound) {
            const status = await sound.getStatusAsync();
            const newPosition = value * status.durationMillis;
            await sound.setPositionAsync(newPosition);
        }
    };

    // Chơi hoặc tạm dừng
    const handlePlayPress = async () => {
        try {
          if (isPlaying) {
            await sound.pauseAsync();
            setIsPlaying(false);
          } else {
            await sound.playAsync();
            setIsPlaying(true);
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
            <MusicDetailSection>
                <Animated.Image source={selectedMusic?.thumbnail} style={{
                    marginHorizontal: 81,
                    marginVertical: 81,
                    width: 214,
                    height: 214,
                    borderRadius: 214/2,
                    transform: [{ rotate: spin }]
                }}/>
                <View style={{
                    marginTop:16,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <McText semi size={24} color={Colors.grey5} align='center'>{selectedMusic?.title}</McText>
                    <McText medium size={14} color={Colors.grey3} style={{marginTop: 8}} align='center'>{selectedMusic?.artist}</McText>
                </View>
            </MusicDetailSection> 
            
            {/* Thanh phát nhạc */}
            <SliderSection style={{marginTop: 8}}>
                <Slider
                    minimumValue={0}
                    maximumValue={1}
                    value={sliderValue}
                    onSlidingStart={() => setIsSliding(true)}
                    onValueChange={(value) => setSliderValue(value)}
                    onSlidingComplete={handleSlidingComplete}
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
                <McImage source={Images.sound}/>
            </ControlSection>

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

const SliderSection = styled.View`
    margin: 0px 24px;
`;

const ControlSection = styled.View`
    margin: 32px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export default Player;