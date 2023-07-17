import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  constructor() { }

  private showDialogSubject = new Subject<string>();

  showDialog(message: string): void {
    this.showDialogSubject.next(message);
  }

  get showDialog$(): Subject<string> {
    return this.showDialogSubject;
  }
  
}
