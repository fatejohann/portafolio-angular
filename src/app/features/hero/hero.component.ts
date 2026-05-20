import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { ScrollRevealDirective } from '../../core/directives/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  readonly waLink = 'https://wa.me/50361673417?text=Hola%20Johan%2C%20vi%20tu%20portafolio%20y%20me%20interesa%20hablar%20sobre%20mi%20proyecto.%20%C2%BFTienes%20disponibilidad%3F';

  readonly stackTags = [
    'HTML5', 'CSS3', 'JavaScript', 'Angular', 'TypeScript', 'GitHub', 'Netlify', 'SEO', 'Google Analytics'
  ];

  readonly stats = [
    { label: 'Entrega garantizada', value: '5–14', sub: 'días hábiles promedio' },
    { label: 'Compatibilidad',      value: '100%', sub: 'responsive en todos los dispositivos' },
    { label: 'Posicionamiento',     value: 'SEO',  sub: 'incluido en todos los paquetes' },
  ];

  // Typewriter
  private readonly fullLines = ['Webs', 'que', 'venden.'];
  typedLines = signal<string[]>([]);
  private sub?: Subscription;

  ngOnInit(): void {
    this.startTypewriter();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  private startTypewriter(): void {
    // Construimos las líneas completas una letra a la vez
    const allChars: { lineIdx: number; char: string }[] = [];

    this.fullLines.forEach((line, lineIdx) => {
      line.split('').forEach(char => allChars.push({ lineIdx, char }));
      // Pausa entre líneas — añadimos "ticks vacíos"
      for (let i = 0; i < 6; i++) allChars.push({ lineIdx, char: '' });
    });

    // Estado mutable de construcción
    const built: string[] = ['', '', ''];
    let idx = 0;

    this.sub = interval(60).subscribe(() => {
      if (idx >= allChars.length) {
        this.sub?.unsubscribe();
        return;
      }
      const { lineIdx, char } = allChars[idx];
      built[lineIdx] = built[lineIdx] + char;
      this.typedLines.set([...built]);
      idx++;
    });
  }

}
