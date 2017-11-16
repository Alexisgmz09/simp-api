import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  router;
  constructor(private _router: ActivatedRoute) {
    this.router = _router;
    console.log(_router);
  }
}
