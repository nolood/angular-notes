import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsComponent } from './widgets/tags/tags.component';
import { TagsListComponent } from './widgets/tags-list/tags-list.component';
import { TagsFormComponent } from './widgets/tags-form/tags-form.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { FormsModule } from '@angular/forms';
import { TextFieldComponent } from '../../shared/ui/text-field/text-field.component';
import { TagsService } from './services/tags.service';
import { ModalComponent } from '../../shared/ui/modal/modal.component';

@NgModule({
  declarations: [TagsComponent, TagsListComponent, TagsFormComponent],
  imports: [
    CommonModule,
    ButtonComponent,
    FormsModule,
    TextFieldComponent,
    ModalComponent,
  ],
  exports: [TagsComponent],
  providers: [TagsService],
})
export class TagModule {}
