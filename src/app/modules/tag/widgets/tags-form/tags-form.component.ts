import { Component } from '@angular/core';
import { TagsService } from '../../services/tags.service';

@Component({
  selector: 'app-tags-form',
  templateUrl: './tags-form.component.html',
  styleUrl: './tags-form.component.scss',
})
export class TagsFormComponent {
  constructor(private tagsService: TagsService) {}

  title: string = '';

  setTitle(value: string) {
    this.title = value;
  }

  addTag() {
    if (!this.title) return;

    this.tagsService.addTag({
      id: Date.now(),
      title: this.title,
    });
  }
}
