import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, Subscription } from 'rxjs';
import { GridActionModel } from 'src/models/_common/GridActionModel';
import { GridDataModel } from 'src/models/_common/GridDataModel';
import { AlertType } from 'src/models/_enums/AlertTypeEnum';
import { UserFiltrationModel } from 'src/models/user/UserFiltrationModel';
import { UserListingModel } from 'src/models/user/UserListingModel';
import { AlertService } from 'src/services/alert.service';
import { DataGridService } from 'src/services/data-grid.service';
import { LoadingSpinnerService } from 'src/services/loading-spinner.service';
import { ModalService } from 'src/services/modal.service';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-users-listing',
  templateUrl: './users-listing.component.html',
  styleUrls: ['./users-listing.component.scss']
})
export class UsersListingComponent implements OnInit {
  gridData!: GridDataModel;
  users: UserListingModel[] = [];
  subscription: Subscription[] = [];
  gridCols: any
  constructor(
    private loaderService: LoadingSpinnerService,
    private usersService: UsersService,
    private dataGridService: DataGridService,
    private datePipe: DatePipe,
    private alertService: AlertService,
    private router: Router,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
  }

  onActionClicked(e: any){

  }
}
