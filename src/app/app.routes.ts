import { Routes } from '@angular/router';
import { TwopageComponent } from './component/twopage/twopage.component';
import { ThreepageComponent } from './component/threepage/threepage.component';
export const routes: Routes = [
    {
        path : "page/two",
        component : TwopageComponent
    },
    {
        path : "page/three",
        component : ThreepageComponent
    }
];
