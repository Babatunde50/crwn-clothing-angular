import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent implements OnInit {
  @Input() isGoogle: any;
  @Output() onClick = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onHandleClick() {
    this.onClick.emit();
  }

}
