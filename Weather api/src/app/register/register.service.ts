import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class RegisterService {

  constructor(private http: Http) { }
register(info:any){
	const url="http://localhost:3003/register";
	return this.http
	.post(url,info)
	.map((res:Response)=><any>res.json());
}

}
