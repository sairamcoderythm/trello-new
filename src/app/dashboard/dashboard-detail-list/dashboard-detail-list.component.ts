import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { NoteListComponent } from '../note-list/note-list.component';

@Component({
  selector: 'app-dashboard-detail-list',
  templateUrl: './dashboard-detail-list.component.html',
  styleUrls: ['./dashboard-detail-list.component.css']
})
export class DashboardDetailListComponent implements OnInit {

  @ViewChild('viewContainerRef', { static: false, read: ViewContainerRef }) VCR: ViewContainerRef;

  index: number = 0;

  componentsReferences = [];

  constructor(private CFR: ComponentFactoryResolver) {
  }

  ngOnInit() {

  }

  createComponent() {

    let componentFactory = this.CFR.resolveComponentFactory(NoteListComponent);
    let componentRef: ComponentRef<NoteListComponent> = this.VCR.createComponent(componentFactory);
    let currentComponent = componentRef.instance;

    currentComponent.selfRef = currentComponent;
    currentComponent.index = ++this.index;

    // prividing parent Component reference to get access to parent class methods
    currentComponent.compInteraction = this;

    // add reference for newly created component
    this.componentsReferences.push(componentRef);
  }

  remove(index: number) {
    if (this.VCR.length < 1)
      return;

    let componentRef = this.componentsReferences.filter(x => x.instance.index == index)[0];
    let component: NoteListComponent = <NoteListComponent>componentRef.instance;
    let vcrIndex: number = this.VCR.indexOf(componentRef)

    // removing component from container
    this.VCR.remove(vcrIndex);

    this.componentsReferences = this.componentsReferences.filter(x => x.instance.index !== index);
  }

}
