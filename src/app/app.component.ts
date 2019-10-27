import { Component, OnInit, OnDestroy } from '@angular/core';
import { auth } from '../firebase/firebase.utils'
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  unsubscribeFromAuth = null;

  constructor( private userService: UserService ){}

  ngOnInit() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.userService.user.next(user)
    })
  }

  ngOnDestroy() {
    this.unsubscribeFromAuth();
  }
}
