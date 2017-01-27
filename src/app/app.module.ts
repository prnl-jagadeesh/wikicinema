import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { InputModule } from './input/input.module';
import { ButtonModule } from './button/button.module';
import { SearchModule } from './sections/search/search.module';
import { MovieListModule } from './movie-list/movie-list.module';

import '../styles.scss';

import { SearchService } from './core/search/search.service';

import { Routing } from './app.routing';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    InputModule,
    ButtonModule,
    MovieListModule,
    SearchModule,
    Routing
  ],
  providers: [
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
