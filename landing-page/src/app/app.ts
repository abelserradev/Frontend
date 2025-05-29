import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { Features } from './components/features/features';

@Component({
  selector: 'app-root',
  imports: [Header, CommonModule, Footer, Hero, Features],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'El-dorado';
}
