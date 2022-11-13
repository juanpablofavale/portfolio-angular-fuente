import { Component, OnInit } from '@angular/core';
import { DataportfolioService } from 'src/app/servicios/dataportfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experienciaLista:any;
  constructor(private dataProfile:DataportfolioService) { }

  ngOnInit(): void {
    this.dataProfile.obtenerDatos().subscribe(data =>{
      this.experienciaLista=data.experiencia;
    })
  }

}
