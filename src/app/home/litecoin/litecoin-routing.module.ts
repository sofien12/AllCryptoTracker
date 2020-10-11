import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LitecoinComponent } from './litecoin.component';

const routes: Routes = [
  {
    path: '',
    component: LitecoinComponent,
  },

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LitecoinRoutingModule {}
