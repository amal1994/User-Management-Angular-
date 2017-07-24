import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { FormGroup } from '@angular/forms';


export interface FormComponent{
    userForm:FormGroup;
}
@Injectable()
export class CanDeactivateGuard implements CanDeactivate<FormComponent>{

    canDeactivate(component:FormComponent){
        if(component.userForm.dirty)

            return confirm("There are unsaved changes in form.Are you sure?");

        return true;   
    }

}