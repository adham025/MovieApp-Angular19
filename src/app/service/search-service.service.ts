import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  //       `https://api.themoviedb.org/3/movie/now_playing?api_key=${environment.apiKey}&page=${page}&language=${language}`

  private apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${environment.apiKey}`;

  constructor(private http: HttpClient) {}

  searchMovies(searchKey: string): Observable<any> {
    return this.http.get(`${this.apiUrl}&&query=${searchKey}`);
  }


}
