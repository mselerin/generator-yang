import {NgModule} from '@angular/core';

import {SharedModule} from 'app/shared/shared.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LayoutComponent} from './layout.component';
/* yang-add-component-import - Yang will add components imports here */

@NgModule({
   declarations: [
      /* yang-add-component-declaration - Yang will add components declarations here */
      LayoutComponent,
      HeaderComponent,
      FooterComponent
   ],
   imports: [SharedModule],
   exports: [LayoutComponent]
})
export class LayoutModule {}
