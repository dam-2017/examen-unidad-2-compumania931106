import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { info } from '../../utils/data';

import { ThirdPage } from '../third-page/third-page';

/**
 * Generated class for the SecondPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-second-page',
  templateUrl: 'second-page.html',
})
export class SecondPage {
    name:string;
    father:string;
    mother:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = info.name;
    this.father = info.father;
    this.mother = info.mother;
  }

  updateData(){
    this.navCtrl.push(ThirdPage);
  }



}
