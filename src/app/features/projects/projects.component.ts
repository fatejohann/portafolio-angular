import { Component, signal, computed } from '@angular/core';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';

export interface Project {
  mockupType: 'restaurant' | 'boutique' | 'derma';
  mockupUrl: string;
  tags: { label: string; accent?: boolean }[];
  techFilters: string[];
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

export interface InventarioProject {
  tags: { label: string; accent?: boolean }[];
  name: string;
  desc: string;
  note: string;
  status: string;
  frontend: string[];
  backend: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  // Filtro reactivo
  readonly filterOptions = ['Todos', 'HTML/CSS', 'JavaScript', 'Angular', 'Node.js'];
  readonly activeFilter = signal<string>('Todos');

  setFilter(f: string): void {
    this.activeFilter.set(f);
  }

  // Datos
  readonly allProjects: Project[] = [
    {
      mockupType: 'restaurant',
      mockupUrl: 'elsabornuestro.com',
      tags: [{ label: 'Restaurante', accent: true }, { label: 'HTML/CSS' }, { label: 'JavaScript' }],
      techFilters: ['HTML/CSS', 'JavaScript'],
      name: 'El Sabor Nuestro',
      desc: 'Landing page con menu interactivo, galeria de platos y sistema de reservas por WhatsApp para restaurante salvadoreno.',
      note: '\u2605 Proyecto de demostracion',
    },
    {
      mockupType: 'derma',
      mockupUrl: 'democlinicaderma.netlify.app',
      tags: [{ label: 'Clinica', accent: true }, { label: 'HTML/CSS' }, { label: 'JavaScript' }, { label: 'Netlify' }],
      techFilters: ['HTML/CSS', 'JavaScript'],
      name: 'DermaSkin Clinica',
      desc: 'Landing page para clinica dermatologica en San Salvador. Diseno medico-premium con paleta terracota, servicios, testimonios y formulario de citas. Desplegado en Netlify.',
      note: 'Ver en vivo \u2192 democlinicaderma.netlify.app',
    },
    {
      mockupType: 'boutique',
      mockupUrl: 'boutiquelumina.com',
      tags: [{ label: 'E-commerce', accent: true }, { label: 'HTML/CSS' }, { label: 'JavaScript' }],
      techFilters: ['HTML/CSS', 'JavaScript'],
      name: 'Boutique Lumina',
      desc: 'Tienda online para boutique de moda con catalogo de productos, carrito de compras y pasarela de pago integrada.',
      note: '\u2605 Proyecto de demostracion',
    },
  ];

  readonly visibleProjects = computed(() => {
    const f = this.activeFilter();
    if (f === 'Todos') return this.allProjects;
    return this.allProjects.filter(p => p.techFilters.includes(f));
  });

  readonly showPro = computed(() => {
    const f = this.activeFilter();
    return f === 'Todos' || f === 'Angular';
  });

  readonly showInventario = computed(() => {
    const f = this.activeFilter();
    return f === 'Todos' || f === 'Angular' || f === 'Node.js';
  });

  readonly inventarioProject: InventarioProject = {
    tags: [
      { label: 'App Full-Stack', accent: true },
      { label: 'Angular 20' },
      { label: 'Node.js' },
      { label: 'PostgreSQL' },
      { label: 'Docker' },
      { label: 'PWA' },
    ],
    name: 'Sistema de Inventario',
    desc: 'Aplicacion PWA offline-first para gestion de inventario de una tienda de jugos y batidos. Incluye autenticacion con PIN (SHA-256), sincronizacion offline con IndexedDB/Dexie, control de stock en tiempo real, historial de transacciones y panel administrativo con roles (RBAC).',
    note: 'Repositorio privado \u00b7 PWA offline-first \u00b7 Sin demo publico aun',
    status: '\u23f3 Deploy en progreso',
    frontend: ['Angular 20', 'Signals', 'Angular Material', 'Dexie / IndexedDB', 'PWA'],
    backend: ['Node.js', 'Express 5', 'PostgreSQL 16', 'JWT', 'Docker'],
  };

  readonly proProject: ProProject = {
    tags: [
      { label: 'Proyecto profesional', accent: true },
      { label: 'Angular' },
      { label: 'JavaScript' },
      { label: 'HTML/CSS' },
    ],
    name: 'Generador de Diagramas',
    desc: 'Herramienta web para construir diagramas de grafos y arboles de decision de manera visual e interactiva. La estructura generada se exporta como JSON estructurado para alimentar motores de chatbot y flujos de conversacion automatizados. Desarrollado en Angular para el cliente y en HTML/CSS/JS vanilla como version alternativa.',
    note: 'Proyecto bajo acuerdo de confidencialidad \u00b7 Sin demo publico disponible',
    builtWith: ['Angular', 'TypeScript', 'JavaScript', 'HTML/CSS'],
    context: ['Practicas profesionales'],
  };
}
