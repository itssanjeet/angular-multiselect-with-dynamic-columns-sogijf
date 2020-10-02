import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule, MatSortModule, MatFormFieldModule, MatTableModule, MatCheckboxModule, MatCardModule, MatInputModule} from '@angular/material';
import { AppComponent } from './app.component';
import { DatatableComponent } from '../datatable/datatable.component';
import { FieldToDisplayPipe } from '../field-to-display.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatTableModule, MatCheckboxModule, MatCardModule, MatInputModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, DatatableComponent, FieldToDisplayPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
