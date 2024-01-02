function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function mirrorTree(root) {
    if (!root) return null;

    // 交换当前节点的左右子树
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    // 递归处理左右子树
    mirrorTree(root.left);
    mirrorTree(root.right);

    return root;
}