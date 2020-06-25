import {Injectable} from '@angular/core';
import{Student} from './student.model';
@Injectable({providedIn:'root'})

export class StudentService{

    private students:Student[]=[
        {name:'Debadree',imgUrl:"https://wprdea.org/image/img_avatar.png",contact:"9845678",address:"Barrackpore",
    passoutYear:"2023",stream:"IT"},
    {name:'Debadree',imgUrl:"https://wprdea.org/image/img_avatar.png",contact:"9845678",address:"Barrackpore",
    passoutYear:"2023",stream:"IT"}

    ];

    getStudents(){
        return [...this.students];
    }
}

