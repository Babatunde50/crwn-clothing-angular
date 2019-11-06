import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { DirectoryComponent } from './directory/directory.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { CollectionOverviewComponent } from './collection-overview/collection-overview.component';
import { CollectionPageComponent } from './collection-page/collection-page.component';


const routes: Routes = [
  { path: '', component: DirectoryComponent },
  { path: 'auth', component: AuthPageComponent },
  { path: 'shop', component: ShopPageComponent, children: [
    { path: "", component: CollectionOverviewComponent },
    { path: ":collectionId", component: CollectionPageComponent },
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
