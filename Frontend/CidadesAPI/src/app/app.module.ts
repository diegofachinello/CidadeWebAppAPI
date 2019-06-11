import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CidadeService } from './cidade.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import * as _ from 'lodash';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GridCidadeComponent } from './grid-cidade/grid-cidade.component';
import { FormsModule } from '@angular/forms';
import { AddOrUpdateCidadeComponent } from './add-or-update-cidade/add-or-update-cidade.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }
 
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridCidadeComponent,
    AddOrUpdateCidadeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    CidadeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
