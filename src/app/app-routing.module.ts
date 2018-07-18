import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FichePjComponent } from './fiche-pj/fiche-pj.component';
import { AgoraComponent } from './agora/agora.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { AuthGuardService } from './core/services/auth-guard.service';


const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'agora', component: AgoraComponent, canActivate: [AuthGuardService] },
  { path: 'fiche/:id', component: FichePjComponent, canActivate: [AuthGuardService] },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
