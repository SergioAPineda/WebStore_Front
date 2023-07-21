import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { ButtonComponent } from './button.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        ButtonComponent
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        ButtonComponent
    ]
})

export class PartialsModule {

}