import { Component, OnInit} from '@angular/core';
import { BitcoinService } from '../bitcoin.service';

@Component ({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  bitcoin: number = 0;
  real : number = 0;
  usd: number = 0;
  qtdBitcoin: number;

  constructor(public BitcoinService: BitcoinService) { }

  ngOnInit(){
  }

  comprar(){
    if(this.qtdBitcoin > 0){
    this.bitcoin += this.qtdBitcoin;  
    this.real += this.qtdBitcoin * this.BitcoinService.currentResponse.bpi.BRL.rate_float;
    this.usd += this.qtdBitcoin * this.BitcoinService.currentResponse.bpi.USD.rate_float;
    }
  }

  vender(){
    if(this.qtdBitcoin > 0 && this.bitcoin > 0 && this.qtdBitcoin <= this.bitcoin){
      this.bitcoin += this.qtdBitcoin;  
      this.real += this.qtdBitcoin * this.BitcoinService.currentResponse.bpi.BRL.rate_float;
      this.usd += this.qtdBitcoin * this.BitcoinService.currentResponse.bpi.USD.rate_float;
    }
}

  getBitCoin(){
    return this.bitcoin;
  }

  getReal(){
    return this.real;
  }

  getUsd(){
    return this.usd;
  }

}