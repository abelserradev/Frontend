import { Component } from '@angular/core';
import { CryptoTable } from '../../components/crypto-table/crypto-table';
import { PaymentMethods } from "../../payment-methods/payment-methods";

@Component({
  selector: 'app-main',
  standalone:true,
  imports: [CryptoTable, PaymentMethods],
  templateUrl: './main.html',
  styleUrl: './main.scss'
})
export class Main {

}
