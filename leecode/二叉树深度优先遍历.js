function Node(val){
    this.val = val
    this.left =null
    this.right = null
}

//深度优先遍历  先序
let before_dfs = function (nodes) {
    let result = [];
    let stack = [];
    stack.push(nodes);
    while(stack.length) { // 等同于 while(stack.length !== 0) 直到栈中的数据为空
        let node = stack.pop(); // 取的是栈中最后一个j
        result.push(node.val);
        if(node.right) stack.push(node.right); // 先压入右子树
        if(node.left) stack.push(node.left); // 后压入左子树
    }
    return result;
}

//深度优先遍历  后序
let after_dfs = function (nodes) {
    let result = [];
    let stack = [];
    stack.push(nodes);
    while(stack.length) { // 等同于 while(stack.length !== 0) 直到栈中的数据为空
        let node = stack.pop(); // 取的是栈中最后一个j
        result.unshift(node.val);
        if(node.left) stack.push(node.left); // 先压入左子树
        if(node.right) stack.push(node.right); // 后压入右子树
        
    }
    return result;
}

//中序遍历
function inorderTraversal(root) {
    const result = [];
    const stack = [];
    let currentNode = root;

    while (currentNode !== null || stack.length > 0) {
        // 遍历左子树并将节点压入栈中
        while (currentNode !== null) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        }

        // 弹出栈顶节点并存入结果数组
        currentNode = stack.pop();
        result.push(currentNode.val);

        // 处理右子树
        currentNode = currentNode.right;
    }

    return result;
}

//递归实现 中序
function inorderTraversal(root) {
    const result = [];

    function traverse(node) {
        if (node !== null) {
            // 遍历左子树
            traverse(node.left);
            // 将节点值存入结果数组
            result.push(node.val);
            // 遍历右子树
            traverse(node.right);
        }
    }

    traverse(root);
    return result;
}
let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)
node1.left = node2
node2.left=node3
node2.right = node4
node1.right = node5
console.log(after_dfs(node1))