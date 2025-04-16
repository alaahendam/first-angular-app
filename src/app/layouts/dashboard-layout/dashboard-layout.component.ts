import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardNavbarComponent } from '../../components/dashboard-navbar/dashboard-navbar.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [RouterOutlet, DashboardNavbarComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css',
})
export class DashboardLayoutComponent {}
