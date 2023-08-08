import { Component } from '@angular/core';
import axios from 'axios';

@Component({
    selector: 'button-component',
    templateUrl: './button.component.html'
  //  template: `
  //  <button  type="button" class="btn btn-dark btn-lg view-all-btn" (click)="getProducts()">View All</button>
  //`
})
export class ButtonComponent {
    getProducts() {
        axios
            .get('https://webstoreb.onrender.com/products/list')
            .then((response) => {
                console.log('Products:', response.data);

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}