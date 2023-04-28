import React, { createContext, useRef, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
export const MusicContext = createContext();
import { Audio } from 'expo-av';

export const MusicProvider = ({ children }) => {
    const [currentSong, setCurrentSong] = useState(null);
    const [lastPosition, setLastPosition] = useState(0);
    const [sound, setSound] = useState(new Audio.Sound());
    const [isPlaying, setIsPlaying] = useState(false);
    
    const getDataMusic = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@selectedMusic')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
            console.log(e);
        }
    }
    
    const load = async () => {
        try {
            const status = await sound.getStatusAsync();

            getDataMusic().then(async song => {
                setCurrentSong(song);
                if (!status.isLoaded) {
                    await sound.loadAsync(song.audio_filepath);
                } 
                else {
                    await sound.stopAsync();
                    await sound.unloadAsync();
                    await sound.loadAsync(currentSong.audio_filepath);
                }
            });

            await Audio.setAudioModeAsync({
                interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
                shouldDuckAndroid: true,
                staysActiveInBackground: true,
            });
            await Audio.setIsEnabledAsync(true);
            setIsPlaying(false);
        } catch (e) {
            console.log('error', error.message);
        }
    }
    
    // pause audio
    const pause = async () => {
        try {
            setIsPlaying(false);
            return await sound.setStatusAsync({
                shouldPlay: false,
            });
        } catch (error) {
            console.log('error inside pause helper method', error.message);
        }
    };
    
    // resume audio
    const resume = async () => {
        try {
            setIsPlaying(true);
            return await sound.playAsync();
        } catch (error) {
            console.log('error inside resume helper method', error.message);
        }
    };

    // select another audio
    const playNext = async () => {
        try {
            await sound.stopAsync();
            await sound.unloadAsync();
            return await play();
        } catch (error) {
            console.log('error inside playNext helper method', error.message);
        }
    };

    const getCurrentSong = () => {
        getDataMusic().then(song => {
            setCurrentSong(song);
        });
        return currentSong;
    }

    return (
        <MusicContext.Provider 
            value={{ 
                currentSong: getCurrentSong(), 
                lastPosition: lastPosition,
                setLastPosition,
                pause: pause,
                load: load,
                resume: resume,
                sound,
                isPlaying: isPlaying
                
            }}>
            {children}
        </MusicContext.Provider>
    );
};