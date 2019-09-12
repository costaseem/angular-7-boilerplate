import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@/_modules/home';
import { LoginComponent } from '@/_modules/login';
import { RegisterComponent } from '@/_modules/register';
import { AuthGuard } from '@/_guards';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);