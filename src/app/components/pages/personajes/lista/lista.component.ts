import { PersonajesService } from './../../../../shared/services/personajes.service';
import { Personaje } from './../../../../shared/components/interfaces/personaje.interface';
import { Component, OnInit } from '@angular/core';
import { filter, take } from 'rxjs';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
type RequestInfo = { next: any};

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent  implements OnInit{

  personajes: Personaje [] = [];
  info:RequestInfo = {next: null};
  private pagenum:number =1;
  private query!:string;
  private hideScroll:number = 200;
  private showScroll:number = 500;
  
  constructor( private servicePersonaje: PersonajesService, private activateRoute:ActivatedRoute, private router:Router ) {
    this.changeUrl();
  }

  ngOnInit(): void {
    this.getCharactersByQuery();
  }

  private loadData ():void {
    this.servicePersonaje.searchPersonaje(this.query, this.pagenum)
    .pipe(
      take(1)
    ).subscribe( (response:any) => {
      if(response?.results?.length) {
        const {info, results} = response;
        this.personajes = [...this.personajes, ...results];
        this.info = info;
      } else {
        this.personajes = [];
      }
      
      
    })
  }

  changeUrl():void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)  ).subscribe(
        () => {
          this.personajes = [];
          this.pagenum = 1;
          this.getCharactersByQuery();
        });
  }

  private getCharactersByQuery(): void {
    this.activateRoute.queryParams.pipe(take(1)).subscribe(params=>{
     console.log('params->',params)
  this.query = params['query'];
      this.loadData();
    });
  }

}
