import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {PanelModule} from 'primeng/panel';

import { PessoaComponent } from './pessoa.component';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { PessoaService } from './pessoa.service'
import { SharedModule } from '../shared/shared.module';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    PessoaComponent, 
    PessoaFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,

    TableModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    DialogModule,
    ConfirmDialogModule,
    DropdownModule,
    PanelModule,

    SharedModule
  ],
  providers: [
    PessoaService,
    ConfirmationService
  ]
})
export class PessoaModule { }
