import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
@Injectable()

export class SearchService{
	private url: string ="http://api.apixu.com/v1/forecast.json?key=b827d37ae75c47a1aa2130543170609&q=";
	constructor(private http: Http){}
	getData(name: string) {
		return this.http.get(this.url+`${name}&days=5`)
		.map((response:Response)=> <any[]>response.json())
	}

}