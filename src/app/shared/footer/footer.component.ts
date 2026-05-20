import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="footer-logo">JL</div>
      <div class="footer-copy">© {{ year }} Johan López · Desarrollador de Software · El Salvador</div>
      <div class="footer-tag">Hecho con código limpio</div>
    </footer>
  `,
})
export class FooterComponent {
  year = new Date().getFullYear();
}
