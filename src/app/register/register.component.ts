import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
data:any={};
info:any={};
  constructor(private registerUser:RegisterService, private route:Router) { }

  ngOnInit() {
  }
register()
{
	//console.log(this.data);
  if(this.data.Username===undefined || this.data.Password===undefined || this.data.Email===undefined ||
    this.data.Phone===undefined || this.data.DOB===undefined){
    alert("Fields cant be empty");
  }else{
	this.registerUser.register(this.data)
	.subscribe((data)=>this.info=data)
  alert("Register Successfully,\n Login to continue");
  this.route.navigateByUrl('/Login');

}
}


}
