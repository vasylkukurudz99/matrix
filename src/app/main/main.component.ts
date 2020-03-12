import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  formSubmitted: boolean;
  categories: any;
  matrixForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {
    this.matrixForm = this.initMatrixForm();
  }

  ngOnInit() {
    this.categories = [
      {
        title: 'Software Engineering',
        desc: 'General software engineering concepts that apply to all languages and frameworks.',
        skills: [
          {
            title: 'Clean Code',
            desc: 'How comfortable are you with clean naming conventions, DRY code, etc.?',
            tags: ['beginner'],
            form: this.matrixForm.get('cleanCode')
          },
          {
            title: 'Clean Architecture',
            desc: 'How comfortable are you with organizing an application so that it is stable, scalable, and extensible.',
            tags: ['intermediate'],
            form: this.matrixForm.get('cleanArchitecture')
          },
          {
            title: 'Object Oriented Design',
            desc: 'How well do you understand object-oriented principles and how to use them to model a real world domain.',
            tags: ['beginner'],
            form: this.matrixForm.get('objectOrientedDesign')
          },
          {
            title: 'Design Patterns',
            desc: 'How well do you understand common design patterns and how to apply then in your application design?',
            tags: ['intermediate'],
            form: this.matrixForm.get('designPatterns')
          },
          {
            title: 'Refactoring Legacy Code',
            desc: 'How confident are you that you can take old (and probably less-than-ideal) code and apply best practices to make it better?',
            tags: ['intermediate'],
            form: this.matrixForm.get('refactoringLegacyCode')
          },
          {
            title: 'Functional Concepts',
            desc: 'How well do you understand functional concepts like pure functions, immutability, referential transparency, etc?',
            tags: ['advanced'],
            form: this.matrixForm.get('functionalConcepts')
          },        					
        ]
      },
      {
        title: 'Frontend Development',
        desc: 'Concepts specific to frontend development that include layout, Angular, state management, etc.',
        skills: [ ]
      },
      {
        title: 'Foundational Concepts',
        desc: 'Necessary skills for being an effective developer that do not directly involve writing code.',
        skills: [ ]
      }          
    ];
  }

  private initMatrixForm() {
    return this.formBuilder.group({
      cleanCode: this.getInitForm(),
      cleanArchitecture: this.getInitForm(),
      objectOrientedDesign: this.getInitForm(),
      designPatterns: this.getInitForm(),
      refactoringLegacyCode: this.getInitForm(),
      functionalConcepts: this.getInitForm(),
    });
  }

  submitGroup() {
    this.formSubmitted = true;
    if (this.matrixForm.valid) {
      this.categories.map(cat => {
        return {
          ...cat,
          skills: cat.skills.map(({title, desc, tags, form}) => {
            const {current, desired, expert} = form.value;
            return {
              title,
              desc,
              tags,
              current,
              desired,
              expert
            }
          })
        }
      })
      console.log(this.categories)
    }
  }

  private getInitForm() {
    return this.formBuilder.group({
      current: [null, Validators.required],
      desired: [null, Validators.required],
      expert: [null, Validators.required]
    })
  }

}