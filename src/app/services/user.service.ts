import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()

export class UserService {
  user:string;

  constructor() {
    this.user = "";
  }

  

}
