import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogDetailsComponent } from './catalog-details/catalog-details.component';
import { HeaderComponent } from './header/header.component';
import { ItemCatalogComponent } from './catalog/item-catalog/item-catalog.component';


@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    HomeComponent,
    CatalogDetailsComponent,
    HeaderComponent,
    ItemCatalogComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
