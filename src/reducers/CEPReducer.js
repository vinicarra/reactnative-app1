import { CEP_CHANGE } from '../actions/actionTypes';

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
        default:
            return state;
    }
}