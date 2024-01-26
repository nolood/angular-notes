import { Injectable, OnInit } from '@angular/core';
import { Note } from '../note.model';
import { StorageService } from '../../../shared/services/storage.service';

@Injectable()
export class NotesService {
  private notes: Note[] = [];

  constructor(private storageService: StorageService) {
    this.notes = this.storageService.getItem<Note[]>('notes') || [];
  }

  getNotes(): Note[] {
    return this.notes;
  }

  addNote(newNote: Note): void {
    this.notes.push(newNote);
    this.storageService.setItem('notes', this.notes);
  }

  deleteNote(id: number): void {
    this.notes = this.notes.filter((note) => note.id !== id);
    this.storageService.setItem('notes', this.notes);
  }

  updateNote(updatedNote: Note): void {
    const index = this.notes.findIndex((note) => note.id === updatedNote.id);
    if (index !== -1) {
      this.notes[index] = updatedNote;
      this.storageService.setItem('notes', this.notes);
    }
  }
}
