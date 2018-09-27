import { Component, OnInit } from '@angular/core';

@Component({
// Será um componente de página, não será inserido por outro então não precisa de selector
//  selector: 'ap-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
