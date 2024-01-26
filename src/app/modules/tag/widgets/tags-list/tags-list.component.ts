import { Component } from '@angular/core';
import { TagsService } from '../../services/tags.service';
import { Tag } from '../../tag.model';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrl: './tags-list.component.scss',
})
export class TagsListComponent {
  constructor(private tagsService: TagsService) {}

  getTags(): Tag[] {
    return this.tagsService.getTags();
  }

  deleteTag(id: number): void {
    this.tagsService.deleteTag(id);
  }
}
