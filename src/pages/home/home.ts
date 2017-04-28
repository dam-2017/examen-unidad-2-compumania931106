import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { SecondPage } from '../second-page/second-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myForm: FormGroup;

  data: any = {
    username : "vimaceballoscr",
    password : "12400253@ittepic"
  }

  login: any = {
    username : '',
    password : ''
  }


  constructor(public navCtrl: NavController, public fb: FormBuilder, public alertCtrl: AlertController) {
    this.myForm = this.fb.group({
      'username': ['', [Validators.required, Validators.pattern(/^[a-z]{6,}$/)]],
      'password': ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9|@#%&]{8,}$/)]] 
    });
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: 'Datos incorrectos, no tiene acceso',
      buttons: ['OK']
    });
    alert.present();
  }

  Signin(){
    console.log(JSON.stringify(this.login));
    if(this.login.username == this.data.username && this.login.password == this.data.password){
      console.log('Si tiene acceso');
      this.navCtrl.push(SecondPage);
    }else{
      this.showAlert();
    }
  }

}
