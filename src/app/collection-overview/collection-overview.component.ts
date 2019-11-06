import { Component, OnInit } from '@angular/core';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-collection-overview',
  templateUrl: './collection-overview.component.html',
  styleUrls: ['./collection-overview.component.css']
})
export class CollectionOverviewComponent implements OnInit {
  collectionsPreview;

  constructor( private shopService: ShopService ) { }

  ngOnInit() {
    this.collectionsPreview = this.shopService.selectCollectionsForPreview();
    console.log(this.collectionsPreview)
  }

}
