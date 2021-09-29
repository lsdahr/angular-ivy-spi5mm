import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface Response {
  time: { updated: string};
  bpi: {
    USD: {
      rate: string;
      rate_float: number;
    };
    BRL: {
      rate: string;
      rate_float: number;
    };
  };
}

@Injectable()
export class BitcoinService {
  currentResponse: Response;
  updateList: Array<Response> = [];
  notify: string;

  constructor(private http: HttpClient){}

  update(){
    this.http
    .get<Response>("https://api.coindesk.com/v1/bpi/currentprice/BRL.json")
    .subscribe(data => {
      if (!this.currentResponse) {
        this.updateList.push(data);
      } else if (
        data.bpi.USD.rate_float !== this.currentResponse.bpi.USD.rate_float
      ) {
        this.updateList.push(data);
        if (
          data.bpi.USD.rate_float < this.currentResponse.bpi.USD.rate_float
        ) {
          this.notify = "abaixou";  
      } else if (
        data.bpi.USD.rate_float > this.currentResponse.bpi.USD.rate_float
      ) {
        this.notify = "subiu";
      }
    }
    this.currentResponse = data;
    });
  }

  getNotify() {
    return this.notify;
  }
}