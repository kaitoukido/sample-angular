import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { IAppState } from '../../stores';

@Injectable()
export class GlobalActions {
    static GLOBAL_CHANGE_LANGUAGE = 'GLOBAL_CHANGE_LANGUAGE';

    constructor(private _ngRedux: NgRedux<IAppState>) {
    }

    changeLanguage(language: string) {
        return {
            type: GlobalActions.GLOBAL_CHANGE_LANGUAGE,
            payload: {
                language,
            }
        };
    }

    changeLanguageDispatch(language: string) {
        this._ngRedux.dispatch(this.changeLanguage(language));
    }
}