import { AfterViewInit, ChangeDetectorRef, Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { TextFieldModule } from '@angular/cdk/text-field';
import { CommonModule, NgClass } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { InventoryService } from '../inventory.service';
import { FuseConfirmationService } from '@fuse/services/confirmation';

@Component({
    selector: 'form-dialog',
    templateUrl: './form-dialog.component.html',
    styleUrls: ['./form-dialog.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [
        MatIconModule,
        FormsModule,
        MatFormFieldModule,
        NgClass,
        MatInputModule,
        TextFieldModule,
        ReactiveFormsModule,
        MatButtonToggleModule,
        MatButtonModule,
        MatSelectModule,
        MatOptionModule,
        MatChipsModule,
        MatDatepickerModule,
        MatPaginatorModule,
        MatTableModule,
        MatRadioModule,
        CommonModule,
    ],
})
export class FormDialogComponent implements OnInit{
    formFieldHelpers: string[] = ['fuse-mat-dense'];
    addForm: FormGroup;
    isLoading: boolean = false;
    positions: any[];
    flashMessage: 'success' | 'error' | null = null;
    constructor(private dialogRef: MatDialogRef<FormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data: any,
        private formBuilder: FormBuilder,
        private _service: InventoryService,
        private _fuseConfirmationService: FuseConfirmationService,
        private _changeDetectorRef: ChangeDetectorRef
    ) {
        // this._service.getPosition().subscribe((resp: any)=>{
        //     this.positions = resp.data
        // })
    }

    ngOnInit(): void {
        this.addForm = this.formBuilder.group({
            name: [],
            phone: [],
            email: [],
            code: [],
        });

    }



    onSaveClick(): void {
        this.flashMessage = null;
        if (this.addForm.value!) {
            this.addForm.enable();
            this._fuseConfirmationService.open({
                "title": "กรุณาระบุข้อมูล",
                "message": "กรุณาระบุข้อมูลให้ครบถ้วน",
                "icon": {
                    "show": true,
                    "name": "heroicons_outline:exclamation",
                    "color": "warning"
                },
                "actions": {
                    "confirm": {
                        "show": false,
                        "label": "ยืนยัน",
                        "color": "primary"
                    },
                    "cancel": {
                        "show": false,
                        "label": "ยกเลิก",

                    }
                },
                "dismissible": true
            });

            return;
        }
        // Open the confirmation dialog
        const confirmation = this._fuseConfirmationService.open({
            "title": "เพิ่มข้อมูล",
            "message": "คุณต้องการเพิ่มข้อมูลใช่หรือไม่ ",
            "icon": {
                "show": false,
                "name": "heroicons_outline:exclamation",
                "color": "warning"
            },
            "actions": {
                "confirm": {
                    "show": true,
                    "label": "ยืนยัน",
                    "color": "primary"
                },
                "cancel": {
                    "show": true,
                    "label": "ยกเลิก"
                }
            },
            "dismissible": true
        });

        // Subscribe to the confirmation dialog closed action
        // confirmation.afterClosed().subscribe((result) => {
        //     if (result === 'confirmed') {
        //         const updatedData = this.addForm.value;
        //         this._service.create(updatedData).subscribe({
        //             next: (resp: any) => {
        //                 this.showFlashMessage('success');
        //                 this.dialogRef.close(resp);
        //             },
        //             error: (err: any) => {
        //                 this.addForm.enable();
        //                 this._fuseConfirmationService.open({
        //                     "title": "กรุณาระบุข้อมูล",
        //                     "message": err.error.message,
        //                     "icon": {
        //                         "show": true,
        //                         "name": "heroicons_outline:exclamation",
        //                         "color": "warning"
        //                     },
        //                     "actions": {
        //                         "confirm": {
        //                             "show": false,
        //                             "label": "ยืนยัน",
        //                             "color": "primary"
        //                         },
        //                         "cancel": {
        //                             "show": false,
        //                             "label": "ยกเลิก",

        //                         }
        //                     },
        //                     "dismissible": true
        //                 });
        //             }
        //         })
        //     }
        // })


        // แสดง Snackbar ข้อความ "complete"

    }



    onCancelClick(): void {

        this.dialogRef.close();
    }

    showFlashMessage(type: 'success' | 'error'): void {
        // Show the message
        this.flashMessage = type;

        // Mark for check
        this._changeDetectorRef.markForCheck();

        // Hide it after 3 seconds
        setTimeout(() => {

            this.flashMessage = null;

            // Mark for check
            this._changeDetectorRef.markForCheck();
        }, 3000);
    }

}
