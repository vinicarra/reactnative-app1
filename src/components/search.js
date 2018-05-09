import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { connect } from 'react-redux';

class SearchPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>THIS IS BR4AZ1L!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
    
    }
}

export default connect(mapStateToProps, null)(SearchPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
