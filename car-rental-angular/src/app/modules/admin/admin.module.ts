import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AdminRoutingModule } from './admin-routing.module'
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component'
import { PostCarComponent } from './components/post-car/post-car.component'
import { NgZorroImportsModule } from '../../NgZorroImportsModule'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateCarComponent } from './components/update-car/update-car.component';
import { GetBookingsComponent } from './components/get-bookings/get-bookings.component';
import { SearchCarComponent } from './components/search-car/search-car.component'

@NgModule({
  declarations: [AdminDashboardComponent, PostCarComponent, UpdateCarComponent, GetBookingsComponent, SearchCarComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgZorroImportsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule {}
