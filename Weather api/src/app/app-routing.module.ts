import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DisplayFavouritesComponent } from './display-favourites/display-favourites.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
const routes: Routes= [
	{ path: '', redirectTo: '/Login', pathMatch: 'full' },
	{ path: 'Search', component: HomeComponent },
	{ path: 'DisplayFavourites', component: DisplayFavouritesComponent},
	{ path: 'Register', component: RegisterComponent},
	{ path: 'Login', component: LoginComponent},
	{ path: 'Home', component:HomeComponent},
	{ path: 'Header', component:HeaderComponent}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule{}
