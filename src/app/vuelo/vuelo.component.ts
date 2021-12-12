import { Component, OnInit } from '@angular/core';
import { CiudadOrigenService } from '../service/ciudadorigen.service';
import { RutaService } from '../service/ruta.service';
import { VueloService } from '../service/vuelo.service';

@Component({
  selector: 'app-vuelo',
  templateUrl: './vuelo.component.html',
  styleUrls: ['./vuelo.component.css']
})
export class VueloComponent implements OnInit {
   public origenes : Object[] =[] 
   public destinos : Object[] =[] 
   public lVuelos  : Object[] =[] 
   
   selected : string='';
   selecte : string='';
   fecha : Date=new Date;
   cantidad :number=0;
   fechaR :Date=new Date;
  
  constructor(
    private ciudadorigenservice : CiudadOrigenService,
    private rutaservice : RutaService,
    private vueloservice : VueloService
  ) { }

  ngOnInit(): void {
    
    this.ciudadorigenservice.listaOrigenes().subscribe(result => {
      this.origenes=result;
    });
  } 

      listarIda(){ 
      this.rutaservice.listarDestinos(this.selected).subscribe(resultado => {
      this.destinos=resultado;
    });
  }

  listarVuelos(){
    this.vueloservice.listarVuelos(this.fecha, this.selected, this.selecte,this.cantidad).subscribe(res => {
      this.lVuelos=res;
    });
  }
}
