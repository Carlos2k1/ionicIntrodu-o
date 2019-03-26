import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormGroup, Form, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the FormContatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form-contato',
  templateUrl: 'form-contato.html',
})
export class FormContatoPage {

 
  //1. declarar e importa
  formGroup : FormGroup;
  //2. Inserir o formBuilder no construtor

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder : FormBuilder, public alertCtrl : AlertController) {
    
    this.formGroup = this.formBuilder.group({
      nome : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      email : ['', [Validators.required, Validators.email]],
      assunto : ['suporte', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]] ,
      mensagem : ['', [Validators.required]]
});

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormContatoPage');
  }

  enviarMensagem(){
    console.log('Mensagem Enviada!');
    this.showAlert();
    this.navCtrl.setRoot('HomePage')
  };
   showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Mama',
      subTitle: 'Cadastrado com sucesso',
      buttons: ['OK']
    });
    alert.present();
  }

}
