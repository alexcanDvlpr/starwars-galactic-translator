import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraductorComponent } from './components/traductor/traductor.component';

const routes: Routes = [
  { path: '', component: TraductorComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
