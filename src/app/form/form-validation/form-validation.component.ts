import { Component } from '@angular/core';
@Component({
  templateUrl: './form-validation.component.html'
})
export class FormvalComponent {
  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };
  login = { username: '', password: '' };
}
