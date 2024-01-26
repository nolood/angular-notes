import { Injectable } from '@angular/core';
import { Tag } from '../tag.model';
import { StorageService } from '../../../shared/services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  constructor(private storageService: StorageService) {
    this.tags = this.storageService.getItem<Tag[]>('tags') || [];
  }

  tags: Tag[] = [];

  addTag(tag: Tag) {
    this.tags.push(tag);
    this.storageService.setItem('tags', this.tags);
  }

  deleteTag(id: number): void {
    this.tags = this.tags.filter((tag) => tag.id !== id);
    this.storageService.setItem('tags', this.tags);
  }

  getTags(): Tag[] {
    return this.tags;
  }
}
