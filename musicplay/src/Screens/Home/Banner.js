import React from 'react';
import { View, Switch, Button, Swiper } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

import { Fonts, Images, Metrics } from 'Constants';
import { McText, McImage, McAvatar } from 'Components';
function Banner( url ) {
    return (
        <View
            style={{
                width: '100%',
                height: '150px',
                position: 'relative',
            }}
        >
            <McImage source={url} style={{
                    width: 327,
                    height: 100,
                    borderRadius: 20,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}/>
        </View>
    )
}

export default Banner
