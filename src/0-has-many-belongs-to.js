const { getId } = require('./utils');

class ToDoItem {
  constructor(desc, lvl) {
    this.id = getId();
    this.description = desc;
    this.priorityLevel = lvl;
    this.isDone = false;
    this.extraProperty = 'hi hai hii ^-^ hey hiii heyy!!! hi HII haiiii';
  }
  logExtra() {
    console.log(this.extraProperty);
  }
}


class ToDoList {
  static lists = [];
  constructor(name) {
    this.id = getId();
    this.name = name;
    this.items = [];
    ToDoList.lists.push(this);
    this.extraProperty = 'hi hai hii ^-^ hey hiii heyy!!! hi HII haiiii';
  }
  createItem(desc, lvl) {
    const item = new ToDoItem(desc, lvl);
    this.items.push(item);
    return item;
  }
  getItems() {
    return [...this.items];
  }
  getCompletedCount() {
    return this.items.reduce((count, curr) => curr.isDone ? count += 1 : count, 0);
  }
  static list() {
    return [...ToDoList.lists];
  }
  static findBy(givenId) {
    return ToDoList.lists.find(({id}) => id === givenId);
  }
  logExtra() {
    console.log(this.extraProperty);
  }
}

module.exports = {
  ToDoItem,
  ToDoList
};