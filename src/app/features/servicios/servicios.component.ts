import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';

interface ServicePlan {
  tier: string;
  tierStyle: 'normal' | 'popular';
  name: string;
  price: string;
  note: string;
  features: string[];
  featured: boolean;
  waText: string;
}

interface ExtraService {
  label: string;
  name: string;
  price: string;
}

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './servicios.component.html',
})
export class ServiciosComponent {
  readonly waBase = 'https://wa.me/50361673417?text=';

  readonly plans: ServicePlan[] = [
    {
      tier: 'Landing page',
      tierStyle: 'normal',
      name: 'Básico',
      price: '$300',
      note: 'pago único · sin mensualidades',
      featured: false,
      waText: 'Hola%20Johan%2C%20me%20interesa%20el%20paquete%20Landing%20Page%20de%20%24300.%20%C2%BFPodemos%20hablar%3F',
      features: [
        'Diseño 100% a medida (no plantillas)',
        'Hasta 3 secciones',
        '100% responsive (móvil, tablet, desktop)',
        'Botón de WhatsApp integrado',
        'SEO básico + Open Graph',
        'Hosting gratuito con HTTPS (Netlify)',
        'Entrega en 5–7 días',
      ],
    },
    {
      tier: '★ Más popular',
      tierStyle: 'popular',
      name: 'Empresarial',
      price: '$550',
      note: '50% al iniciar · 50% al entregar · sin mensualidades',
      featured: true,
      waText: 'Hola%20Johan%2C%20me%20interesa%20el%20paquete%20Empresarial%20de%20%24550.%20%C2%BFPodemos%20hablar%3F',
      features: [
        'Todo lo del plan básico',
        'Hasta 11 páginas completas',
        'Galería con filtros y lightbox',
        'Google Analytics + Open Graph',
        'Redacción del contenido base',
        '2 rondas de revisión incluidas',
        'Soporte 30 días',
      ],
    },
    {
      tier: 'Tienda online',
      tierStyle: 'normal',
      name: 'E-commerce',
      price: '$950',
      note: '50% al iniciar · 50% al entregar · sin mensualidades',
      featured: false,
      waText: 'Hola%20Johan%2C%20me%20interesa%20el%20paquete%20E-commerce%20de%20%24950.%20%C2%BFPodemos%20hablar%3F',
      features: [
        'Todo lo del plan empresarial',
        'Catálogo de productos filtrable',
        'Carrito de compras (JS vanilla)',
        'Integración de pasarela de pago',
        'Panel de administración básico',
        'Entrega en 10–14 días',
        'Soporte 30 días',
      ],
    },
  ];

  readonly extras: ExtraService[] = [
    {
      label: 'Opcional · anual',
      name: 'Gestión de dominio',
      price: '$20–25 / año — transferencia, renovación y administración total del dominio',
    },
    {
      label: 'Opcional · mensual',
      name: 'Plan de mantenimiento',
      price: '$40 / mes — monitoreo, hasta 2 cambios de contenido, backup y soporte por WhatsApp',
    },
    {
      label: 'Opcional · por proyecto',
      name: 'Páginas adicionales',
      price: '¿Tu sitio necesita crecer? Agrego secciones o páginas nuevas a tu sitio existente.',
    },
  ];
}
