import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SearchService} from './search.service';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'], 
})
export class SearchComponent {
  @Output() weatherData= new EventEmitter();
  
  name='';
  
  constructor(private cityservice: SearchService){}
  getCityName(name){
    if(this.name===""){
      alert("Field can't be empty");
    }
    else{
  	this.cityservice.getData(this.name)
  	.subscribe(resweatherData => this.weatherData.emit(resweatherData));
    
  }
}

}
