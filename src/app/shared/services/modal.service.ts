import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private showModalSubject = new BehaviorSubject<boolean>(false);
  showModal$ = this.showModalSubject.asObservable();

  showModal() {
    this.showModalSubject.next(true);
  }

  hideModal() {
    this.showModalSubject.next(false);
  }
}
