import { Component, signal } from '@angular/core';
import { Mainoptions, NavOption } from './mainoptions/mainoptions';
import { Pacients } from './pacients/pacients';

@Component({
  selector: 'app-root',
  imports: [Mainoptions, Pacients],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly selectedOption = signal<NavOption>('Pacientes');

  protected selectOption(option: NavOption): void {
    this.selectedOption.set(option);
  }
}
