import {Injectable} from '@angular/core';
import{Student} from './student.model';
@Injectable({providedIn:'root'})

export class StudentService{

    private students:Student[]=[];
}

