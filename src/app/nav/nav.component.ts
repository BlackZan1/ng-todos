import { Component, Input } from '@angular/core';
import { iTODOItem, iCategory } from '../app.component';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    interpolation: ['[{', '}]']
})

export class NavComponent {
    @Input() todos: iTODOItem[]
    @Input() filter: (category: iCategory) => void

    logo = 'TODO';

    clickHandler(value: iCategory) {
        this.filter(value);
    }
}