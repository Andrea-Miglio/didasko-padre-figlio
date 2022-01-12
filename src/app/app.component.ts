import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  titolo:string="Contatore"
  locConta:number = 0;
  incrementaContatore(){
    this.locConta++;
  }
  resetContatore(){
    this.locConta = 0
  }

}
