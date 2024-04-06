import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() data1?:number[]
  @Input() data2?:number[]
  name:string="avinash"

  displayName(){
    return "hello avinash"
  }

}
