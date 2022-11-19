import { Personaje } from './../components/interfaces/personaje.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/environment.prod';
import { Observable } from 'rxjs';
import { Location2 } from '../components/interfaces/location.interface';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http:HttpClient) { }

searchPersonaje(query = '', page = 1):Observable<Personaje[]>{
 // return this.http.get<Personaje[]>>( environment.url + 'character/?name=' + query + '&page=' + page);
  return  this.http.get<Personaje[]>(`${environment.url}/character/?name=${query}&page=${page}`);
}

getDetail(id:number):Observable<Personaje>{
  return  this.http.get<Personaje>(`${environment.url}/character/${id}`);

}

getLocation(id:number):Observable<Location2>{
  return  this.http.get<Location2>(`${environment.url}/location/${id}`);

}


}
