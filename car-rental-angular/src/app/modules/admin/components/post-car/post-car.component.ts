import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AdminService } from '../../services/admin.service'
import { NzMessageService } from 'ng-zorro-antd/message'
import { Router } from '@angular/router'

@Component({
  selector: 'app-post-car',
  templateUrl: './post-car.component.html',
  styleUrl: './post-car.component.scss'
})
export class PostCarComponent {
  postCarForm!: FormGroup
  isSpinning: boolean = false
  selectedFile: File | null = null
  imagePreview: string | ArrayBuffer | null = null
  listOfOption: Array<{ label: string; value: string }> = []
  listOfBrands = [
    'Toyota',
    'Honda',
    'BMW',
    'Mercedes',
    'Audi',
    'Lexus',
    'Nissan',
    'Ford',
    'Chevrolet',
    'Volkswagen'
  ]
  listOfType = [
    'Sedan',
    'SUV',
    'Truck',
    'Van',
    'Coupe',
    'Convertible',
    'Wagon',
    'Sports Car',
    'Diesel',
    'Crossover',
    'Luxury Car',
    'Hybrid',
    'Electric',
    'Hatchback',
    'Minivan',
    'Pickup'
  ]
  listOfColor = [
    'White',
    'Black',
    'Silver',
    'Gray',
    'Red',
    'Blue',
    'Brown',
    'Green',
    'Yellow',
    'Orange',
    'Purple',
    'Pink',
    'Beige'
  ]
  listOfTransmission = ['Manual', 'Automatic']

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private message: NzMessageService,
    private router: Router
  ) {}

  ngOnInit() {
    this.postCarForm = this.fb.group({
      name: [null, Validators.required],
      brand: [null, Validators.required],
      type: [null, Validators.required],
      color: [null, Validators.required],
      transmission: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, Validators.required],
      year: [null, Validators.required]
    })
  }

  postCar() {
    this.isSpinning = true

    console.log('postCarForm', this.postCarForm.value)

    const formData: FormData = new FormData()
    formData.append('image', this.selectedFile as Blob)
    formData.append('brand', this.postCarForm.value.brand)
    formData.append('name', this.postCarForm.value.name)
    formData.append('type', this.postCarForm.value.type)
    formData.append('color', this.postCarForm.value.color)
    formData.append('year', this.postCarForm.value.year)
    formData.append('transmission', this.postCarForm.value.transmission)
    formData.append('description', this.postCarForm.value.description)
    formData.append('price', this.postCarForm.value.price)

    // formData.append('brand', this.postCarForm.get('brand')?.value)
    // formData.append('name', this.postCarForm.get('name')?.value)
    // formData.append('type', this.postCarForm.get('type')?.value)
    // formData.append('color', this.postCarForm.get('color')?.value)
    // formData.append('year', this.postCarForm.get('year')?.value)
    // formData.append('transmission', this.postCarForm.get('transmission')?.value)
    // formData.append('description', this.postCarForm.get('description')?.value)
    // formData.append('price', this.postCarForm.get('price')?.value)
    console.log('formData', formData)

    this.adminService.postCar(formData).subscribe(
      res => {
        this.message.success('Car posted successfully', { nzDuration: 3000 })
        this.isSpinning = false
        this.router.navigateByUrl('/admin/dashboard')
        console.log(res)
      },
      error => {
        this.message.error('Error posting car', { nzDuration: 3000 })
        console.log(error)
      }
    )
  }

  onFileSelected($event: Event) {
    const target = $event.target as HTMLInputElement
    this.selectedFile = (target.files as FileList)[0]

    this.previewImage()
  }

  previewImage() {
    const reader = new FileReader()
    reader.onload = () => {
      this.imagePreview = reader.result
    }
    reader.readAsDataURL(this.selectedFile as Blob)
  }
}
