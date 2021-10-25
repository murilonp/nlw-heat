import { StyleSheet } from 'react-native';
import { COLORS } from '../../theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  /* React Native já vem com flex-box habilitado por padrão*/
  container: {
    flex: 1 /* Ocupa a tela toda do container */,
    backgroundColor: COLORS.BLACK_SECONDARY,
    paddingTop: getStatusBarHeight() + 17
  }
});
