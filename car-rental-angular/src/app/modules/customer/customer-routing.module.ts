import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component'

const routes: Routes = [
  {
    path: 'dashboard',
    component: CustomerDashboardComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
