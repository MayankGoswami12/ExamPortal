import { Component ,OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  
 

  categories=[
    {
      cid:23,
      title:"kuijeknsdk"
    },
    {
      cid:23,
      title:"kuijeknsdk"
    }
  ];

  quizData={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    active:'',
    category:{
    cid:''
    }
  };

  constructor(private cat:CategoryService,private snack:MatSnackBar,private quiz:QuizService){}
  
  ngOnInit(): void {
   
    this.cat.categories().subscribe((data:any)=>{
     
      this.categories=data;
      //console.log(this.categories);
    },
    (error:any)=>{

       console.log(error);
       Swal.fire('error!!','error in loading data from server ','error')
    }
    
   );
  }
   addQuiz(){
    
    if(this.quizData.title.trim()=='' || this.quizData.title==null){

      this.snack.open("Title Required !!",'',{
        duration:3000,
      });
       return;
    }
  
    
    this.quiz.addQuiz(this.quizData).subscribe(
      (data:any)=>{
        Swal.fire('success','quiz is added','success')
       this.quizData={
        title:'',
        description:'',
        maxMarks:'',
        numberOfQuestions:'',
        active:'',
        category:{
        cid:''
        }
      };
       
      },
      (error:any)=>{
        Swal.fire('error !!','error while adding quiz','error');
        console.log(error);
      }
      );
      
  }

  

}
