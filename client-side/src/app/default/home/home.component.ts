import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { PublicacoesService } from 'src/app/publicacoes/publicacoes.service';
import { ToastyService } from 'src/app/shared/components/toasty/toasty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displaySpinner: boolean = false;
  publicacoes: any[] = [];

  constructor(
    private publicacoesService: PublicacoesService,
    private toastyService: ToastyService
  ) { }

  ngOnInit(): void {
    //AOS.init();
    this.getAll();
  }

  getAll(){
    this.displaySpinner = true;
    this.publicacoes = [];
    this.publicacoesService.getAll()
    .then(response => {
      if(response != null){
        this.publicacoes = response;
      }
      this.displaySpinner = false;
    })
    .catch(error =>{
      console.log(error);
      this.toastyService.showError("Erro ao buscar pessoa");
      this.displaySpinner = false;
    });
  }
}
