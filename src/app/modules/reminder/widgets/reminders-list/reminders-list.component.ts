import { Component } from '@angular/core';
import { Reminder } from '../../reminder.model';
import { RemindersService } from '../../services/reminders.service';

@Component({
  selector: 'app-reminders-list',
  templateUrl: './reminders-list.component.html',
  styleUrl: './reminders-list.component.scss',
})
export class RemindersListComponent {
  constructor(private remindersService: RemindersService) {}

  getReminders(): Reminder[] {
    return this.remindersService.getReminders();
  }
}
