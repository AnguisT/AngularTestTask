import { Component, ViewEncapsulation } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
    selector: 'app-base',
    encapsulation: ViewEncapsulation.None,
    templateUrl: './tpl/index.html',
    styleUrls: ['./styles/index.scss'],
})

export class BaseComponent {
    constructor (private translate: TranslateService) {
        this.translate.use('ru-RU');
    }
}