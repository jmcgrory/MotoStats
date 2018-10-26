import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './Components/Layout/header/header.component';
import { FooterComponent } from './Components/Layout/footer/footer.component';
import { NavigationComponent } from './Components/Layout/navigation/navigation.component';
import { TableComponent } from './Components/Layout/table/table.component';

import { HomeComponent } from './Components/Route/home/home.component';
import { ContactComponent } from './Components/Route/contact/contact.component';
import { BikesComponent } from './Components/Route/bikes/bikes.component';
import { LostComponent } from './Components/Route/lost/lost.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'bikes',
    component: BikesComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: LostComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    TableComponent,
    HomeComponent,
    ContactComponent,
    BikesComponent,
    LostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
