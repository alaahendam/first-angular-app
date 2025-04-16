import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPagesNavbarComponent } from '../../components/landing-pages-navbar/landing-pages-navbar.component';

@Component({
  selector: 'app-landing-pages-layout',
  standalone: true,
  imports: [RouterOutlet, LandingPagesNavbarComponent],
  templateUrl: './landing-pages-layout.component.html',
  styleUrl: './landing-pages-layout.component.css',
})
export class LandingPagesLayoutComponent {}
