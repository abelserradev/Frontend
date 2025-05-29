import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../services/crypto';


@Component({
  selector: 'app-crypto-prices',
  imports: [],
  templateUrl: './crypto-prices.html',
  styleUrl: './crypto-prices.css'
})
export class CryptoPricesComponent implements OnInit {
  coins: any[] = [];

  constructor(private cryptoService: CryptoService) {}

  ngOnInit() {
    this.cryptoService.getMarketData().subscribe(data => {
      this.coins = data;
    });
  }
}
