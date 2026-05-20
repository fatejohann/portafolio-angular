import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './contacto.component.html',
})
export class ContactoComponent {
  readonly waLink = 'https://wa.me/50361673417?text=Hola%20Johan%2C%20vi%20tu%20portafolio%20y%20me%20interesa%20hablar%20sobre%20mi%20proyecto.%20%C2%BFTienes%20disponibilidad%3F';
  readonly email = 'lpzjohann05@gmail.com';
  readonly phone = '+503 6167-3417';
}
