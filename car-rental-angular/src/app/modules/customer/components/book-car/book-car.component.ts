import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { CustomerService } from '../../services/customer.service'

@Component({
  selector: 'app-book-car',
  templateUrl: './book-car.component.html',
  styleUrl: './book-car.component.scss'
})
export class BookCarComponent {
  constructor(
    private service: CustomerService,
    private activeRoute: ActivatedRoute
  ) {}

  carId: number = this.activeRoute.snapshot.params['id']
  car: any

  ngOnInit() {
    this.getCarById()
  }

  private getCarById() {
    this.service.getCarById(this.carId).subscribe(res => {
      this.car = res
      this.car.processedImage = `data:image/jpeg;base64,${res.returnedImage}`
    })
  }
}
