import { Component, OnInit } from '@angular/core';
import { signInWithGoogle } from '../../firebase/firebase.utils'


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor() { }

  ngOnInit() {
    
  }

  handleInput(event) {
    if(event.target.name === 'email') {
      this.email = event.target.value;
    } else {
      this.password = event.target.value
    }
  }

  googleSignIn() {
    signInWithGoogle()
  }


}
