import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'to-do-app';
  initial = '';
  tasks: TaskClass[]=[
    new TaskClass("Go to gym"),
    new TaskClass("Sleep"),
    new TaskClass("angular tutorial")
  ]
  

  addTask(taskitem:string){
    if(taskitem == ''){
      return
    }
    this.tasks.push(new TaskClass(taskitem))
    this.initial = ''
  }
  deleteTask(taskitem:TaskClass){
    if(taskitem.isDone){
      this.tasks = this.tasks.filter(task=>task != taskitem)
    }
    else{
      var isConfirm = confirm("Are you want to delete: " + `"${taskitem.title}"`)
      if(isConfirm){
        this.tasks = this.tasks.filter(task=>task != taskitem)
      }
    }
  }
  doneTask(taskitem:TaskClass){
    taskitem.isDone = !taskitem.isDone;
  }

  isEnter(e:any){
    if(e.keyCode == 13){
      this.addTask(this.initial)
    }
  }

  
}
class TaskClass{
  constructor(public title:string){
    
  }
  isDone = false;
}
