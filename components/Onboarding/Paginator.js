import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, TouchableOpacity, Text } from 'react-native';

import PageDots from './PageDots';
import { SymbolButton, TextButton } from './Buttons';

const getDefaultStyle = (isLight) => ({
  color: isLight ? 'rgba(0, 0, 0, 0.8)' : '#fff',
});

const SkipButton = ({ isLight, ...props }) => (
  <TextButton {...props} textStyle={getDefaultStyle(isLight)}>
    Omitir
  </TextButton>
);

const NextButton = ({ isLight, ...props }) => (
    <TextButton {...props} textStyle={getDefaultStyle(isLight)}>
    Siguiente
  </TextButton>
);
const DoneButton = ({ isLight, ...props }) => (
//   <SymbolButton {...props} size={size} textStyle={getDefaultStyle(isLight)} style={{ borderRadius: size / 2, backgroundColor: 'rgba(255, 255, 255, 0.10)' }}>
//     <MaterialIcon name='check' size={size/2} />
//   </SymbolButton>
    <TextButton {...props} textStyle={getDefaultStyle(isLight)}>
        Finalizar
    </TextButton>
);

const BUTTON_SIZE = 40;
const Paginator = ({ isLight, overlay, showSkip, showNext, showDone, pages, currentPage, onEnd, onNext }) => (
  <View style={{ ...styles.container, ...(overlay ? styles.containerOverlay : {}) }}>
    <View style={styles.buttonLeft}>
      {showSkip && currentPage + 1 !== pages.length ?
        <SkipButton isLight={isLight} size={BUTTON_SIZE} onPress={onEnd} /> :
        null
      }
    </View>
    <PageDots isLight={isLight} pages={pages} currentPage={currentPage} />
    <View style={styles.buttonRight}>
      {currentPage + 1 === pages.length ?
        (showDone ? <DoneButton isLight={isLight} size={BUTTON_SIZE} onPress={onEnd} /> : null) :
        (showNext ? <NextButton isLight={isLight} size={BUTTON_SIZE} onPress={onNext} /> : null)
      }
    </View>
  </View>
);

const styles = {
  container: {
    paddingHorizontal: 40,
    paddingVertical: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerOverlay: {
    // backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  buttonLeft: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1
  },
  buttonRight: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 1
  }
};

export default Paginator;