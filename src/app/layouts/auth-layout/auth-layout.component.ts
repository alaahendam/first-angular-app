import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthNavbarComponent } from '../../components/auth-navbar/auth-navbar.component';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet, AuthNavbarComponent],
  templateUrl: './auth-layout.component.html',
  styleUrl: './auth-layout.component.css',
})
export class AuthLayoutComponent {}
