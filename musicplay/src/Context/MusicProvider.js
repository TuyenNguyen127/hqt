import React, { createContext, useRef, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
export const MusicContext = createContext();
import { Audio } from 'expo-av';

export const MusicProvider = ({ children }) => {
    const [currentSong, setCurrentSong] = useState(null);
    const [lastPosition, setLastPosition] = useState(0);
    const [sound, setSound] = useState(new Audio.Sound());
    
    
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

    const getPositonMillis = async () => {
        const status = await sound.getStatusAsync();
        return status.positionMillis;
    }

    const getDurationMillis = async () => {
        const status = await sound.getStatusAsync();
        return status.positionMillis;
    }
    
    const play = async () => {
        try {
            const status = await sound.getStatusAsync();
            console.log(status.durationMillis);
            console.log(currentSong);
            if (!status.isLoaded) {
                await sound.loadAsync(currentSong.audio_filepath);
            } 
            else {
                await sound.stopAsync();
                await sound.unloadAsync();
                await sound.loadAsync(currentSong.audio_filepath);
                
            }
            await resume();
        } catch (e) {
            console.log('error', error.message);
        }
    }
    
    // pause audio
    const pause = async () => {
        try {
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

    const getCurrentPosition = () =>{
        getPositonMillis().then(value => {
            setLastPosition(value);
        })

        return lastPosition
    }
    return (
        <MusicContext.Provider 
            value={{ 
                currentSong: getCurrentSong(), 
                lastPosition: lastPosition,
                setLastPosition,
                pause,
                play,
                resume,
                sound,
                
            }}>
            {children}
        </MusicContext.Provider>
    );
};