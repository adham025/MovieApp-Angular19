import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddToWishlistService {
  private wishlistItems: any[] = [];
  private wishlistSubject = new BehaviorSubject<any[]>(this.wishlistItems);

  constructor() { }

  getWishlist(): Observable<any[]> {
    return this.wishlistSubject.asObservable();
  }

  addToWishlist(movie: any): void {
    const existingMovie = this.wishlistItems.find(item => item.id === movie.id);
    if (!existingMovie) {
      this.wishlistItems.push(movie);
      this.wishlistSubject.next([...this.wishlistItems]);
      console.log('Movie added to wishlist:', movie);
    }
  }

  removeFromWishlist(movieId: number): void {
    this.wishlistItems = this.wishlistItems.filter(movie => movie.id !== movieId);
    this.wishlistSubject.next([...this.wishlistItems]);
    console.log('Movie removed from wishlist:', movieId);
  }

  clearWishlist(): void {
    this.wishlistItems = [];
    this.wishlistSubject.next([...this.wishlistItems]);
    console.log('Wishlist cleared');
  }

  isInWishlist(movieId: number): boolean {
    return this.wishlistItems.some(movie => movie.id === movieId);
  }
}