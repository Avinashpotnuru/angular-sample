import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';

  city:string=""
  count:number=0
  toggle:boolean=true

  cName:string="text from app"

  data1=[1,2,3,4,5,6]
  data2=[5,4,4,5,6,7,89,4]

  add(){
    this.count+=1

  }

  minus(){
    this.count-=1
  }

  @ViewChild(ChildComponent) child!: ChildComponent;

  @ViewChild("heading") head:any

  changeColor(){
   console.log(this.head.nativeElement)
   this.head.nativeElement.style.background="red"

    
  }

  test(){
    console.log(this.child.displayName());
  }
}
