import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';

interface Step {
  num: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-proceso',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './proceso.component.html',
})
export class ProcesoComponent {
  readonly steps: Step[] = [
    {
      num: '01',
      title: 'Escucho tu idea',
      desc: 'Conversamos por WhatsApp o videollamada. Me cuentas qué necesitas, a quién va dirigido y cuáles son tus metas de negocio.',
    },
    {
      num: '02',
      title: 'Diseño y propuesta',
      desc: 'En 1–2 días te envío una propuesta visual. Ajustamos colores, textos y estructura hasta que quede exactamente como lo imaginas.',
    },
    {
      num: '03',
      title: 'Desarrollo',
      desc: 'Construyo tu sitio con código limpio, rápido y optimizado para buscadores. Recibes actualizaciones de progreso en todo momento.',
    },
    {
      num: '04',
      title: 'Entrega y soporte',
      desc: 'Publicamos tu sitio y te entrego el acceso completo. Soporte incluido por 30 días para cualquier ajuste que necesites.',
    },
  ];
}
