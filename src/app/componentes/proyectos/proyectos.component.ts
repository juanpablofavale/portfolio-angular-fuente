import { Component, OnInit } from '@angular/core';
import { DataportfolioService } from 'src/app/servicios/dataportfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectosLista:any;
  constructor(private dataPortfolio:DataportfolioService) { }

  ngOnInit(): void {
    this.dataPortfolio.obtenerDatos().subscribe(data=>{
      this.proyectosLista=data.proyectos;
    })
  }

}
