import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { AppComponent } from './app/app.component';
import { ApiService, SiteSettingService } from './shared/services';
import { Routing } from './app.routing';
import { SharedModule } from './shared/share.module';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
  imports: [
    NgReduxModule.forRoot(),
    BrowserModule,
    HttpModule,
    FormsModule,
    SharedModule,
    Routing,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    })
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    ApiService,
    DevToolsExtension,
    SiteSettingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, '/i18n/', '.json');
}
