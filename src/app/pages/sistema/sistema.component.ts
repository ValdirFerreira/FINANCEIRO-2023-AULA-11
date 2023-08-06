import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SistemaFinanceiro } from 'src/app/models/SistemaFinanceiro';
import { AuthService } from 'src/app/services/auth.service';
import { MenuService } from 'src/app/services/menu.service';
import { SistemaService } from 'src/app/services/sistema.service';

@Component({
  selector: 'app-sistema',
  templateUrl: './sistema.component.html',
  styleUrls: ['./sistema.component.scss']
})
export class SistemaComponent {

  constructor(public menuService: MenuService, public formBuilder: FormBuilder,
    public sistemaService: SistemaService,public authService : AuthService) {
  }


  sistemaForm: FormGroup;

  ngOnInit() {
    this.menuService.menuSelecionado = 2;

    this.sistemaForm = this.formBuilder.group
      (
        {
          name: ['', [Validators.required]]
        }
      )
  }


  dadorForm() {
    return this.sistemaForm.controls;
  }

  enviar() {
    debugger
    var dados = this.dadorForm();

    let item = new SistemaFinanceiro();
    item.Nome = dados["name"].value;

    item.Id =0;
    item.Mes=0;
    item.Ano=0;
    item.DiaFechamento=0;
    item.GerarCopiaDespesa=true;
    item.MesCopia=0;
    item.AnoCopia=0;    

    this.sistemaService.AdicionarSistemaFinanceiro(item)
    .subscribe((response: SistemaFinanceiro) => {
  
      this.sistemaForm.reset();

      this.sistemaService.CadastrarUsuarioNoSistema(response.Id,this.authService.getEmailUser())
      .subscribe((response: any) => {
        debugger
      }, (error) => console.error(error),
        () => { })

    }, (error) => console.error(error),
      () => { })


  }



}
