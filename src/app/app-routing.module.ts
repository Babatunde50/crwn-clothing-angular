import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { DirectoryComponent } from './directory/directory.component';


const routes: Routes = [
  { path: '', component: DirectoryComponent },
  { path: 'auth', component: AuthPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
