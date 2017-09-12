import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers: [LoginService]
})
export class LoginComponent {
	data:any={};
	info:any={};
	constructor(private loginUser:LoginService, private router:Router) { }

	enter(data:any){

		console.log(data);
		if(data===1)
		{
			console.log("successfully login");
			this.router.navigateByUrl('/Header');
	
	
		}else{
				console.log("Not Login");				
		
		}
	}

	login()
	{
		this.loginUser.login(this.data)
		.subscribe((data)=>{this.enter(this.loginUser.flag) });
	}
}
