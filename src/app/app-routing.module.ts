import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'configuracion', loadChildren: './configuracion/configuracion.module#ConfiguracionPageModule' },
  { path: 'detalles-productos', loadChildren: './detalles-productos/detalles-productos.module#DetallesProductosPageModule' },
  { path: 'historial', loadChildren: './historial/historial.module#HistorialPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'recargar', loadChildren: './recargar/recargar.module#RecargarPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
