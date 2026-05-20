import { Component } from '@angular/core';
import { NavbarComponent }   from './shared/navbar/navbar.component';
import { FooterComponent }   from './shared/footer/footer.component';
import { HeroComponent }     from './features/hero/hero.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { StackComponent }    from './features/stack/stack.component';
import { ProcesoComponent }  from './features/proceso/proceso.component';
import { ServiciosComponent } from './features/servicios/servicios.component';
import { ContactoComponent } from './features/contacto/contacto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    ProjectsComponent,
    StackComponent,
    ProcesoComponent,
    ServiciosComponent,
    ContactoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
