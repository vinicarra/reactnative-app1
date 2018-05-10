import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

import { connect } from 'react-redux';
import { changeCep, searchCep } from '../actions/';

class SearchPage extends Component {

  _searchCep() {
    const cep = this.props.cep;
    this.props.searchCep(cep);
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.header }>
          <Text style={ styles.title }>Digite um CEP</Text>
        </View>
        <View style={ styles.body }>
          <TextInput 
            autoCorrect={false}
            keyboardType="numeric"
            style= {{ height: 60, width: 250, fontSize: 24 }}
            onChangeText={ text => this.props.changeCep(text) }
            placeholder="Ex: 17250-000"
          />
          <Button
            title="Pesquisar"
            style={{ width: 250, fontSize: 24 }}
            onPress={() => this._searchCep()}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      cep: state.CEPReducer.cep
    }
}

export default connect(mapStateToProps, { changeCep, searchCep })(SearchPage);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignItems: 'center'
  },
  header: {
    flex: 1,
    marginTop: 5
  },
  body: {
    flex: 9,
    marginBottom: 5,
  }
});
