import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Franchise } from './franchise';

Injectable({
  providedIn: 'root',
});
export class FranchiseService {
  private baseUrl = 'http://localhost:8080/franchiseList';

  constructor(private http: HttpClient) {}

  getFranchises(): Observable<Franchise[]> {
    return this.http.get<Franchise[]>(`${this.baseUrl}`);
  }
}
