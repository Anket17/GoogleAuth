import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BankResponseService {
  bankResponseUrl: string = "/assets/data/BankResponse.html";
  headers:any;
  constructor(private httpClient : HttpClient) { }

  getData() {

    return this.httpClient.get(this.bankResponseUrl,  { responseType:'text'});
   }
}
