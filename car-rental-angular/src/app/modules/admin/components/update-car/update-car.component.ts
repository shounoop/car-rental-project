import { Component } from '@angular/core'
import { AdminService } from '../../services/admin.service'
import { ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrl: './update-car.component.scss'
})
export class UpdateCarComponent {
  constructor(
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  isSpinning: boolean = false
  carId: number = this.activatedRoute.snapshot.params['id']
  existingImage: string | null = null
  updateForm!: FormGroup // ! is used to tell TypeScript that this variable will be initialized later
  listOfOption: Array<{ label: string; value: string }> = []
  listOfBrands = ['Toyota', 'Honda', 'BMW', 'Mercedes', 'Audi', 'Lexus']
  listOfType = ['Sports Car', 'Diesel', 'Crossover', 'Luxury Car']
  listOfColor = ['Red', 'Blue', 'Brown', 'Green']
  listOfTransmission = ['Manual', 'Automatic']

  ngOnInit() {
    this.updateForm = this.fb.group({
      name: [null, Validators.required],
      brand: [null, Validators.required],
      type: [null, Validators.required],
      color: [null, Validators.required],
      transmission: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, Validators.required],
      year: [null, Validators.required]
    })

    this.getCarById()
  }

  getCarById() {
    this.isSpinning = true

    this.adminService.getCarById(this.carId).subscribe(res => {
      this.isSpinning = false

      const carDto = res
      this.existingImage = `data:image/jpeg;base64,${carDto.returnedImage}`
      this.updateForm.patchValue(carDto)
    })
  }
}
