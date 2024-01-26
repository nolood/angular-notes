import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemindersComponent } from './widgets/reminders/reminders.component';
import { RemindersListComponent } from './widgets/reminders-list/reminders-list.component';
import { RemindersFormComponent } from './widgets/reminders-form/reminders-form.component';
import { RemindersService } from './services/reminders.service';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { TextFieldComponent } from '../../shared/ui/text-field/text-field.component';
import { ModalComponent } from '../../shared/ui/modal/modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RemindersComponent,
    RemindersListComponent,
    RemindersFormComponent,
  ],
  providers: [RemindersService],
  imports: [
    CommonModule,
    ButtonComponent,
    TextFieldComponent,
    ModalComponent,
    FormsModule,
  ],
  exports: [RemindersComponent],
})
export class ReminderModule {}
