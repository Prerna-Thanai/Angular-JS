import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http:Http) { }

  login(info:any): Observable<any>{
  	const url="http://localhost:3003/login";

  	return this.http
  	.post(url,info)
  	.map((res:Response)=><any>res.json());

  }

}
