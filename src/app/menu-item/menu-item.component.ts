import { Component, OnInit, Input } from '@angular/core';
import { Section } from '../section';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() section: Section;

  constructor() { }

  ngOnInit() {
  }

}
