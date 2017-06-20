import { combineReducers } from 'redux';

import { globalReducer as global, IGlobalState } from './global/global.reducer';

export class IAppState {
    global?: IGlobalState;
}

export const rootReducer = combineReducers<IAppState>({
    global,
});