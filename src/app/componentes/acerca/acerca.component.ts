import { Component, OnInit } from '@angular/core';
import { DataportfolioService } from 'src/app/servicios/dataportfolio.service';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
  acercaData:any;
  constructor(private dataPortfolio:DataportfolioService) { }

  ngOnInit(): void {
    this.dataPortfolio.obtenerDatos().subscribe(data =>{
      this.acercaData=data;
    })
  }

}
