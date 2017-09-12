import { Component, Input, Output } from '@angular/core';
import{ EventEmitter } from '@angular/core';
import { UpdateFavService } from './update-fav.service';
import { DisplayFavouritesService } from '../display-favourites/display-favourites.service';

@Component({
	selector: 'app-update-fav',
	templateUrl: './update-fav.component.html',
	styleUrls: ['./update-fav.component.css'],
	providers: [UpdateFavService, DisplayFavouritesService]
})
export class UpdateFavComponent {
	@Input() weather:any;
	feels_like:string;
	favourites:any;
	constructor(private updateService:UpdateFavService, private displayfavourite: DisplayFavouritesService) { }
	ref:any;
	updateFav(weather:any){
		this.updateService.updateFav(weather,this.feels_like)
		.subscribe(ref=>{this.ref=ref;
			if(ref.ok){
				return this.displayfavourite.getData()
				.subscribe(data=>{this.favourites=data;
					console.log(this.favourites)});
			}

		});
		
	}

}
