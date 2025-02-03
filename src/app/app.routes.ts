import { Routes } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'movies',
    component: MoviesListComponent,
    title: 'Home Page'
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent,
    title: 'Movie Details'
  },
  {
    path: 'wishlist',
    component: WishlistComponent,
    title: 'Wishlist Page'
  },
  {
    path: 'search/:searchKey',
    component: MovieSearchComponent,
    title: 'Search'
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    title: 'Registration'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Not Found'
  }

];

