import { Component } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { Note } from '../../note.model';
import { ModalService } from '../../../../shared/services/modal.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss',
})
export class NotesListComponent {
  isModalVisible = false;

  constructor(
    public notesService: NotesService,
    private modalService: ModalService,
  ) {
    this.modalService.showModal$.subscribe((showModal) => {
      this.isModalVisible = showModal;
    });
  }

  modalEvent?: 'delete' | 'edit';
  activeNote: Note | null = null;

  newNoteTitle: string = '';
  newNoteDescription: string = '';

  setNewNoteTitle(value: string): void {
    this.newNoteTitle = value;
  }

  setNewNoteDescription(value: string): void {
    this.newNoteDescription = value;
  }

  resetActiveNote(): void {
    this.activeNote = null;
  }

  openModal() {
    this.modalService.showModal();
  }

  closeModal() {
    this.modalService.hideModal();
  }

  getNotes(): Note[] {
    return this.notesService.getNotes();
  }

  deleteNote(id?: number): void {
    if (!id) return;

    this.closeModal();
    this.notesService.deleteNote(id);
    this.resetActiveNote();
  }

  editNote(): void {
    if (!this.activeNote?.id) return;

    this.notesService.updateNote({
      id: this.activeNote?.id,
      title: this.newNoteTitle,
      description: this.newNoteDescription,
    });

    this.closeModal();
  }

  editNoteModal(note: Note): void {
    this.modalEvent = 'edit';
    this.activeNote = note;
    this.newNoteDescription = note.description;
    this.newNoteTitle = note.title;
    this.openModal();
  }

  deleteNoteModal(note: Note): void {
    this.modalEvent = 'delete';
    this.activeNote = note;
    this.openModal();
  }
}
