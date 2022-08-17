import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
//import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-form-test',
  templateUrl: './formly-form-test.component.html',
  styleUrls: ['./formly-form-test.component.scss']
})
export class FormlyFormTestComponent implements OnInit {

  form = new FormGroup({});
  //options:FormlyFormOptions={};
  items!:[];
  token!:string;

  model={
    firstname:'shereen',
    age:24
  }
  /*fields:FormlyFieldConfig[]=[
    {
      fieldGroupClassName:'ff',
       fieldGroup:[
        {

          key:'firstname',
          type:'input',
          className:'form-input',
          templateOptions:{
            label:'FirstName'
          }
        },

        {

          key:'age',
          type:'input',
          className:'form-input',
          templateOptions:{
            label:'Age'
          }
        }
       ]
    }

  ]*/
  onSubmit(){
    console.log(this.form.value)
  }
  /*form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    }
  ];

  onSubmit(model: any) {
    console.log(model);
  }*/

  /*form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {
    formState: {
      awesomeIsForced: false,
    },
  };
  fields: FormlyFieldConfig[] = [
    {
      key: 'text',
      type: 'input',
      templateOptions: {
        label: 'Text',
        placeholder: 'Formly is terrific!',
        required: true,
      },
    },
    {
      key: 'nested.story',
      type: 'textarea',
      templateOptions: {
        label: 'Some sweet story',
        placeholder: 'It allows you to build and maintain your forms with the ease of JavaScript :-)',
        description: '',
      },
      expressionProperties: {
        focus: 'formState.awesomeIsForced',
        'templateOptions.description': (model:any, formState:any) => {
          if (formState.awesomeIsForced) {
            return 'And look! This field magically got focus!';
          }
        },
      },
    },
    {
      key: 'awesome',
      type: 'checkbox',
      templateOptions: { label: '' },
      expressionProperties: {
        'templateOptions.disabled': 'formState.awesomeIsForced',
        'templateOptions.label': (model:any, formState:any) => {
          if (formState.awesomeIsForced) {
            return 'Too bad, formly is really awesome...';
          } else {
            return 'Is formly totally awesome? (uncheck this and see what happens)';
          }
        },
      },
    },
    {
      key: 'whyNot',
      type: 'textarea',
      expressionProperties: {
        'templateOptions.placeholder': (model:any, formState:any) => {
          if (formState.awesomeIsForced) {
            return 'Too bad... It really is awesome! Wasn\'t that cool?';
          } else {
            return 'Type in here... I dare you';
          }
        },
        'templateOptions.disabled': 'formState.awesomeIsForced',
      },
      hideExpression: 'model.awesome',
      templateOptions: {
        label: 'Why Not?',
        placeholder: 'Type in here... I dare you',
      },
    },
    {
      key: 'custom',
      type: 'custom',
      templateOptions: {
        label: 'Custom inlined',
      },
    },
  ];

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }*/
  constructor() { }

  ngOnInit(): void {
  }

}
