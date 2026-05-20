import { Component, signal, computed } from '@angular/core';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';

export interface Project {
  mockupType: 'restaurant' | 'dental' | 'boutique';
  mockupUrl: string;
  tags: { label: string; accent?: boolean }[];
  techFilters: string[];   // tecnologías usadas para el filtro
  name: string;
  desc: string;
  note: string;
}

export interface ProProject {
  tags: { label: string; accent?: boolean }[];
  name: string;
  desc: string;
  note: string;
  builtWith: string[];
  context: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  // ── Filtro reactivo ──────────────────────────────
  readonly filterOptions = ['Todos', 'HTML/CSS', 'JavaScript', 'SEO', 'Angular'];
  readonly activeFilter = signal<string>('Todos');

  setFilter(f: string): void {
    this.activeFilter.set(f);
  }

  // ── Datos ────────────────────────────────────────
  readonly allProjects: Project[] = [
    {
      mockupType: 'restaurant',
      mockupUrl: 'elsabornuestro.com',
      tags: [{ label: 'Restaurante', accent: true }, { label: 'HTML/CSS' }, { label: 'JavaScript' }],
      techFilters: ['HTML/CSS', 'JavaScript'],
      name: 'El Sabor Nuestro',
      desc: 'Landing page con menú interactivo, galería de platos y sistema de reservas por WhatsApp para restaurante salvadoreño.',
      note: '★ Proyecto de demostración',
    },
    {
      mockupType: 'dental',
      mockupUrl: 'sonrisaperfecta.com.sv',
      tags: [{ label: 'Clínica', accent: true }, { label: 'HTML/CSS' }, { label: 'SEO' }],
      techFilters: ['HTML/CSS', 'SEO'],
      name: 'Sonrisa Perfecta',
      desc: 'Sitio empresarial para clínica dental con catálogo de servicios, formulario de citas y posicionamiento en búsquedas locales.',
      note: '★ Proyecto de demostración',
    },
    {
      mockupType: 'boutique',
      mockupUrl: 'boutiquelumina.com',
      tags: [{ label: 'E-commerce', accent: true }, { label: 'HTML/CSS' }, { label: 'JavaScript' }],
      techFilters: ['HTML/CSS', 'JavaScript'],
      name: 'Boutique Lumina',
      desc: 'Tienda online para boutique de moda con catálogo de productos, carrito de compras y pasarela de pago integrada.',
      note: '★ Proyecto de demostración',
    },
  ];

  // computed() recalcula automáticamente cuando activeFilter cambia
  readonly visibleProjects = computed(() => {
    const f = this.activeFilter();
    if (f === 'Todos') return this.allProjects;
    return this.allProjects.filter(p => p.techFilters.includes(f));
  });

  // El proyecto pro siempre se muestra, excepto cuando el filtro es exclusivo
  readonly showPro = computed(() => {
    const f = this.activeFilter();
    return f === 'Todos' || f === 'Angular';
  });

  readonly proProject: ProProject = {
    tags: [
      { label: 'Proyecto profesional', accent: true },
      { label: 'Angular' },
      { label: 'JavaScript' },
      { label: 'HTML/CSS' },
    ],
    name: 'Generador de Diagramas',
    desc: 'Herramienta web para construir diagramas de grafos y árboles de decisión de manera visual e interactiva. La estructura generada se exporta como JSON estructurado para alimentar motores de chatbot y flujos de conversación automatizados. Desarrollado en Angular para el cliente y en HTML/CSS/JS vanilla como versión alternativa.',
    note: 'Proyecto bajo acuerdo de confidencialidad · Sin demo público disponible',
    builtWith: ['Angular', 'TypeScript', 'JavaScript', 'HTML/CSS'],
    context: ['Prácticas profesionales'],
  };
}
