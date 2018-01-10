import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <button (click)="myEvent($event)">Push me</button>
  `,
  styleUrls: ['./app.component.css']
})

  export class AppComponent {
    title = 'app';
    myEvent(event){
      console.log(event);
      console.log('Hello!');
      //HEROREAOfjeiojguorjweg
    }

}
