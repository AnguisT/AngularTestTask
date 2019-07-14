import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ROUTES } from './app.routes';

import { BaseComponent } from './views/base/base.component';

import { HttpService } from './modules/service/htpp.service';
 
@NgModule({
    bootstrap: [BaseComponent],
    declarations: [
        BaseComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, {useHash: true}),
        HttpClientModule,
        BrowserAnimationsModule,
    ],
    providers: [
        HttpService,
    ],
})
export class AppModule{}