import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormService } from '../form.service';
import { JournallComponent } from '../modules/general/journall/journall.component';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
//j'ai déclarer un tableau qui va contenir les text et un champs de saisi
tasks: { text: string; completed: boolean; quantity: number }[] = [];
newTask: string = '';
newQuantity: number = 1;
// le bouton add text pour ajouter 
constructor(private route: ActivatedRoute, private formService: FormService) { }
addTask() {
  if (this.newTask.trim() !== '') {
    this.tasks.push({ text: this.newTask, quantity: this.newQuantity, completed: false });
    this.newTask = '';
    this.formService.addTodolist(this.tasks);
  }
       }
// le bouton pour supprimer
removeTask(index: number) {
  this.tasks.splice(index, 1);
}

toggleTask(index: number) {
  this.tasks[index].completed = !this.tasks[index].completed;
}

  selectedDay!: string;
  todolist!: string[];

  
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedDay = params['selectedDay']; 
    
      // this.todolist = this.formService.getTodolists(this.selectedDay);
     
    });
  }
}
