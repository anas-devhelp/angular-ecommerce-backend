import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ConfirmationDialogService } from '../confirmation-dialog.service';



@Component({
  selector: 'app-confirm-alert',
  templateUrl: './confirm-alert.component.html',
  styleUrls: ['./confirm-alert.component.css']
})
export class ConfirmAlertComponent {
  
  @Input() message: string = '';
  @Input() deleteId: number = 0;

  @Output() confirm: EventEmitter<number> = new EventEmitter<number>();
  @Output() cancel: EventEmitter<number> = new EventEmitter<number>();

  // constructor(private confirmationDialogService: ConfirmationDialogService) {}

  handleConfirmAction(): void {
    console.log('handleConfirmAction:'+this.deleteId);
    this.confirm.emit(this.deleteId);
    this.deleteId = 0;
    
  }

  handleCancelAction(): void {
    console.log('handleCancelAction:'+this.deleteId);
    this.deleteId = 0;
    this.cancel.emit(this.deleteId);
    
  }

  

  closeConfirmationDialog(): void {
    console.log('closeConfirmationDialog:'+this.deleteId);
    this.deleteId = 0;
  }

}
