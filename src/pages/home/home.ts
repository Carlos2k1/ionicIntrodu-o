import { Component } from '@angular/core';
import { NavController, IonicPage, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

@IonicPage()

export class HomePage {

  nomes : any[] = [
    {'nome' : 'Eduardo'},
    {'nome' : 'Maria'},
    {'nome' : 'João'},
    {'nome' : 'Carlos'},
    {'nome' : 'Ricardo'},
  ];


  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController) {

  }

  olaMundo(){
    console.log('Olá Mundo Mobile');
    this.showAlert();
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Hello World!',
      subTitle: 'Mama!',
      buttons: ['OK']
    });
    alert.present();
  }

  irParaTeste(){
    // this.navCtrl.push('TesteIonicPage')
    this.navCtrl.setRoot('TesteIonicPage');
  }

}
