import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  //URL Base
  url = "http://localhost/api/php/"

  //Vetor de cursos
  vetor!: Curso[];

  //Objeto da classe curso
  curso = new Curso();
  
  constructor(private curso_servico: CursoService) { }

  ngOnInit() {
    //Ao iniciar o sistema, deverá listar os cursos
    this.selecao();
  }

  //Cadastro
  cadastro() {
    this.curso_servico.cadastrarCurso(this.curso).subscribe(
      (res: Curso[])=>{
        //Adicionando dados ao vetor
        this.vetor = res;
        //Limpar os atributos
        this.curso.nomeCurso = null;
        this.curso.valorCurso = null;
        //Atualizar a listagem
        this.selecao();
      }
    )
  }
  //Seleção
  selecao() {
    this.curso_servico.obterCursos().subscribe(
      (res: Curso[]) =>{
        this.vetor = res;
      }
    )
  }
  //Alterar
  alterar(){
    this.curso_servico.atualizarCurso(this.curso).subscribe((res)=>{

      //Atualizar vetor
      this.vetor = res;

      //Limpar valores do objeto
      this.curso.nomeCurso = null;
      this.curso.valorCurso = null;
      //Atualizar a listagem
      this.selecao();

    })
  }
  //Remover
  remover(){
    this.curso_servico.removerCurso(this.curso).subscribe(
      (res: Curso[])=>{
        this.vetor = res;

        this.curso.nomeCurso = null;
        this.curso.valorCurso = null;
      }
    )
  }

  //Selecionar curso específico
  selecionarCurso(c:Curso) {
    this.curso.idCurso = c.idCurso; 
    this.curso.nomeCurso = c.nomeCurso; 
    this.curso.valorCurso = c.valorCurso; 
  }
}
