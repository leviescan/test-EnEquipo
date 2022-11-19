import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PersonajesService } from '@app/shared/services/personajes.service';
import { Observable, take } from 'rxjs';
import { Location2 } from '@app/shared/components/interfaces/location.interface';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit{
 
  location1!: Observable<Location2>;
 
  constructor(private activaterouter:ActivatedRoute, private personajeService:PersonajesService, private location:Location) {}

  ngOnInit(): void {
    this.activaterouter.params.pipe( take(1)).subscribe((params) => {
      const id = params ['id'];
      this.location1 = this.personajeService.getLocation(id);
      
    })
  }

  goBack(){
    this.location.back();
  }

}
