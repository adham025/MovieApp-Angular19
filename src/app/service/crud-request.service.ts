import { AccLangService } from './acc-lang.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CrudRequestService {
  constructor(
    private http: HttpClient,
    private AccLangService: AccLangService
  ) {}

  private getLanguageParam(): string {
    return `&language=${this.AccLangService.getLanguage()}`;
  }

  getMoviesList(): Observable<any> {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${
        environment.apiKey
      }${this.getLanguageParam()}`
    );
  }

  getMovieDetails(id: string) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${
        environment.apiKey
      }${this.getLanguageParam()}`
    );
  }

  getMovieRecommendations(movie_id: string) {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/${movie_id}/recommendations?api_key=${
        environment.apiKey
      }${this.getLanguageParam()}`
    );
  }
}
