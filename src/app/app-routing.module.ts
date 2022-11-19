import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) }, 
  { path: 'lista', loadChildren: () => import('./components/pages/personajes/lista/lista.module').then(m => m.ListaModule) }, 
  { path: 'details/:id', loadChildren: () => import('./components/pages/personajes/details/details.module').then(m => m.DetailsModule) },
  { path: 'favoritos', loadChildren: () => import('./components/pages/favoritos/favoritos.module').then(m => m.FavoritosModule) },
  { path: 'location/:id', loadChildren: () => import('./components/pages/personajes/location/location.module').then(m => m.LocationModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
