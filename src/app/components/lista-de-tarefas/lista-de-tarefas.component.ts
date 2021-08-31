import { Component, OnInit } from '@angular/core';
import { Tarefa } from 'src/app/models/Tarefa';
import { Prioridade } from 'src/app/models/Prioridade';

@Component({
  selector: 'app-lista-de-tarefas',
  templateUrl: './lista-de-tarefas.component.html',
  styleUrls: ['./lista-de-tarefas.component.css']
})
export class ListaDeTarefasComponent implements OnInit {

  tarefas: Tarefa[] = [
    {
      checkbox: true,
      texto: "Não sei o que fazer",
      prioridade: 1
    }, {
      checkbox: false,
      texto: "Só fica dando caca",
      prioridade: 1
    }, {
      checkbox: true,
      texto: "To querendo dar uns tapas",
      prioridade: 1
    }, {
      checkbox: false,
      texto: "E jogar tudo na parede",
      prioridade: 1
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
