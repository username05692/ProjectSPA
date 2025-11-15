import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  // 🟢 Інтерполяція: Створюємо властивість класу
  pageTitle: string = "Сучасна музика";
}
