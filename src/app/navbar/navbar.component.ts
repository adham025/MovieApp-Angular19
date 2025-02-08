import { AccLangService } from './../service/acc-lang.service';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  selectedLanguage: string = 'En';

  constructor(private AccLangService: AccLangService) {
    this.selectedLanguage = this.AccLangService.getLanguage().toUpperCase();
  }

  changeLanguage(lang: string) {
    this.AccLangService.setLanguage(lang);
    this.selectedLanguage = lang.toUpperCase();
    window.location.reload();
  }
}
