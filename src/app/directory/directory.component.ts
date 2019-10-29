import { Component, OnInit } from '@angular/core';
import { DirectoryService } from '../directory.service';
import { Section } from '../section';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  sections: Section[]
  constructor( private directoryService: DirectoryService ) { }

  ngOnInit() {
    this.sections = this.directoryService.getSections();
  }

}
