import { Component, OnInit } from '@angular/core';
import { AxiosService } from '../../services/axios.services';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private servicio: AxiosService) { }

  ngOnInit(): void {
    this.servicio.getPersonas()
  }

}
