import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CustomerService} from "../../customer.service";

@Component({
  selector: 'app-dialog-overview-example',
  templateUrl: './dialog-overview-example.component.html',

})
export class DialogOverviewExampleComponent implements OnInit {



  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleComponent>, private customerService: CustomerService,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }


  ngOnInit() {
    console.log(this.data)
  }


  onNoClick(): void {
    this.dialogRef.close();
  }}

