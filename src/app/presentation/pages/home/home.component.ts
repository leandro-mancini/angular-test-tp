import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as _ from 'lodash';

import { IMotoristaController } from 'src/app/core/interfaces/controllers/imotorista-controller';
import { finalize } from 'rxjs/operators';
import { MotoristaModel } from 'src/app/core/domain/entity/motorista-model';
import { MatDialog } from '@angular/material';
import { DialogCadastroComponent } from '../../shared/dialogs/dialog-cadastro/dialog-cadastro.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  isLoading: boolean;
  drivers: MotoristaModel[] = [];
  displayedColumns: string[] = ['name', 'phone', 'birth_date', 'documents', 'action'];
  dataSource: any;

  constructor(
    private motoristaController: IMotoristaController,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;

    this.getDrivers();
  }

  getDrivers() {
    this.isLoading = true;

    this.motoristaController.get()
    .pipe(finalize(() => {
      this.isLoading = false;
    }))
    .subscribe((driver: MotoristaModel) => {
      console.log(driver);
      this.drivers.push(driver);
      this.dataSource = new MatTableDataSource(this.drivers);
    });
  }

  newDriver() {
    const dialogRef = this.dialog.open(DialogCadastroComponent, {
      width: '650px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = _.findIndex(this.drivers, ['id', result.id]);

        if (index !== -1) {
          this.drivers[index] = result;
        } else {
          this.drivers.push(result);
        }

        this.dataSource = new MatTableDataSource(this.drivers);
      }
    });
  }

}
