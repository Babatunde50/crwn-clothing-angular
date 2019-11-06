import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { FormInputComponent } from './form-input/form-input.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { DirectoryComponent } from './directory/directory.component';
import { CollectionPreviewComponent } from './collection-preview/collection-preview.component';
import { CollectionItemComponent } from './collection-item/collection-item.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { CollectionOverviewComponent } from './collection-overview/collection-overview.component';
import { CollectionPageComponent } from './collection-page/collection-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    CustomButtonComponent,
    FormInputComponent,
    AuthPageComponent,
    MenuItemComponent,
    DirectoryComponent,
    CollectionPreviewComponent,
    CollectionItemComponent,
    ShopPageComponent,
    CollectionOverviewComponent,
    CollectionPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
