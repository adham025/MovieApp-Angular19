import { AccLangService } from './../service/acc-lang.service';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AddToWishlistService } from '../service/add-to-wishlist.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  selectedLanguage: string = 'En';
  wishlistCount$: Observable<number>;

  constructor(private AccLangService: AccLangService,private wishlistService: AddToWishlistService) {
    this.selectedLanguage = this.AccLangService.getLanguage().toUpperCase();
    this.wishlistCount$ = this.wishlistService.getWishlist().pipe(
      map(movies => movies.length)
    );
  }

  changeLanguage(lang: string) {
    this.AccLangService.setLanguage(lang);
    this.selectedLanguage = lang.toUpperCase();
    window.location.reload();
  }
}
