import { Component, OnInit } from '@angular/core';
import { AxiosService } from '../../services/axios.services';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  datos:any ={};

  constructor(private servicio: AxiosService) { }

  ngOnInit(): void {
    this.servicio.getPersonas().then(
      (resp)=>{
        this.datos = resp;
      }
    )
  }

}
