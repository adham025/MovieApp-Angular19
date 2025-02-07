import { Component } from '@angular/core';
import { CrudRequestService } from '../../service/crud-request.service';
import { RouterModule } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-movies-list',
  imports: [RouterModule, CommonModule],
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {
movies : any[] = [];
constructor(private _crudService: CrudRequestService){}

ngOnInit() {
  this._crudService.getMoviesList().subscribe({
    next: (data) =>{
    this.movies = data.results;
    console.log(this.movies);
  },
  error: (err) => console.error('Error fetching movies:', err)
})
}

trackByFn(index: number, movie: any): number {
  return movie.id;
}
}
