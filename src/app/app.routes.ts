import { Routes } from '@angular/router';
import { ProfileRegistrationComponent } from './profile-registration/profile-registration.component';
import { AppComponent } from './app.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'registration', pathMatch: 'full' },
    { path: 'add-profile', component: ProfileRegistrationComponent },
    { path: 'consult', component: ConsultationComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'signin', component: SignupComponent },
    { path: 'home', component: HomeComponent }
];

