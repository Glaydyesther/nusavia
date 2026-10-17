import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type PatientStatus = 'En seguimiento' | 'Activo';
type StatusFilter = 'Todos los estados' | PatientStatus;

interface Patient {
  id: number;
  name: string;
  lastVisit: string;
  objective: string;
  status: PatientStatus;
  nextVisit: string;
  avatar: string;
}

@Component({
  selector: 'app-pacients',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pacients.html',
  styleUrl: './pacients.css'
})
export class Pacients {
  protected readonly patients = signal<Patient[]>([
    {
      id: 1,
      name: 'María López',
      lastVisit: '12 oct 2026',
      objective: 'Pérdida de peso',
      status: 'En seguimiento',
      nextVisit: '20 oct, 2026',
      avatar: 'https://i.pravatar.cc/96?img=47'
    },
    {
      id: 2,
      name: 'Carlos Ramírez',
      lastVisit: '10 oct 2026',
      objective: 'Control glucémico',
      status: 'Activo',
      nextVisit: '22 oct, 2026',
      avatar: 'https://i.pravatar.cc/96?img=12'
    },
    {
      id: 3,
      name: 'Sofía Torres',
      lastVisit: '08 oct 2026',
      objective: 'Hábitos saludables',
      status: 'En seguimiento',
      nextVisit: '23 oct, 2026',
      avatar: 'https://i.pravatar.cc/96?img=47'
    },
    {
      id: 4,
      name: 'Jorge Mendoza',
      lastVisit: '05 oct 2026',
      objective: 'Nutrición deportiva',
      status: 'Activo',
      nextVisit: '26 oct, 2026',
      avatar: 'https://i.pravatar.cc/96?img=12'
    }
  ]);

  protected readonly searchTerm = signal('');
  protected readonly selectedStatus = signal<StatusFilter>('Todos los estados');
  protected readonly visiblePatients = computed(() => {
    const term = this.searchTerm().trim().toLocaleLowerCase('es');
    const status = this.selectedStatus();

    return this.patients().filter((patient) => {
      const matchesName = patient.name.toLocaleLowerCase('es').includes(term);
      const matchesStatus = status === 'Todos los estados' || patient.status === status;
      return matchesName && matchesStatus;
    });
  });
  protected readonly showAddForm = signal(false);
  protected readonly patientMenu = signal<number | null>(null);
  protected readonly selectedPatient = signal<Patient | null>(null);

  protected draftName = '';
  protected draftObjective = '';

  protected addPatient(): void {
    const name = this.draftName.trim();
    const objective = this.draftObjective.trim();

    if (!name || !objective) {
      return;
    }

    const id = Math.max(0, ...this.patients().map((patient) => patient.id)) + 1;
    this.patients.update((patients) => [
      ...patients,
      {
        id,
        name,
        lastVisit: 'Sin consulta',
        objective,
        status: 'Activo',
        nextVisit: 'Por agendar',
        avatar: `https://i.pravatar.cc/96?img=${(id % 70) + 1}`
      }
    ]);

    this.draftName = '';
    this.draftObjective = '';
    this.showAddForm.set(false);
    this.searchTerm.set(name);
  }

  protected closeAddForm(): void {
    this.showAddForm.set(false);
    this.draftName = '';
    this.draftObjective = '';
  }

  protected viewPatient(patient: Patient): void {
    this.selectedPatient.set(patient);
    this.patientMenu.set(null);
  }
}
