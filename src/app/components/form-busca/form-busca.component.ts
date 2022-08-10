import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

import { TempoService } from '../../services/tempo.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent implements OnInit {

  constructor(private tempoService: TempoService) { }

  ngOnInit(): void {
    this.informacoesTempoCidade();
  }

  private informacoesTempoCidade(): void {
    this.tempoService.getCidade('Belo Horizonte')
      .pipe(take(1))
      .subscribe(dados => console.log(dados));
  }

}
