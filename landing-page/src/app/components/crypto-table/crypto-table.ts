import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../services/crypto.service/crypto.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-crypto-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './crypto-table.html',
  styleUrl: './crypto-table.scss'
})
export class CryptoTable implements OnInit {
  cryptos: any[] = [];
  loading: boolean = true;
  error: string | null = null;

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    this.cryptoService.getCryptos().subscribe({
      next: (data) => {
        this.cryptos = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al cargar los datos';
        this.loading = false;
        console.error(err);
      }
    });
  }

  // CORREGIDO: Cambiado a formatPercentage
  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  }

  // CORREGIDO: Cambiado a formatPercentage
  formatPercentage(value: number): string {
    return value.toFixed(2);
  }

  formatMarketCap(value: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  }
}
