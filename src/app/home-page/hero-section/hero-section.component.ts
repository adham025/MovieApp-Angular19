import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  imports: [FormsModule, RouterLink],

  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})

export class HeroSectionComponent {
  searchKey: string = '';
  constructor(private router: Router) {}


  searchMovies(): void {
    if (this.searchKey.trim()) {
      this.router.navigate(['/search'], { queryParams: { searchKey: this.searchKey } });
    console.log('Searching for:', this.searchKey);
    }
  }
}

