import { Component, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

const products: any[] = [
  {
    'id': 1,
    'name': 'Product001',
    'cost': 10.0,
    'quantity': 1000,
    'locationId': 1,
    'familyId': 1
  },
  {
    'id': 2,
    'name': 'Product002',
    'cost': 20.0,
    'quantity': 2000,
    'locationId': 1,
    'familyId': 2
  },
  {
    'id': 3,
    'name': 'Product003',
    'cost': 30.0,
    'quantity': 3000,
    'locationId': 3,
    'familyId': 2
  },
  {
    'id': 4,
    'name': 'Product004',
    'cost': 40.0,
    'quantity': 4000,
    'locationId': 2,
    'familyId': 3
  }
];

const transactions: any = [
  {
    'name': 'costumer 1',
    'id': 1,
    'cost': 11,
    'quantity': 10,
    'productId': 1
  },
  {
    'name': 'costumer 2',
    'id': 2,
    'cost': 12,
    'quantity': 100,
    'productId': 2
  },
  {
    'name': 'customer 3',
    'id': 3,
    'cost': 15,
    'quantity': 101,
    'productId': 3
  }
];

const families: any = [
  {
    'id': 1,
    'name': 'FM001'
  },
  {
    'id': 2,
    'name': 'FM002'
  },
  {
    'id': 3,
    'name': 'FM003'
  }
];

@Component({
  selector: 'datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent {
  @Input()
  public content: any;

  public rows = new MatTableDataSource<any>();
  public columns = [];
  public selection = new SelectionModel<any>(true, []);

  public constructor() {
  }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  public filterBy(event: any): void {
    const filterBy: string = event.target.value;
    this.rows.filter = filterBy;
  }

  public isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.rows.data.length;
    return numSelected === numRows;
  }

  public masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.rows.data.forEach(row => this.selection.select(row));
  }

  public checkboxLabel(row?: any): string {
    return (!row)
      ? `${this.isAllSelected() ? 'select' : 'deselect'} all`
      : `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  private updateRows(): void {
    this.rows = new MatTableDataSource<any>(this.content);
    this.rows.sort = this.sort;
    this.rows.paginator = this.paginator;
  }

  private updateColumns(): void {
    this.columns = ['select'];

    for (const column of Object.keys(this.content[0])) {
      this.columns.push(column);
    }
  }

  private updateTable(): void {
    if (this.content) {
      this.updateRows();
      this.updateColumns();
    }
  }

  public showFamilies(): void {
    this.content = families;
    this.updateTable();
    this.selection.clear();
  }

  public showProducts(): void {
    this.content = products;
    this.updateTable();
    this.selection.clear();
  }

  public showTransactions(): void {
    this.content = transactions;
    this.updateTable();
    this.selection.clear();
  }
}


