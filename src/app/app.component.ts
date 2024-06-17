import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './component/item/item.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
import axios from 'axios';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CommonModule,
    ItemComponent,
    FormsModule,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  parentData = 'Hello from parent';
  name = '';
  number = 0;
  AU = [];
  testAxios = null;
  show = true;
  listeOfTechnos = [
    {
      nom: 'Laravel',
      language: 'PHP',
    },
    {
      nom: 'Symphony',
      language: 'PHP',
    },
    {
      nom: 'Flutter',
      language: 'Dart',
    },
  ];

  testFunction() {
    this.number++;
    this.show = !this.show;
  }

  DeleteItem(nomFramework: string, language: string) {
    console.log('Delete this :', nomFramework, 'de', language);
  }

  ngOnInit(): void {
    this.name = 'Steeve';
    // axios
    //   .get(`http://localhost:3000/api/AU`)
    //   .then((response) => {
    //     this.AU = response.data;
    //     console.log(this.AU);
    //     this.testAxios = response.data.data[1].AU;
    //   })
    //   .catch((error) => {
    //     console.error('Erreur de GET AU : ', error);
    //   });
  }
}
