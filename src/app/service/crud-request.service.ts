import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudRequestService {

constructor(private http:HttpClient) { }

  getMoviesList(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${environment.apiKey}`
    );
  }
  getMoviesListByPagination(page: number): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${environment.apiKey}&page=${page}`
    );
  }

  getMovieDetails(id:string){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${environment.apiKey}`)
  }

  getMovieRecommendations(movie_id:string){
    return this.http.get(`https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${environment.apiKey}`)
  }
}
