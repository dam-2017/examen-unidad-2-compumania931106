import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { info } from '../../utils/data';

/**
 * Generated class for the ThirdPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-third-page',
  templateUrl: 'third-page.html',
})
export class ThirdPage {
   myForm: FormGroup;

   data: any = {
     name : info.name,
     father : info.father,
     mother : info.mother,
     date: '',
     rfc: ''
   }

  constructor(public navCtrl: NavController, public navParams: NavParams, public fb: FormBuilder) {
    this.myForm = this.fb.group({
      'name': ['', [Validators.required]],
      'father': ['', [Validators.required]],
      'mother': ['', [Validators.required]],
      'date': ['', [Validators.required, Validators.pattern(/^\d{4}\/\d{2}\/\d{2}?$/)]],
      'rfc': ['', []]  
    });
  }

  update(){
    var ap = this.data.father.substr(0, 2);
    var am = this.data.mother.substr(0, 1);
    var n = this.data.name.substr(0, 1);

    var aa = this.data.date.split("/");
    var year = aa[0].split("");
    var yy = year[2] + year[3];

    this.data.rfc = (ap + am + n + yy + aa[1] + aa[2]).toUpperCase();
    
  }



}
