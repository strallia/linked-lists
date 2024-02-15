import { Node } from './Node';

export class LinkedList {
  list = {
    head: {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: null,
        },
      },
    },
  };

  append(value) {
    if (!this.list) {
      this.list = { head: null };
      this.list.head = new Node(value);
    }

    let tmp = this.list.head;
    while (tmp.next) {
      tmp = tmp.next;
    }
    tmp.next = new Node(value);

    return this.list;
  }

  prepend(value) {
    // TODO: cover case for when list = null
    const curHead = this.list.head;
    this.list.head = new Node(value, curHead);
    return this.list;
  }

  size() {
    if (!this.list) return 0;

    let pointer = this.list.head;
    let counter = 1;
    while (pointer.next) {
      counter += 1;
      pointer = pointer.next;
    }
    return counter;
  }
}
