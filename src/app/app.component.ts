import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sample';

  city:string=""
  count:number=0
  toggle:boolean=true

  add(){
    this.count+=1

  }

  minus(){
    this.count-=1
  }
}
