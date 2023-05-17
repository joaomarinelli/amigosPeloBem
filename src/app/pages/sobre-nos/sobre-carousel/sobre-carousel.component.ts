import { Component, OnInit } from '@angular/core';
import { Sobre } from 'src/app/models/sobre/sobre.model';
import { SobreService } from 'src/app/services/sobre.service';

@Component({
  selector: 'app-sobre-carousel',
  templateUrl: './sobre-carousel.component.html',
  styleUrls: ['./sobre-carousel.component.scss']
})
export class SobreCarouselComponent implements OnInit {


  public sobre: Sobre;



  constructor( private sobreService: SobreService) { }

  ngOnInit(): void {

    this.sobreService.getSobre(1).subscribe(
      sobre =>{
       this.sobre = sobre;
      },
    )
  }
  pegarFoto( index: number ){
    return this.sobre.urlFotos[index] as string
  }

  editarCarrossel(){
    this.sobreService.atualizaSobre(this.sobre).subscribe(() =>{

    })
  }

}
