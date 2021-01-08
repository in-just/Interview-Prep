function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
};

function BinarySearchTree() {
    this.insert = function (root, data) {
        if (root === null) {
            this.root = new Node(data);
            return this.root;
        }

        if (data <= root.data) {
            if (root.left) {
                this.insert(root.left, data);
            } else {
                root.left = new Node(data);
            }
        } else {
            if (root.right) {
                this.insert(root.right, data);
            } else {
                root.right = new Node(data);
            }
        }
        return this.root;
    };

    this.getHeight = function(root) {
        if (root === null) {
            return -1;
        }
        return 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
    };
};

let input = "7 3 5 2 1 4 6 7";
let input1 = input.split(' ');

console.log(input1);

