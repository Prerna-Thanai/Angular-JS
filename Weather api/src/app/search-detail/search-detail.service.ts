import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class SearchDetailService {

  constructor(private http: Http) { }

saveData(weather: any, city:string): Observable<any>{
	const url="http://localhost:3003/insert";
	var completeData:any={};
		completeData.date=weather.date;
		completeData.city = city;
		completeData.icon = weather.day.condition.icon;
		completeData.avgtemp_c=weather.day.avgtemp_c;
		completeData.totalprecip_mm=weather.day.totalprecip_mm;
		completeData.avghumidity=weather.day.avghumidity;
		completeData.feels_like=weather.day.condition.text;
return this.http
.post(url,completeData)
.map((res:Response)=>{
	<any[]>res.json();
	console.log(res.json());
});
}
}
