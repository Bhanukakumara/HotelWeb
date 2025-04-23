import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DemoNgZorroAntdModule } from '../../../DemoNgZorro';

@Component({
  selector: 'app-register',
  imports: [DemoNgZorroAntdModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm!: FormGroup;
  constructor(private fb: FormBuilder,){}

  ngInit(){
    this.registerForm = this.fb.group({
      email: [null,[Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      name: [null, [Validators.required]]
    })
  }
}
