import React from 'react';
import styled from 'styled-components/native';

const Profile = ({ navigation }) => {
  return (
    <Container>
      
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.background};
`;

export default Profile;
