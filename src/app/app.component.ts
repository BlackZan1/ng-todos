import { Component, OnInit } from '@angular/core';

export interface iTODOItem {
  id: number,
  title: string
  isDone: boolean
}

const All = 'All', Complited = 'Complited', Active = 'Active';

export type iCategory =
  | typeof All
  | typeof Complited
  | typeof Active

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hacker-news';

  // isVisible: boolean = true;

  constructor() {
    this.toggleItemStatus = this.toggleItemStatus.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.filterItems = this.filterItems.bind(this);
  }

  ngOnInit() {
    this.filterItems('All');
  }

  items: iTODOItem[] = [];

  private data: iTODOItem[] = [
    {title: 'Go to the party', isDone: false, id: 1},
    {title: 'Break a diamond helmet', isDone: false, id: 2},
    {title: 'Learn Angular 9+', isDone: false, id: 3},
    {title: 'Read Lev Tolstoy\'s books', isDone: false, id: 4},
    {title: 'Create something great', isDone: false, id: 5},
    {title: 'Buy a new Udemy course. Ah-ha-ha!', isDone: false, id: 6},
    {title: 'Get new skills', isDone: false, id: 7},
    {title: 'Help my parents', isDone: false, id: 8},
    {title: 'Where is my dog?', isDone: false, id: 9}
  ]

  toggleItemStatus(id: number) {
    this.data.forEach(i => {
      if(i.id === id) {
        i.isDone = !i.isDone;
      }
    })

    this.filterItems('All');
  }

  deleteItem(id: number) {
    this.data = this.items.filter(i => i.id !== id);

    this.filterItems('All');
  }

  addItem(title: string) {
    let todoItem: iTODOItem = {
      id: Math.floor(Math.random() * 8999) + 1000,
      title,
      isDone: false
    }

    this.data.push(todoItem);
    
    this.filterItems('All');
  }

  filterItems(category: iCategory) {
    if(category === 'All') this.items = [...this.data];
    else if(category === 'Active') this.items = [...this.data].filter(item => item.isDone === false);
    else if(category === 'Complited') this.items = [...this.data].filter(item => item.isDone === true);
    else this.items = [...this.data];
  }
}
