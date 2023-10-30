
import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit{
  quizzes=[
  {
    qid:23,
    title:'basic java quiz',
    description:'The Java SE is a computing-based platform and used for developing desktop or Window based applications.',
    maxMarks:'50',
    numberOfQuestions:'20',
    active:'',
    category:{
      title:'programing'
    }
  },
  {
    qid:23,
    title:'basic java quiz',
    description:'The Java SE is a computing-based platform and used for developing desktop or Window based applications.',
    maxMarks:'50',
    numberOfQuestions:'20',
    active:'',
    category:{
      title:'programing'
    }
  }
];

constructor(private quiz:QuizService){}
  ngOnInit(): void {
    
    this.quiz.quizzes().subscribe((data:any)=>{
    this.quizzes= data;
    console.log(this.quizzes);
    },
    (error:any)=>{
     console.log("error");
     Swal.fire('error !','error in loading data','error');
    }
  );
}

deleteQuiz(qid: any){
  
alert(qid);
  //  Swal.fire({
  //   icon:'info',
  //   title:'are you sure ?',
  //   confirmButtonText:'delete',
  //   showCancelButton:true
  //  }).then((result)=>{
  //   if(result.isConfirmed){

  //     this.quiz.deleteQuize(qid).subscribe(
  //       (data:any)=>{
  //        this.quizzes = this.quizzes.filter((quiz)=>quiz.qid!=qid);
  //         Swal.fire('success','quiz deleted','success');
  //       },
  //       (error:any)=>{
  //         Swal.fire('error','error in deleting quiz','error');
  //       }
  //     );

  //   }
  //  })
 }

}
