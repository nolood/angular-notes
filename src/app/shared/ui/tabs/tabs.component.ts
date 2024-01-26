import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, NgForOf } from '@angular/common';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [NgForOf, NgClass],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent {
  @Input() tabs: string[] = [];
  @Input() activeIndex: number = 0;
  @Output() onIndexChange: EventEmitter<number> = new EventEmitter<number>();

  setActiveTab(index: number) {
    this.onIndexChange.emit(index);
  }
}
