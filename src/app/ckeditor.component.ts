import { Component } from '@angular/core';

@Component({
  selector: 'sample-ckeditor',
  template: `
<ckeditor
  [(ngModel)]="ckeditorContent">
    <ckbutton [name]="'saveButton'"
      [command]="'saveCmd'"
      (click)="save($event)"
      [icon]="'save.png'"
      [label]="'Save Document'"
      [toolbar]="'clipboard,1'">
    </ckbutton>
</ckeditor>
  `,
})
export class SampleCkeditor {
  ckeditorContent: string = '<p>Some html</p><img src="1.jpg"/>';
}