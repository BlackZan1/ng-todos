import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() clickHandler: (title: string) => void

  constructor() { }

  ngOnInit(): void {
  }

  title: string = ''; 

  onClickHandler() {
    this.clickHandler(this.title);
  }
}
