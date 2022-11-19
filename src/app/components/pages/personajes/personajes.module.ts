import { LocationComponent } from './location/location.component';

import { ListaComponent } from './lista/lista.component';
import { DetailsComponent } from './details/details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DetailsComponent,
    ListaComponent,
    LocationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DetailsComponent,
    ListaComponent,
    LocationComponent,
  ]
})
export class PersonajesModule { }
