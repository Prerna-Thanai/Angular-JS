import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class UpdateFavService {
  constructor(private http:Http) { }

  updateFav(weather:any, feels_like:string): Observable<any> {
  	const url="http://localhost:3003/update/"+weather.date+"/"+weather.city+"/"+feels_like;

 	return this.http
  	.put(url,weather)
  	.map((res:Response)=> <any[]>res.json());
  }

}
