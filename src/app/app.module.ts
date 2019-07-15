import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule, TranslateStaticLoader } from 'ng2-translate';

import { ROUTES } from './app.routes';

import { BaseComponent } from './views/base/base.component';

import { HttpService } from './modules/service/htpp.service';
import { TranslateComponent } from './views/base/comps/language/language.component';
 
@NgModule({
    bootstrap: [BaseComponent],
    declarations: [
        BaseComponent,
        TranslateComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, {useHash: true}),
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, './assets/i18n', '.json'),
            deps: [Http]
        }),
        HttpClientModule,
        BrowserAnimationsModule,
    ],
    providers: [
        HttpService,
    ],
})
export class AppModule{}