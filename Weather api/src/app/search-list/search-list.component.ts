import { Component, Input } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SearchListService} from './search-list.service';
@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent{
@Input() city:any;
  constructor() { }


}
