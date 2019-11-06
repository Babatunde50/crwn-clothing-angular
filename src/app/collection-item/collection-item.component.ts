import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collection-item',
  templateUrl: './collection-item.component.html',
  styleUrls: ['./collection-item.component.css']
})
export class CollectionItemComponent implements OnInit {
  @Input() item;
  
  constructor() { }

  ngOnInit() {
  }

}
