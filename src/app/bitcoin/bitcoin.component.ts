import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';
import { TimerService } from '../timer.service';

@Component ({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {

  constructor(public BitcoinService: BitcoinService, public timer: TimerService) {
    this.timer.start();
  }

ngOnInit() {
  this.BitcoinService.update();
}

updateBitCoinRates() {
  this.BitcoinService.update();
}

notify (){
  let x=0;
  let y: number[] = [];
  for (let i of this.BitcoinService.updateList) {

  }
}

}