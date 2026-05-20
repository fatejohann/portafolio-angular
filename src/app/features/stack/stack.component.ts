import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';

interface StackColumn {
  label: string;
  tags: { label: string; highlight?: boolean }[];
}

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './stack.component.html',
})
export class StackComponent {
  readonly columns: StackColumn[] = [
    {
      label: 'Frontend',
      tags: [
        { label: 'Angular', highlight: true },
        { label: 'HTML5' },
        { label: 'CSS3' },
        { label: 'JavaScript' },
        { label: 'TypeScript' },
      ],
    },
    {
      label: 'Backend & Datos',
      tags: [
        { label: 'Firebase', highlight: true },
        { label: 'PostgreSQL', highlight: true },
        { label: 'MySQL' },
        { label: 'Node.js' },
      ],
    },
    {
      label: 'Infraestructura',
      tags: [
        { label: 'GitHub' },
        { label: 'Netlify' },
        { label: 'Cloudinary' },
        { label: 'Google Analytics' },
        { label: 'Namecheap' },
      ],
    },
  ];
}
