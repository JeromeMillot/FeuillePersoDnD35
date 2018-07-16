import { DataTransactionService } from './core/data-transaction.service';
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
    CoreModule
  ],
  providers: [DataTransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
