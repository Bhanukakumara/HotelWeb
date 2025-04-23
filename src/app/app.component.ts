import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DemoNgZorroAntdModule } from './DemoNgZorro';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    DemoNgZorroAntdModule,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HotelWeb';
}
