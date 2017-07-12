import { Component } from '@angular/core';

import { NgRedux, DevToolsExtension } from 'ng2-redux';
import { IAppState, rootReducer } from '../redux/stores/index';
import { TranslateService } from '@ngx-translate/core';
import ReduxThunk from 'redux-thunk';

import { GlobalActions } from '../redux/actions';
import { ApiService, SiteSettingService } from '../shared/services';

import '../../style/app.scss';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title: string;
  languages: Array<any>;

  constructor(private _api: ApiService,
              private _siteSettingService: SiteSettingService,
              private _translateService: TranslateService,
              private _ngRedux: NgRedux<IAppState>,
              private _devTool: DevToolsExtension,
              private _globalActions: GlobalActions) {
    this.title = this._api.title;
    this.languages = this._siteSettingService.current.languages;
    this._ngRedux.configureStore(
      rootReducer,
      {},
      [ReduxThunk],
      [this._devTool.isEnabled() ? this._devTool.enhancer() : f => f]);

    this._translateService.addLangs(this._siteSettingService.current.languages.map(language => language.id));
        // this language will be used as a fallback when a translation isn't found in the current language
        this._translateService.setDefaultLang(this._siteSettingService.current.defaultLanguage);

    this._ngRedux.select((state: IAppState) => state.global.currentLanguage).subscribe(language => {
      this._translateService.use(language);
    });
  }

  changeLanguage(language: string) {
    this._globalActions.changeLanguageDispatch(language);
  }
}
