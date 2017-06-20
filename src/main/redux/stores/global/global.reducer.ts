import { GlobalActions } from '../../actions';

export interface IGlobalState {
    currentLanguage: string;
}

export const INIT_STATE: IGlobalState = {
    currentLanguage: 'us-UK'
};

export function globalReducer(state = INIT_STATE, action): IGlobalState {
    const { type, payload } = action;
    switch (type) {
        case GlobalActions.GLOBAL_CHANGE_LANGUAGE:
            return {
                ...state,
                currentLanguage: payload.language
            };
        default:
            return state;
    }
}