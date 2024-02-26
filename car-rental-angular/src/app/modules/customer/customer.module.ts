import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CustomerRoutingModule } from './customer-routing.module'
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component'
import { NgZorroImportsModule } from '../../NgZorroImportsModule'

@NgModule({
  declarations: [CustomerDashboardComponent],
  imports: [CommonModule, CustomerRoutingModule, NgZorroImportsModule]
})
export class CustomerModule {}
