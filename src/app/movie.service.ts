import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  readonly API_URL = 'http://www.omdbapi.com/'; //?i=tt3896198&apikey=e268ffe0
  readonly API_KEY = 'e268ffe0';
  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get(this.API_URL,{
      params: {
        apikey: this.API_KEY,
        s: 'x men'
      }
    });
  }
}
