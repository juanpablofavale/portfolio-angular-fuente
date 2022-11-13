import { Component, OnInit } from '@angular/core';
import { DataportfolioService } from 'src/app/servicios/dataportfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidadesLista:any;
  constructor(private dataPortfolio:DataportfolioService) { }

  ngOnInit(): void {
    this.dataPortfolio.obtenerDatos().subscribe(data =>{
      this.habilidadesLista=data.habilidades;
    })
  }

}
