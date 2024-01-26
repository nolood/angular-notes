import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text-field',
  standalone: true,
  imports: [],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss',
})
export class TextFieldComponent {
  @Input() name?: string;
  @Input() label?: string;
  @Input() value?: string;
  @Output() onChange: EventEmitter<string> = new EventEmitter<string>();

  onInputChange(event: Event) {
    this.onChange.emit((event.target as HTMLInputElement).value);
  }
}
