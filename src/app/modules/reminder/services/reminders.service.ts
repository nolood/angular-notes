import { Injectable } from '@angular/core';
import { Reminder } from '../reminder.model';
import { StorageService } from '../../../shared/services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class RemindersService {
  private readonly reminders: Reminder[] = [];

  constructor(private storageService: StorageService) {
    this.reminders = this.storageService.getItem<Reminder[]>('reminders') || [];
  }

  getReminders(): Reminder[] {
    return this.reminders;
  }

  addReminder(reminder: Reminder) {
    this.reminders.push(reminder);
    this.storageService.setItem('reminders', this.reminders);
  }
}
