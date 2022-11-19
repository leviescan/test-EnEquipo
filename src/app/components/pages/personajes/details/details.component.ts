import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Personaje } from './../../../../shared/components/interfaces/personaje.interface';
import { Observable, take } from 'rxjs';
import { PersonajesService } from '@app/shared/services/personajes.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
 
  personaje2!: Observable<Personaje>;
 
  constructor(private activaterouter:ActivatedRoute, private personajeService:PersonajesService, private location:Location) {}

  ngOnInit(): void {
    this.activaterouter.params.pipe( take(1)).subscribe((params) => {
      const id = params ['id'];
      this.personaje2 = this.personajeService.getDetail(id);
      
    })
  }

  goBack(){
    this.location.back();
  }

}
