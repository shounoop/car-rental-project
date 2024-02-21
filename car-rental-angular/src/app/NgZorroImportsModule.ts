import { NgModule } from '@angular/core'

// NG ZORRO IMPORTS
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzLayoutModule } from 'ng-zorro-antd/layout'

@NgModule({
  exports: [
    NzSpinModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    NzLayoutModule
  ]
})
export class NgZorroImportsModule {}
