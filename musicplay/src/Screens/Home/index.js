import React from 'react';
import { View, Switch, Button } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

import { Fonts, Images, Metrics } from 'Constants';
import { McText, McImage, McAvatar } from 'Components';

const Home = ({ navigation }) => {
  return (
    <Container>
      
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.background};
`;

export default Home;
