import { CEP_CHANGE, REQUEST_CEP_SUCCESS, REQUEST_CEP_ERROR } from '../actions/actionTypes';

const INITIAL_STATE = {
    cep: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
    unidade: '',
    ibge: '',
    gia: ''
}

export const CEPReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CEP_CHANGE: {
            return { ...state, cep: action.payload }
        }
        case REQUEST_CEP_SUCCESS: {
            return action.payload;
        }
        case REQUEST_CEP_ERROR: {
            return { ...state, error: action.payload }
        }
        default:
            return state;
    }
}