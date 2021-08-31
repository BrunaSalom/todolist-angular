import { Component, Input, OnInit } from '@angular/core';
import { Tarefa } from '../../models/Tarefa';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  @Input() tarefa!:Tarefa;

  constructor() { }

  ngOnInit(): void {
  }

}
