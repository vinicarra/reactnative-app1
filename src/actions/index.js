import * as Actions from './actionTypes';

export const changeCep = (cep) => {
    return {
        type: Actions.CEP_CHANGE,
        payload: cep
    }
}

const searchSuccess = (responseJson, dispatch) => {
    dispatch(
        {
            type: Actions.REQUEST_CEP_SUCCESS,
            payload: responseJson
        }
    );
}

const searchError = (error, dispatch) => {
    dispatch(
        {
            type: Actions.REQUEST_CEP_ERROR,
            payload: error
        }
    );
}

export const searchCep = (cep) => {
    return dispatch => {
        if(cep.length == 8) {
            fetch('https://viacep.com.br/ws/' + cep + '/json/').then(response => {
                response.json().then(responseJson => {
                    searchSuccess(responseJson, dispatch);
                });
            }).catch(error => {
                searchError("CEP não encontrado", dispatch);
            });
        }
        else
            searchError("CEP não encontrado", dispatch);
    }
}