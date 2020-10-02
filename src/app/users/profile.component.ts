import { Component, OnInit, Inject } from '@angular/core'
import { FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'
import { TOASTR_TOKEN, Toastr } from '../services/toastr.service'

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent implements OnInit{

  profileForm: FormGroup
  firstName: FormControl
  lastName: FormControl

  constructor(private auth: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr){

  }

  ngOnInit(){
    this.firstName = new FormControl(
      this.auth.currentUser.firstName,
      [Validators.required, Validators.pattern('[a-zA-Z].*')])

    this.lastName = new FormControl(
      this.auth.currentUser.lastName,
      [Validators.required, Validators.pattern('[a-zA-Z].*')])

    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    })
  }

  onSubmitForm(formValue){
    if (this.profileForm.valid) {
      this.auth.updateCurrentUser(formValue.firstName, formValue.lastName).subscribe(() => {
        this.toastr.success("Profile Saved")
        this.router.navigate(['events'])
      })
    }
  }

  onClickCancel(){
    this.router.navigate(['events'])
  }

  onClickLogout(){
    this.auth.logout().subscribe(() => {
      this.router.navigate(['user/login'])
    })
  }

  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched
  }

  validateLastName(){
    return this.lastName.valid || this.lastName.untouched
  }
}
