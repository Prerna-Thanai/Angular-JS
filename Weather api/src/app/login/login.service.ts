import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
flag:any;
  constructor(private http:Http) { }

  login(info:any): Observable<any>{
  	const url="http://localhost:3003/login";

  	return (this.http)
  	.post(url,info)
  	.map((res:Response)=>{
  		//console.log(res.json());

  		if(res.json().token===undefined){
  			this.flag=0;
  			console.log(this.flag);
  		}else{
  			this.flag=1;
  			localStorage.setItem('key',res.json().token);

  		}

  	});

  }

}
