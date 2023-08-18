import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AboutComponent } from './about.component';
import { PartialsModule } from '../partials/partials.module';

@NgModule({
    imports: [BrowserModule, FormsModule, PartialsModule],
    declarations: [
        AboutComponent
    ],
    exports: [AboutComponent]
})

export class AboutModule{

}