function connect(root) {
  if (!root) return root;
  let levelStart = root;
  while (levelStart) {
    let curr = levelStart;
    while (curr) {
      if (curr.left) curr.left.next = curr.right;
      if (curr.right && curr.next) curr.right.next = curr.next.left;
      curr = curr.next;
    }
    levelStart = levelStart.left;
  }
  return root;
}
