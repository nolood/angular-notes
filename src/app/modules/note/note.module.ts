import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './widgets/notes/notes.component';
import { NotesListComponent } from './widgets/notes-list/notes-list.component';
import { NotesFormComponent } from './widgets/notes-form/notes-form.component';
import { TextFieldComponent } from '../../shared/ui/text-field/text-field.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { NotesService } from './services/notes.service';
import { ModalComponent } from '../../shared/ui/modal/modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NotesComponent, NotesListComponent, NotesFormComponent],
  imports: [
    CommonModule,
    TextFieldComponent,
    ButtonComponent,
    ModalComponent,
    FormsModule,
  ],
  exports: [NotesComponent],
  providers: [NotesService],
})
export class NoteModule {}
