import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Card } from '../../models/card.interface';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [DatePipe],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})
export class CardComponent {

    @Input() card!: Card;
    @Output() delete = new EventEmitter<string>();

    isRequestInProgress: boolean = false;

    onDelete(id: string): void {
        this.isRequestInProgress = true;
        this.delete.emit(id);
    }


}
