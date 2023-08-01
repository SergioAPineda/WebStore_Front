import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { ButtonComponent } from './button.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

@NgModule({
    imports: [BrowserModule, RouterModule],
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