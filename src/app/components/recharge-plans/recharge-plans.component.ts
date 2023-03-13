import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { RechargePlanService } from './../../services/rechargePlan_service/rechargePlan.service';
import { RechargePlanModel } from './../../models/rechargePlan.model';

@Component({
  selector: 'app-recharge-plans',
  templateUrl: './recharge-plans.component.html',
  styleUrls: ['./recharge-plans.component.scss'],
})
export class RechargePlansComponent {
  displayedColumns: string[] = ['name', 'speed', 'benefit', 'price'];
  dataSource = new MatTableDataSource<RechargePlanModel>([]);
  @ViewChild(MatSort) sort: MatSort | any;
  constructor(private rechargePlanService: RechargePlanService) {}

  ngOnInit() {
    this.getRechargePlanList();
    this.dataSource.sort = this.sort;
  }

  getRechargePlanList() {
    this.rechargePlanService.getRechargePlan().subscribe((res) => {
      this.dataSource = new MatTableDataSource<RechargePlanModel>(res);
    });
  }

  applyFilter(filterValue: any, column: any) {
    if (column == 'price') {
      this.dataSource.filterPredicate = function (
        data,
        filter: string
      ): boolean {
        return data.price.toString() === filter;
      };
    } else if (column == 'speed') {
      this.dataSource.filterPredicate = function (
        data,
        filter: string
      ): boolean {
        return (
          data.speed.download.toLowerCase().includes(filter) ||
          data.speed.upload.toLowerCase().includes(filter)
        );
      };
    } else {
      this.dataSource.filterPredicate = function (
        data,
        filter: string
      ): boolean {
        return data.name.toLowerCase().includes(filter);
      };
    }

    this.dataSource.filter = filterValue.target.value.trim().toLowerCase();
  }
}
