import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  /** URL de la API para obtener productos */
  private apiUrl = 'https://62e152f8fa99731d75d44571.mockapi.io/api/v1/test-front-end-skandia/cards';

  constructor(private http: HttpClient) {}

  /**
   * Obtiene la lista de productos desde la API.
   */
  getProducts(): Observable<{ listCard: Product[] }> {
    return this.http.get<{ listCard: Product[] }>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  /**
   * Maneja errores HTTP y devuelve un mensaje amigable.
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    const message = error.error instanceof ErrorEvent
      ? `Error de cliente o red: ${error.error.message}`
      : `Error del servidor (Código: ${error.status})`;

    console.error(message);
    return throwError(() => new Error('Hubo un problema al obtener los productos. Intenta nuevamente.'));
  }
}
