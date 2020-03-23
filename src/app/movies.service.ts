import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovies } from './interfaces';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private moviesUrl = '/assets/SERVER/movies.json';

  constructor(private http: HttpClient) { }

  getHttpMovies(): Observable<IMovies[]> {
    return this.http.get<IMovies[]>(this.moviesUrl);
  }

}


