import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Font from 'expo-font';
import PropTypes from 'prop-types';

import fontAwsome from '../../assets/fonts/fa-solid-900.ttf';


class CircleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false,
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      FontAwsome: fontAwsome,
    });

    this.setState({
      fontLoaded: true,
    });
  }

  render() {
    const { children, style, color } = this.props;
    const { fontLoaded } = this.state;
    let bgColor = '#e31676';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#e31676';
    }
    return (
      <View style={[styles.circleButton, style, bgColor]}>
        {
          fontLoaded ? (
            <Text style={[styles.circleButtonTitle, { color: textColor }]}>
              { children }
            </Text>
          ) : null
        }
      </View>
    );
  }
}

export default CircleButton;

CircleButton.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape().isRequired,
  color: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontFamily: 'FontAwsome',
    fontSize: 32,
    lineHeight: 32,
  },
});
