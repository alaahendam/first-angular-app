import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', component: HomeComponent,
},
    { path: 'login', component: LoginComponent,  canActivate: [authGuard({ isAuthPath: true })] },
    { path: 'signup', component: SignupComponent,  canActivate: [authGuard({ isAuthPath: true })] },
    { path: 'dashboard', component: DashboardComponent,  canActivate: [authGuard({ requiresAuth: true })] },
];
