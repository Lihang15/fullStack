//層序

function TreeNode(val) {
    this.val = val
    this.left = null
    this.right = null
}

function rowPrint(root) {
    let queue = []
    queue.push(root)
    while (queue.length > 0) {
        let node = queue.shift()
        console.log(node.val)
        if (node.left != null) {
            queue.push(node.left)
        }
        if (node.right != null) {
            queue.push(node.right)
        }
    }
}

let node = new TreeNode(1)
let node1 = new TreeNode(2)
let node2 = new TreeNode(3)
let node3 = new TreeNode(4)
let node4 = new TreeNode(5)
node.left = node1
node.right = node2
node2.left = node4
node2.right = node3
rowPrint(node)