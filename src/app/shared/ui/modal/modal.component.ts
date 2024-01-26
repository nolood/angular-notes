import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgIf],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() showModal = false;
  @Output() closeModal = new EventEmitter<void>();

  handleClose() {
    this.closeModal.emit();
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.handleClose();
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}
