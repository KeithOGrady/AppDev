import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  rows: [{}];
  name : '';

  constructor(public navCtrl: NavController) {
    this.rows = [{name: "test", data: "data", paid: "yes"}];
  }

  updateName = () => {
    this.rows.push([{name: this.name}]);
    console.log(this.name);
    console.log(this.rows);
  }

}
