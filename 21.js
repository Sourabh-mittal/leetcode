class Node {
  constructor(val) {
    this.val = null;
    this.next = null;
  }
}

const list1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null,
    },
  },
};
const list2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null,
    },
  },
};

class LinkedList {
  constructor() {}
}
var mergeTwoLists = function (list1, list2) {
  let list = new LinkedList();
  const listCurrNode = list;
  let listOneCurrNode = list1;
  let listTwoCurrNode = list2;
  console.log(listOneCurrNode);
  console.log(listTwoCurrNode);
  while (true) {
    if (listOneCurrNode.val > listTwoCurrNode.val) {
      const newNode = new Node(listTwoCurrNode.val);
      listCurrNode = newNode;
      listCurrNode = listCurrNode.next;
      listTwoCurrNode = listTwoCurrNode.next;
    } else {
      const newNode = new Node(listOneCurrNode.val);
      listCurrNode = newNode;
      listCurrNode = listCurrNode.next;
      listOneCurrNode = listOneCurrNode.next;
    }
    console.log(listOneCurrNode);
    console.log(listTwoCurrNode);
    if (listTwoCurrNode.next === null || listOneCurrNode.next === null) {
      console.log("list is over");
      return list;
    }
    if (listOneCurrNode.next === null && listTwoCurrNode) {
      console.log("list one is over");
      listCurrNode.next = listTwoCurrNode;
      return list;
    }
    if (listTwoCurrNode.next === null && listOneCurrNode) {
      console.log("list two is over");
      listCurrNode.next = listOneCurrNode;
      return list;
    }
  }
};

console.log(mergeTwoLists(list1, list2));
