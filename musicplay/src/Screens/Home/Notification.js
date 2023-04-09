import React from 'react';
import { View, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

import { Fonts, Images, Metrics, Colors } from 'Constants';
import { McText, McImage, McAvatar, PlayButton } from 'Components';
import BottomBar from '../Library/BottomBar';
import dummyData from '../../Mock/Dummy';

const Notification = ({ navigation }) => {
    return (
        <Container>
            <StatusBar barStyle='light-content'/>

            <HeaderSection>
                <TouchableOpacity onPress={()=>{
                    navigation.goBack();
                }}>
                    <McImage source={Images.left}/>
                </TouchableOpacity>
                <McText size={15} medium color={Colors.grey5}>Thông báo</McText>
                <McImage source={Images.menu}/>
            </HeaderSection>

            <View style={{marginTop: 28,height: 598 - 28 - 10, width: 316, alignSelf: 'center', alignItems: 'center'}}>
                <FlatList
                    data={dummyData.Notification}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('NotificationLink',{id_noti: item.id})
                            }}>
                                <FavoriteItemView>
                                    <View style={{ flexDirection: "row" }}>                                        
                                        <McImage source={item.thumbnail} style={{
                                            height: 50,
                                            width: 50
                                        }}/>
                                        <View style={{ marginLeft: 12, width: 250 - 12 }}>
                                            <McText semi size={14} color={Colors.grey5}>
                                                {item.title}
                                            </McText>
                                            <McText medium size={12} color={Colors.grey3} style={{ marginTop: 4 }}>
                                                {item.description}
                                            </McText>
                                        </View>
                                    </View>
                                    <McImage source={Images.right} />
                                </FavoriteItemView>
                            </TouchableOpacity>
                        )
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
    )
}


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

const FavoriteItemView = styled.View`
    marginBottom: 20px;
    height: 50px;
    flex-direction: row;
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

export default Notification;
