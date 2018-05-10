import * as Actions from './actionTypes';

export const changeCep = (cep) => {
    return {
        type: Actions.CEP_CHANGE,
        payload: cep
    }
}

export const searchCep = (cep) => {
    fetch('https://viacep.com.br/ws/' + cep + '/json/').then(response => {
        response.json().then(responseJson => {
            alert(responseJson.localidade);
        });
    }).catch(error => {
        alert(error);
    });
    return {
        type: 'teste'
    }
}