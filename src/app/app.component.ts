import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabsComponent } from './shared/ui/tabs/tabs.component';
import { NotesListComponent } from './modules/note/widgets/notes-list/notes-list.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabsComponent, NotesListComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-notes';

  tabs: string[] = ['Заметки', 'Напоминания', 'Тэги'];

  activeTab: number = 0;

  setActiveTab(index: number) {
    this.activeTab = index;
  }
}
