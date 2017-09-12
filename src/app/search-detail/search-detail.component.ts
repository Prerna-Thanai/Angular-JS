import { Component, Input } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SearchDetailService} from './search-detail.service';
@Component({
	selector: 'app-search-detail',
	templateUrl: './search-detail.component.html',
	styleUrls: ['./search-detail.component.css'],
	providers: [SearchDetailService]
})
export class SearchDetailComponent{
	@Input() city:any;
	constructor(private dataservice: SearchDetailService) { }
	ref:any;
	saveFav(weather:any, city: string){
		this.dataservice.saveData(weather,city)
		.subscribe(data=>{

			this.ref=data;
			if(this.ref===undefined){
				alert("Content added Successfully")			
			}else{
				alert("Added already");
			}

		});
	}

}
