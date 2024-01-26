import { Component } from '@angular/core';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-notes-form',
  templateUrl: './notes-form.component.html',
  styleUrl: './notes-form.component.scss',
})
export class NotesFormComponent {
  constructor(private notesService: NotesService) {}

  title: string = '';
  description: string = '';

  setTitle(value: string): void {
    this.title = value;
  }

  setDescription(value: string): void {
    this.description = value;
  }

  addNote(event: Event): void {
    event.preventDefault();

    if (!this.title || !this.description) return;

    this.notesService.addNote({
      id: Date.now(), // crypto.randomUUID()
      title: this.title,
      description: this.description,
    });
  }
}
