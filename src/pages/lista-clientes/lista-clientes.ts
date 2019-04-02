import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../services/cliente.service';


@IonicPage()
@Component({
  selector: 'page-lista-clientes',
  templateUrl: 'lista-clientes.html',
})
export class ListaClientesPage {

  clientes: Cliente[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public ClienteServ: ClienteService) {
  }

  ionViewDidLoad() {
    this.ClienteServ.listaDeCliente().subscribe(response => {
      this.clientes = response;
      console.log(this.clientes);
    }, error => {
      console.log('Deu Pau no Excel')
    })
  }
}

