import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from './../../models/usuario/usuario.model';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pagina-teste',
  templateUrl: './pagina-teste.component.html',
  styleUrls: ['./pagina-teste.component.scss']
})
export class PaginaTesteComponent implements OnInit {

  usuarios: Usuario[];
  public form: FormGroup;


  controleDeFormDosusuariosSelecionadosDaLista = new FormControl('');
  usuariosList: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private router : Router,
    private activatedRoute: ActivatedRoute,
  ) { }

 
  ngOnInit() {

    this.form = this.formBuilder.group({
      id: '',
      name: '',
      avatar: ''
    })

    this.activatedRoute.params.subscribe(
      (params)=>{
        console.log(params.id);
        this.buscaUmUsuarioParaOForm(params.id)
      }
    )


    this.buscaTodosUsuarios();
    // this.buscaUmUsuario("7");

    // this.insereUsuario();

  }
  
  formToModel(): Usuario{
    let dadosForm = this.form.getRawValue() as any;
    dadosForm.participantes = this.controleDeFormDosusuariosSelecionadosDaLista.value


    return dadosForm;
  }

  salvaForm(){
    let usuario = this.formToModel();

    if(usuario && usuario.id){
      console.log("realizou update");
      this.atualizaUsuario(usuario);
    }else{
      console.log("realizou insert");
      this.insereUsuario(usuario);
    }


  }

  carregarUsuarioNoForm(usuario: Usuario){
    // this.modelToForm(usuario);
    this.router.navigate([ 'teste','usuario', usuario.id])
  }


  modelToForm(usuario: Usuario){
    this.form.patchValue(usuario)
  }






  insereUsuario(u: Usuario) {
    // let u = { name: "Wyslan", avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/707.jpg"} as Usuario;

    this.usuarioService.insert(u).subscribe(
      (usuarioDaResposta)=>{
        if(usuarioDaResposta){
          // this.usuarios = [usuarioDaResposta];
          this.usuarios = this.usuarios.concat(usuarioDaResposta);
        }
      },
      (err: HttpErrorResponse)=>{
        console.error(err.message);
      }
    )
  }

  atualizaUsuario(u: Usuario) {

    this.usuarioService.update(u).subscribe(
      (usuarioDaResposta)=>{

        this.buscaTodosUsuarios();


        // if(usuarioDaResposta){
          // this.usuarios = [usuarioDaResposta];
          // this.usuarios.forEach(usuario=>{
          //   if(usuario.id == u.id){
          //     usuario = usuarioDaResposta;
          //   }
          // })
        // }
      },
      (err: HttpErrorResponse)=>{
        console.error(err.message);
      }
    )
  }

  buscaUmUsuario(id: string) {
    this.usuarioService.selectById(id).subscribe(
      (usuarioDaResposta)=>{
        if(usuarioDaResposta){
          this.usuarios = [usuarioDaResposta];
        }
      },
      (err: HttpErrorResponse)=>{
        console.error(err.message);
      }
    )
  }

  buscaUmUsuarioParaOForm(id: string) {
    this.usuarioService.selectById(id).subscribe(
      (usuarioDaResposta)=>{
        if(usuarioDaResposta){
          this.modelToForm(usuarioDaResposta);
        }
      },
      (err: HttpErrorResponse)=>{
        console.error(err.message);
      }
    )
  }




  buscaTodosUsuarios(){
    this.usuarioService.selectAll().subscribe(
      (usuariosDaResposta)=>{
        if(usuariosDaResposta && usuariosDaResposta.length>0){
          this.usuarios = usuariosDaResposta;
          this.usuariosList = usuariosDaResposta;
        }
      },
      (err: HttpErrorResponse)=>{
        console.error(err.message);
      }
    )
  }


}
