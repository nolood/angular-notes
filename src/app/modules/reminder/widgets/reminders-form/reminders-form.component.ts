import { Component } from '@angular/core';
import { RemindersService } from '../../services/reminders.service';
import { NotesService } from '../../../note/services/notes.service';

@Component({
  selector: 'app-reminders-form',
  templateUrl: './reminders-form.component.html',
  styleUrl: './reminders-form.component.scss',
})
export class RemindersFormComponent {
  constructor(
    private remindersService: RemindersService,
    private notesService: NotesService,
  ) {}

  noteId: number | null = null;

  dateTime: string | null = null;

  setNoteId(id: number): void {
    this.noteId = id;
  }

  setDateTime(event: Event): void {
    this.dateTime = (event.target as HTMLInputElement).value;
  }

  addReminder(event: Event): void {
    event.preventDefault();

    if (!this.noteId || !this.dateTime) return;

    this.remindersService.addReminder({
      id: Date.now(),
      note: this.noteId,
      datetime: this.dateTime,
    });
  }

  get notes() {
    return this.notesService.getNotes().map((item) => ({
      label: item.title,
      value: item.id,
    }));
  }
}
