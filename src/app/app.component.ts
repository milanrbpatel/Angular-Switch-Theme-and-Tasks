import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username:string="";
  allowButtonClick:boolean=false;
  onCreateUser(){
    this.username='';
    this.allowButtonClick=false;
  }
  onEnterUser(event:Event){
    this.username = (<HTMLInputElement>event.target).value;
    if(this.username!='')
    {
      this.allowButtonClick = true;
    }
  }
}
