import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { ModelModule } from "src/app/models/model.module";
import { PartialsModule } from '../partials/partials.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './usersList.component';
import { AddEditUserComponent } from "./addEditUser.component";


@NgModule({
    imports: [ModelModule, PartialsModule, BrowserModule, FormsModule, RouterModule],
    declarations: [UsersListComponent, AddEditUserComponent ],
    exports: [UsersListComponent, AddEditUserComponent ]
})

export class UsersModule{}

export { UsersListComponent };
