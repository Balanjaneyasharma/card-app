import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

import { Card } from '../../models/card.interface';
import { CardComponent } from "../card/card.component";
import { Subject, takeUntil } from 'rxjs';
import { CardService } from '../../services/card.service';
import { cardListFadeSlideAnimation } from '../../animations/card-list-fade-slide-animation';

@Component({
    selector: 'app-card-list',
    standalone: true,
    imports: [CardComponent, NgFor, NgIf],
    templateUrl: './card-list.component.html',
    styleUrl: './card-list.component.scss',
    animations: [cardListFadeSlideAnimation]
})
export class CardListComponent implements OnInit, OnDestroy {

    private cardService = inject(CardService);
    
    cardList: Card[]= [];
    destroyRef: Subject<void> = new Subject<void>();

    ngOnInit(): void {
        this.getCards();
    }

    getCards(): void {
        this.cardService.getCards()
        .pipe(
            takeUntil(this.destroyRef)
        )
        .subscribe({
            next: (cards: Card[]) => {
                this.cardList = cards;
            },
            error: (error) => {
                console.error('Error fetching cards:', error);
            }
        });
    }
    
    addCard(): void {
        this.cardService.addCard({})
        .pipe(
            takeUntil(this.destroyRef)  
        )
        .subscribe({
            next: (card: Card) => {
                this.cardList.push(card);
            }
        });
    }

    onDelete(cardId: string): void {
        this.cardService.deleteCard(cardId)
        .pipe(
            takeUntil(this.destroyRef)
        )
        .subscribe({
            next: () => {
                this.cardList = this.cardList.filter(card => card.id !== cardId);
            },
            error: (error) => {
                console.error('Error deleting card:', error);
            }
        });
    }

    ngOnDestroy(): void {
        this.destroyRef.next();
        this.destroyRef.complete();
    }

}
