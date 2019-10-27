import { Component, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';

import { auth } from '../../firebase/firebase.utils'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  private userSub: Subscription;

  constructor(private userService: UserService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.userSub = this.userService.user.subscribe(user => {
      this.isAuthenticated = !!user
      this.ref.detectChanges();
    })
    
  }

  onSignOut() {
    auth.signOut();
    this.userService.user.next(null)
  }
  
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
