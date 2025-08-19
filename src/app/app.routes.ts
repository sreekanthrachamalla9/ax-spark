import { Routes } from '@angular/router';
import { sign } from 'node:crypto';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path: '', redirectTo: '/signUp', pathMatch: 'full'},
    {path: 'signUp', component: SignupComponent},
    {path:'login', component: LoginComponent}
];
