import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BaseDialog } from '../base/base-dialog';
import { MatButtonModule } from '@angular/material/button';
import { FileUploadComponent } from '../../services/common/file-upload/file-upload.component';

@Component({
  selector: 'app-file-upload-dialog',
  standalone: true,
  imports: [MatDialogModule,MatButtonModule,FileUploadComponent],
  templateUrl: './file-upload-dialog.component.html',
  styleUrl: './file-upload-dialog.component.scss'
})
export class FileUploadDialogComponent extends BaseDialog<FileUploadDialogComponent>{
  constructor(dialogref:MatDialogRef<FileUploadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FileUploadDialogState){
    
    super(dialogref);
  }
  
}

export enum FileUploadDialogState{
  Yes,No
}