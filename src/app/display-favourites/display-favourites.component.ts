import { Component , OnInit} from '@angular/core';
import { DisplayFavouritesService } from './display-favourites.service';

@Component({

  selector: 'app-display-favourites',
  templateUrl: './display-favourites.component.html',
  styleUrls: ['./display-favourites.component.css'],
  providers: [DisplayFavouritesService]
})
export class DisplayFavouritesComponent implements OnInit{


  favourites: any;
  delete= [ ];
  update:any;
  constructor(private displayservice: DisplayFavouritesService) { }
  getFav(){
  	this.displayservice.getData()
  	.subscribe(ref=>{this.favourites=ref;
    });
  }

  deleteFav(date:any, city:any){
    this.displayservice.deleteData(date,city)
    .subscribe(data=>{this.delete=data;
      if(data.ok){
        this.getFav();
        return this.delete;
      }
    });
  }


  ngOnInit(){
    this.getFav();
  }

  updateFav(weather:any){
    this.update=weather;
  }

  p: number = 1; 
}
