import { Component } from '@angular/core'
import { AdminService } from '../../services/admin.service'

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {
  cars: any[] = []

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.getAllCars()
  }

  getAllCars() {
    this.adminService.getAllCars().subscribe(res => {
      res.forEach((car: any) => {
        car.processedImg = `data:image/jpeg;base64,${car.returnedImage}`
        this.cars.push(car)
      })
    })
  }
}
