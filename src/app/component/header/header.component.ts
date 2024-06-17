import { Component } from '@angular/core';
import { OnepageComponent } from '../onepage/onepage.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [OnepageComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  nom = 'Steeve';
}
