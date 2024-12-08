import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Monstruo } from '../interfaces/monstruo.interface';
import { Raza } from '../interfaces/raza.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BusquedasService {
  private apiUrl: string = 'https://www.dnd5eapi.co/api';

  public cacheStore: CacheStore = {
    porRaza: { term: '', raza: undefined },
    porMonstruo: { term: '', monstruo: undefined },
  };

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage(): void {
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage(): void {
    const cacheData = localStorage.getItem('cacheStore');
    if (cacheData) {
      this.cacheStore = JSON.parse(cacheData);
    }
  }

  obtenerRaza(termino: string): Observable<Raza | undefined> {
    const url = `${this.apiUrl}/races/${termino}`;
    return this.http.get<Raza>(url).pipe(
      catchError(() => {
        console.error(`Error fetching race: ${termino}`);
        return of(undefined);
      }),
      tap((raza) => {
        if (raza) {
          this.cacheStore.porRaza = { term: termino, raza };
          this.saveToLocalStorage();
        }
      })
    );
  }

  obtenerMonstruo(termino: string): Observable<Monstruo | undefined> {
    const url = `${this.apiUrl}/monsters/${termino}`;
    return this.http.get<Monstruo>(url).pipe(
      catchError(() => {
        console.error(`Error fetching monster: ${termino}`);
        return of(undefined);
      }),
      tap((monstruo) => {
        if (monstruo) {
         
          const domain = 'https://www.dnd5eapi.co';
          monstruo.image = `${domain}${monstruo.image}`;
          this.cacheStore.porMonstruo = { term: termino, monstruo };
          this.saveToLocalStorage();
        }
      })
    );
  }
}
