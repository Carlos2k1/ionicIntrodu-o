import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Noticias } from '../../model/noticias';
import { NoticiaService } from '../../services/noiticas.service';

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})
export class NoticiasPage {

  noticias: Noticias[] = [];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    public NoticiasServ: NoticiaService) {
  }

  ionViewDidLoad() {
    this.NoticiasServ.listaDeNoticia().subscribe(response => {
      this.noticias = response;
      console.log(this.noticias);
    }, error => {
      console.log('Deu Pau no Excel')
    })
  }

}
