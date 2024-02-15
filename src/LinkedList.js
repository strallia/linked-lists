import { Node } from './Node';

export class LinkedList {
  list = // null;
    {
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
      this.list = { head: new Node(value) };
    } else {
      let tmp = this.list.head;
      while (tmp.next) {
        tmp = tmp.next;
      }
      tmp.next = new Node(value);
    }
    return this.list;
  }

  prepend(value) {
    if (!this.list) {
      this.append(value);
    } else {
      const curHead = this.list.head;
      this.list.head = new Node(value, curHead);
    }
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

  head() {
    if (!this.list) return null;
    return this.list.head;
  }

  tail() {
    if (!this.list) return 'ERROR: No nodes in list.';
    let pointer = this.list.head;
    while (pointer.next) {
      pointer = pointer.next;
    }
    return pointer;
  }

  at(index) {
    if (!this.list) return null;
    let pointer = this.list.head;
    let curIndex = 1;
    while (curIndex < index) {
      pointer = pointer.next;
      curIndex += 1;
    }
    return pointer;
  }

  pop() {
    if (!this.list) return 'ERROR: No nodes to remove.';
    let prevPointer = null;
    let curPointer = this.list.head;
    while (curPointer.next) {
      prevPointer = curPointer;
      curPointer = curPointer.next;
    }
    prevPointer.next = null;
    return this.list;
  }

  contains(value) {
    if (!this.list) return 'ERROR: No nodes.';
    let pointer = this.list.head;
    while (pointer) {
      if (pointer.value === value) return true;
      pointer = pointer.next;
    }
    return false;
  }
}
