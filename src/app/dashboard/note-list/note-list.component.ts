import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface myinterface {
  remove(index: number);
}


@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  public index: number;
  public selfRef: NoteListComponent;

  //interface for Parent-Child interaction
  public compInteraction: myinterface;

  saveForm:FormGroup;

  noteListData = [{
    name:''
  }];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.saveForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }


  removeMe(index) {
    this.compInteraction.remove(index);
  }

  save(){
    let value = this.saveForm.value;
    this.noteListData.push(value);

  }

}
