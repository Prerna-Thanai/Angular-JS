import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import {SearchComponent} from './search/search.component';
import { SearchService} from './search/search.service';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchDetailComponent } from './search-detail/search-detail.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { DisplayFavouritesComponent } from './display-favourites/display-favourites.component';
import { UpdateFavComponent } from './update-fav/update-fav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchListComponent,
    SearchDetailComponent,
    HeaderComponent,
    DisplayFavouritesComponent,
    UpdateFavComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent
  ],
  imports: [
  	NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
