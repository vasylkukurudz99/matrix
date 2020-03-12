import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

export interface Skill {
  title: string;
  desc: string;
  tags: string[];
  form: FormGroup;
}

@Component({
  selector: 'app-form-card',
  templateUrl: './form-card.component.html',
  styleUrls: ['./form-card.component.scss']
})
export class FormCardComponent implements OnInit {
  @Input() skill: Skill;
  rateSkills = [
    {
      text: ''
    },
    {
      text: '0 - No Skill'
    },
    {
      text: '1 - Basic Knowledge'
    },
    {
      text: '2 - Can Perform Basic Tasks'
    },
    {
      text: '3 - Can Perform Advanced Tasks'
    },
    {
      text: '4 - Can Teach Advanced Tasks'
    },
  ];
  radioValues = [0,1,2,3,4]

  constructor() { }

  ngOnInit() {
    console.log(this.skill)
  }
}
