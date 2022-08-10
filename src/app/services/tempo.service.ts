import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, take } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Tempo } from '../interfaces/tempo.interface';

@Injectable({
  providedIn: 'root'
})
export class TempoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private handleError(error: HttpErrorResponse): any {
    return throwError(() => new Error(`Erro: ${error.status} / ${error.message}`))
  }

  public getCidade(cidade: string): Observable<any> {
    return this.httpClient.get<Tempo>(`${environment.URL_TEMPO}
      ?array_limit=${environment.ARRAY_LIMIT}
      &fields=${environment.FIELDS}
      &key=${environment.KEY_API}
      &city_name=${cidade}`
    ).pipe(
      take(1),
      tap(sucesso => sucesso),
      catchError(this.handleError)
    );
  }
}
