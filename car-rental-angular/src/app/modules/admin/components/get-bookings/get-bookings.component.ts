import { Component } from '@angular/core'
import { AdminService } from '../../services/admin.service'

@Component({
  selector: 'app-get-bookings',
  templateUrl: './get-bookings.component.html',
  styleUrl: './get-bookings.component.scss'
})
export class GetBookingsComponent {
  constructor(private adminService: AdminService) {}

  bookings: any[] = []
  isSpinning = false

  ngOnInit() {
    this.getBookings()
  }

  changeBookingStatus(bookingId: number, status: string) {}

  private getBookings() {
    this.isSpinning = true

    this.adminService.getCarBookings().subscribe(bookings => {
      this.bookings = bookings

      this.isSpinning = false
    })
  }
}
