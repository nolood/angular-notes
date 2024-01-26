import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsComponent } from './shared/ui/tabs/tabs.component';
import { NgIf } from '@angular/common';
import { NoteModule } from './modules/note/note.module';
import { TagModule } from './modules/tag/tag.module';
import { ReminderModule } from './modules/reminder/reminder.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TabsComponent,
    NgIf,
    NoteModule,
    TagModule,
    ReminderModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  tabs: string[] = ['Заметки', 'Напоминания', 'Тэги'];

  activeTab: number = 0;

  setActiveTab(index: number) {
    this.activeTab = index;
  }
}
