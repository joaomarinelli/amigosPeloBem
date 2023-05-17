import { UsuariosService } from '../../../services/usuarios.service';
import { Usuario } from 'src/app/models/usuario/usuario.model';
import { Component, OnInit } from '@angular/core';
import { SobreService } from 'src/app/services/sobre.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms-usuarios',
  templateUrl: './forms-usuarios.component.html',
  styleUrls: ['./forms-usuarios.component.scss']
})
export class SobreUpdateCardComponent implements OnInit {

  usuario = {} as Usuario;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usuariosService: UsuariosService,

    ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params)=>{
        if(params && params.id){
          this.usuariosService.selectById(params.id).subscribe(usuario =>{
            this.usuario = usuario
          })
        }
      }
    )
  }

  insertUsuario(){
    this.usuariosService.insert(this.usuario).subscribe(() =>{
      // confirm('Deseja Salvar Usuario?')
      this.router.navigate(['/sobre-nos'])
    })
  }

  updateUsuario(){
    this.usuariosService.update(this.usuario).subscribe(() =>{
      // confirm('Deseja Atualizar Usuario?')
      this.router.navigate(['/sobre-nos'])
    })
  }

  cancel(){
    this.router.navigate(['/sobre-nos'])
  }

  deleteUsuario(){
   this.usuariosService.delete(this.usuario.id).subscribe(() =>{
    // confirm('Deseja Deletar Usuario?')
    this.router.navigate(['/sobre-nos'])

   })
  }
}
