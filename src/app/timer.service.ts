import { Injectable } from '@angular/core';
import { BitcoinService } from './bitcoin.service';

@Injectable()
export class TimerService {

  constructor(public BitcoinService: BitcoinService) { }

  private timer: any;
  private acounter: number = 0;
  private bcounter: number =0;

  start() {
    this.BitcoinService.update();
    if(!this.timer){
      this.timer = setInterval(() => { this.acounter++;
      if (this.acounter == 60) {
        this.BitcoinService.update();
        this.acounter = 0;
        this.bcounter++;
      }
    }, 1000);
    }
  }

  getaCount (){
    return this.acounter;
  }
  getbCount(){
    return this.bcounter;
  }

}