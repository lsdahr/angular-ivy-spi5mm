import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { WalletComponent } from './wallet/wallet.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { BitcoinService } from './bitcoin.service';
import { TimerService } from './timer.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot ([
    {path: '', component: HomeComponent},
    {path: 'bitcoin', component: BitcoinComponent},
    {path: 'wallet', component: WalletComponent}
  ]), HttpClientModule],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, BitcoinComponent, WalletComponent, HomeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BitcoinService, TimerService]
})
export class AppModule { }