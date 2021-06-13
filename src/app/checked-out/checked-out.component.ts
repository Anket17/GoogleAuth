import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {BankResponseService} from '../bank-response.service'

@Component({
  selector: 'app-checked-out',
  templateUrl: './checked-out.component.html',
  styleUrls: ['./checked-out.component.scss'],
})


export class CheckedOutComponent implements OnInit  {
  @ViewChild('element', { static: true }) public viewElement: ElementRef;
  public element: any;
  paymentGatewayHtml:string;
 
  data:string;
  constructor(private bankResponseService: BankResponseService) { }

ngOnInit(){
  this.bankResponseService.getData()
  .subscribe((data: string) => {
    this.paymentGatewayHtml = data
    this.appendHTMLSnippetToDOM()
    console.log(data)
  });
}
 // this.paymentGatewayHtml = this.data;
  


  appendHTMLSnippetToDOM() {
    this.element = this.viewElement.nativeElement;
    const fragment = document.createRange().createContextualFragment(this.paymentGatewayHtml);
    this.element.appendChild(fragment);
  }

}

