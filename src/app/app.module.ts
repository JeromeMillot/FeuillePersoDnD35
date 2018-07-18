import { JetonService } from './core/jeton/jeton.service';
import { DataTransactionService } from './core/services/data-transaction.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgoraComponent } from './agora/agora.component';
import { FichePjComponent } from './fiche-pj/fiche-pj.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    DashboardComponent,
    AgoraComponent,
    FichePjComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [
    DataTransactionService,
    JetonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
