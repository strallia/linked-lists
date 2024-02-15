import { Node } from './Node';

export class LinkedList {
  list = null;

  append(value) {
    if (!this.list) {
      this.list = { head: null };
      this.list.head = new Node(value);
    }

    // TODO: append value to end of list when list is not empty.
    // Requires write traversing method.
    return this.list;
  }
}
