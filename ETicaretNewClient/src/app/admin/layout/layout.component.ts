import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { ComponentsModule } from './components/components.module';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
    selector: 'app-layout',
    standalone: true,
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss',
    imports: [HeaderComponent,FooterComponent,SidebarComponent, RouterOutlet,
    MatSidenavModule]
})
export class LayoutComponent {

}
