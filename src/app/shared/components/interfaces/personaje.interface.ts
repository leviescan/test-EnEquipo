export interface Personaje {
    id:number;
    name:string;
    image:string;
    species:string;
    gender:string;
    created:string;
    status:string;
    type:string;
    url:string;
    origin:Origin;
    location:Location;
    episode:[];

}

class Location {
    name!:string;
    url!:string;
 }

 class Origin {
    name!:string;
    url!:string;
 }


