import { Component, input, output } from '@angular/core';

export type NavOption = 'Panel' | 'Pacientes' | 'Agenda' | 'Seguimiento' | 'Configuración';

@Component({
  selector: 'app-mainoptions',
  standalone: true,
  templateUrl: './mainoptions.html',
  styleUrl: './mainoptions.css'
})
export class Mainoptions {
  protected readonly options: NavOption[] = [
    'Panel',
    'Pacientes',
    'Agenda',
    'Seguimiento',
    'Configuración'
  ];

  readonly activeOption = input<NavOption>('Pacientes');
  readonly optionSelected = output<NavOption>();
}
