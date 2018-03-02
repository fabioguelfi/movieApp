import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogDetailsComponent } from './catalog-details/catalog-details.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'catalogDetails', component: CatalogDetailsComponent}
]
