import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() listeOfTechno! : { nom: string, language: string }; 
  @Input() deleteItem!: (nom: string, language: string) => void;
}