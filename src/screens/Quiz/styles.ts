import { StyleSheet } from 'react-native';

import styled from 'styled-components/native';

import { xColors } from '../../styles/colors';
import { xFonts } from '../../styles/fonts';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const Form = styled.View`
  margin-top: 50px;
  width: 250px;
  align-items: center;
`;

export const Emoticon = styled.Text`
  text-align: center;
`;

export const Title = styled.Text`
  font-size: 25px;
  text-align: center;
  font-family: ${xFonts.Jost600};
  color: ${xColors.heading};
`;

export const Input = styled.TextInput`
  margin: 25px 0;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${xColors.green_light};
  text-align: center;
  font-size: 22px;
`;

export const ContainerButton = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  margin: 50px;
`;
