import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../../models/model.module";
import { PartialsModule } from '../partials/partials.module';
import { SignInComponent } from "./signin.component";
import { SignUpComponent } from "./signup.component";
import { ModifyProfileComponent } from "./modify-profile.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, PartialsModule],
    declarations: [SignUpComponent, SignInComponent ],
    exports : [SignUpComponent, SignInComponent, ModifyProfileComponent ]
})

export class AuthModule {}