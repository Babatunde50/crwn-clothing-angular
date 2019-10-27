import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  @Input() type: string;
  @Input() label: string;
  @Input() name: string;
  @Output() onInput = new EventEmitter<any>()


  constructor() { }

  ngOnInit() {
    
  }

  onHandleInput(event: any) {
    this.onInput.emit(event);
  }

}
