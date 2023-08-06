import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './pages/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: LoginComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'sistema',
    loadChildren: () => import('./pages/sistema/sistema.module').then(m => m.SistemaModule),
    canActivate:[AuthGuard]
  }
  ,
  {
    path: 'categoria',
    loadChildren: () => import('./pages/categoria/categoria.module').then(m => m.CategoriaModule),
    canActivate:[AuthGuard]
  }
  ,
  {
    path: 'despesa',
    loadChildren: () => import('./pages/despesa/despesa.module').then(m => m.DespesaModule),
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
