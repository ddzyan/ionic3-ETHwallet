import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  WalletsEth: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.WalletsEth = [{
      name: "ddz",
    }];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goToWalletDetails(wallet: any): void {
    console.log(wallet.name);
  }
}
