import {NgModule} from '@angular/core';

import {SharedModule} from 'app/shared/shared.module';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LayoutComponent} from './layout.component';

@NgModule({
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [SharedModule],
    exports: [LayoutComponent]
})
export class LayoutModule {}
