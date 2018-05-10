import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Keyboard } from 'react-native';

import { connect } from 'react-redux';
import { changeCep, searchCep } from '../actions/';

class SearchPage extends Component {

  _searchCep() {
    const cep = this.props.loc.cep;
    Keyboard.dismiss();
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
            onSubmitEditing={ () => this._searchCep() }
            placeholder="Ex: 17250-000"
          />
          <Button
            title="Pesquisar"
            style={{ width: 250, fontSize: 24 }}
            onPress={() => this._searchCep() }
          />
          <View style={ styles.data }>
            <Text style={ styles.dataError }>{this.props.loc.error}</Text>
            <Text style={ styles.dataText }>CEP: {this.props.loc.cep}</Text>
            <Text style={ styles.dataText }>Logradouro: {this.props.loc.logradouro}</Text>
            <Text style={ styles.dataText }>Complemento: {this.props.loc.complemento}</Text>
            <Text style={ styles.dataText }>Bairro: {this.props.loc.bairro}</Text>
            <Text style={ styles.dataText }>Cidade: {this.props.loc.localidade}</Text>
            <Text style={ styles.dataText }>UF: {this.props.loc.uf}</Text>
            <Text style={ styles.dataText }>Unidade: {this.props.loc.unidade}</Text>
            <Text style={ styles.dataText }>IBGE: {this.props.loc.ibge}</Text>
            <Text style={ styles.dataText }>GIA: {this.props.loc.gia}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      loc: state.CEPReducer
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
  },
  data: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'column'
  },
  dataText: {
    fontSize: 18
  },
  dataError: {
    fontSize: 18,
    color: 'red',
    alignSelf: 'center'
  }
});
