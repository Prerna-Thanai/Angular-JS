import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DisplayFavouritesService {

  constructor(private http: Http) {}
  getData() : Observable<any> {
  	const url="http://localhost:3003/";
  	return this.http
  	.get(url)
    .map((response:Response)=> 
      <any>response.json()
      );
  }

  deleteData(date:any, city:any): Observable<any>{
  	console.log(date,city);
  	const url='http://localhost:3003/remove/'+date+'/'+city;
    console.log(url);
    return this.http
    .delete(url)
    .map(res=><any>res.json());

  }

  updateFav(weather:any){
    return 1;
  }
}
