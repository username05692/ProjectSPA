import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Короткі імпорти
import { HeaderComponent } from '../header/header';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-layout',
  standalone: true,
  // Додаємо Header, Footer та RouterOutlet до імпортів
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './layout.html', // Шлях до HTML-шаблону
  styleUrl: './layout.css'
})
export class LayoutComponent {
  // Тут буде логіка, якщо вона потрібна
}
