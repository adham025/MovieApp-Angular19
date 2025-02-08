import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SearchServiceService } from '../service/search-service.service';
import { environment } from '../../environments/environment';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-search',
  imports: [RouterModule,FormsModule],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css'
})

export class MovieSearchComponent {
  searchKey: string | null = '';
  movies: any[] = [];

  constructor(private route: ActivatedRoute , private movieService: SearchServiceService) {}

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      this.searchKey = params.get('searchKey');
      if (this.searchKey) {
        this.searchMovies(this.searchKey);
      }
    });
  }

  searchMovies(searchKey: string) {
    this.movieService.searchMovies(searchKey).subscribe(response => {
      this.movies = response.results || [];
      console.log('Movies:', this.movies);
    });
  }

}
