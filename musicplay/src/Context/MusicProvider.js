import React, { createContext, useRef, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
export const MusicContext = createContext();
import { Audio } from 'expo-av';
import TrackPlayer, {State} from 'react-native-track-player';
import { dummyData } from 'Mock';

export const MusicProvider = ({ children }) => {
    const [currentSong, setCurrentSong] = useState(null);
    const [lastPosition, setLastPosition] = useState(0);
    //const [sound, setSound] = useState(new Audio.Sound());
    const [isPlaying, setIsPlaying] = useState(false);

    async function getStatusPlay() {
        try {
            const state = await TrackPlayer.getState();
            if (state === State.Playing) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log('fail get status play music');
        }
    }
    
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
            await TrackPlayer.add(dummyData.Favorite);
            setIsPlaying(false);
        } catch (e) {
            console.log('error', error.message);
        }
    }
    
    // pause audio
    const pause = async () => {
        try {
            await TrackPlayer.pause();
            setIsPlaying(false);
        } catch (error) {
            console.log('error inside pause helper method', error.message);
        }
    };
    
    // resume audio
    const resume = async () => {
        try {
            await TrackPlayer.play();
            setIsPlaying(true);
        } catch (error) {
            console.log('error inside resume helper method', error.message);
        }
    };

    const getCurrentSong = () => {
        getDataMusic().then(song => {
            setCurrentSong(song);
        });
        return currentSong;
    }

    const getIsPlaying = () => {
        getStatusPlay().then(status => {
            setIsPlaying(status);
        });
        return isPlaying;
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
                isPlaying: getIsPlaying()
                
            }}>
            {children}
        </MusicContext.Provider>
    );
};