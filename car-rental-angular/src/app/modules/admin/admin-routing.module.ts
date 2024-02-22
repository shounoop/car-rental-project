import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component'

const routes: Routes = [
  {
    path: 'dashboard',
    component: AdminDashboardComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
