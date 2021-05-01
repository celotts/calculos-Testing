import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = '';
  num1= 0;
  num2 = 0;
  @ViewChild('result') result: any

  ngOnInit(){
    this.title=  'Calculos';
  }

  public suma(num1:any, num2: any): number{
    return Number(num1) +  Number(num2);
  }

  public printeAdd(num1:any, num2:any): any{
    this.result.nativeElement.value = this.suma(num1, num2)
  }

}
