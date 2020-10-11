import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EthereumComponent } from './ethereum.component';


const routes: Routes = [
  {
    path: '',
    component: EthereumComponent,
  },

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EthereumRoutingModule {}
