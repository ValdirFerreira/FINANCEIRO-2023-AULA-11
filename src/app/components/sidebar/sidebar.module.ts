import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar.component';



@NgModule(
    {
        declarations: [SidebarComponent],
        imports: [CommonModule,
            FormsModule],
        exports: [SidebarComponent]
    }
)

export class SidebarModule { }