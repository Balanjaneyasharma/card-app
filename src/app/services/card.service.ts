import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Card } from '../models/card.interface';

@Injectable({
    providedIn: 'root',
})
export class CardService {

    // URL to the mock API endpoint for mock data
    private apiUrl: string = `https://67b5a67507ba6e59083dd3a8.mockapi.io/api/v1/Card`;

    private http: HttpClient = inject(HttpClient);

    getCards(): Observable<Card[]> {
        return this.http.get<Card[]>(this.apiUrl);
    }

    addCard(card = {}): Observable<Card> {
        return this.http.post<Card>(this.apiUrl, card);
    }

    deleteCard(cardId: string): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${cardId}`);
    }
}
