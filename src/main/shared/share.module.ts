import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { SharedActions } from '../shared/share-actions';
import { SharedServices } from '../shared/share-services';
import { SharedComponents } from '../shared/share-components';
import { SharedDirectives } from '../shared/share-directives';
import { SharedPipes } from '../shared/share-pipes';

@NgModule({
    declarations: [
        SharedComponents,
        SharedDirectives,
        SharedPipes,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        TranslateModule,
    ],
    exports: [
        SharedComponents,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        SharedDirectives,
        SharedPipes,
    ],
    providers: [
        HttpModule,
        SharedActions,
        SharedServices,
    ]
})
export class SharedModule {}
