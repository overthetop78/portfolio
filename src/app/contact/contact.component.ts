import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    message: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(1000)]]
  });

  nameLength = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.contactForm.valid) {
      window.location.href = `mailto:overthetop_for_ever@live.fr?subject=${this.contactForm.value.subject}&body=${this.contactForm.value.message}`;
      alert('Your message has been sent!');
      this.contactForm.reset();
    }
  }


}
