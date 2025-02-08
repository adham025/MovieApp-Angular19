import { Component } from '@angular/core';
import { CrudRequestService } from '../service/crud-request.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  imports: [RouterModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent {
  movieId! : number;
  movie: any
  recommendations: any
  constructor(
    private route: ActivatedRoute,
    private _crudRequestService: CrudRequestService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.movieId = Number(params.get('id'));
      this.fetchMovieDetails();
      this.fetchRecommendations();
    });
  }
  
  fetchMovieDetails() {
    this._crudRequestService.getMovieDetails(this.movieId).subscribe({
      next: (data) => {
        this.movie = data;
      }
    });
  }
  
  fetchRecommendations() {
    this._crudRequestService.getMovieRecommendations(this.movieId).subscribe({
      next: (data) => {
        this.recommendations = data;
      }
    });
  }
  
}
