import { Component } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { CustomerService } from '../../services/customer.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { StorageService } from '../../../../auth/components/services/storage/storage.service'
import { NzMessageService } from 'ng-zorro-antd/message'

const DATE_FORMAT = 'MM-DD-YYYY'

@Component({
  selector: 'app-book-car',
  templateUrl: './book-car.component.html',
  styleUrl: './book-car.component.scss'
})
export class BookCarComponent {
  constructor(
    private service: CustomerService,
    private activeRoute: ActivatedRoute,
    private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router
  ) {}

  carId: number = this.activeRoute.snapshot.params['id']
  car: any
  validateForm!: FormGroup
  isSpinning: boolean = false

  ngOnInit() {
    this.validateForm = this.fb.group({
      toDate: [null, Validators.required],
      fromDate: [null, Validators.required]
    })

    this.getCarById()
  }

  bookACar(data: any) {
    this.isSpinning = true

    let bookACarDto = {
      fromDate: Date.now(),
      toDate: Date.now() + 1000 * 60 * 60 * 24 * 7,
      userId: StorageService.getUserId(),
      carId: this.carId
    }

    this.service.bookACar(bookACarDto).subscribe(
      res => {
        this.isSpinning = false

        this.message.success('Car booked successfully')
        this.router.navigateByUrl('/customer/dashboard')
      },

      error => {
        this.isSpinning = false
        this.message.error('Error occurred while booking the car')
      }
    )
  }

  private getCarById() {
    this.service.getCarById(this.carId).subscribe(res => {
      this.car = res
      this.car.processedImage = `data:image/jpeg;base64,${res.returnedImage}`
    })
  }
}
