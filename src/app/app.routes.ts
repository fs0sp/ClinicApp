import { Routes } from '@angular/router';
import { ProfileRegistrationComponent } from './profile-registration/profile-registration.component';
import { AppComponent } from './app.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    { path: 'add-profile', component: ProfileRegistrationComponent, canActivate: [authGuard] },
    { path: 'consult', component: ConsultationComponent, canActivate: [authGuard] },
    { path: 'registration', component: RegistrationComponent, canActivate: [authGuard] },
    { path: 'signin', component: SignupComponent },
    { path: 'home', component: HomeComponent, canActivate: [authGuard] }
];

