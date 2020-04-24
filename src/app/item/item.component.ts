import { Component, OnInit, Input, Output } from '@angular/core';
import { iTODOItem } from '../app.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit {
  @Input() item: iTODOItem;
  @Input() toggleStatus: (id: number) => void
  @Input() delete: (id: number) => void

  ngOnInit(): void {
    // console.log(typeof this.delete)
  }

  clickHandler() {
    this.toggleStatus(this.item.id);
  }

  deleteHandler() {
    this.delete(this.item.id);
  }
}
