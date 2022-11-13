import { Component, OnInit } from '@angular/core';
import { DataportfolioService } from 'src/app/servicios/dataportfolio.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})

export class EstudiosComponent implements OnInit {
  estudiosLista:any;
  constructor(private dataPortfolio:DataportfolioService) { }

  ngOnInit(): void {
    this.dataPortfolio.obtenerDatos().subscribe(data=>{
      this.estudiosLista=data.estudios;
    })
  }

}
