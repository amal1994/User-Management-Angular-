import { FormBuilder,FormControl, FormGroup } from '@angular/forms';

export class EmailValidators{
    static validEmail(formControl:FormControl){
        var regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(regex.test(formControl.value)){
            return null;
        }
        return {invalidEmail:true};
        
    }
}