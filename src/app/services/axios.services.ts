import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({ providedIn: 'root' })
export class AxiosService {
  urlPersonasJson: string =
    'https://appmultitaskers-d4a65-default-rtdb.firebaseio.com/personas.json';
  urlperson: string =
    'https://appmultitaskers-d4a65-default-rtdb.firebaseio.com/personas';

  getPersonas() {
    return axios
      .get(this.urlPersonasJson)
      .then((response) => {
        console.log('response', response);
        return response.data;
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  constructor() {}
}
