

function Node(data) {
    this.val = data;
    this.left = null;
    this.right = null;
};

function createTree(str) {
	console.log(str)
	if (str.trim() === "") {
		return null;
	}
	return deserialize(str.trim())
}



var deserialize = function(data) {
     var nodes = data.split(" ");
     return addNode(0).node;
 
     function addNode(i){
         if(nodes[i] !== undefined && nodes[i] !== "" && nodes[i] !== '#'){
             var root = new Node(parseInt(nodes[i]));
             i++;
             var res = addNode(i);
             i = res.i;
             root.left = res.node;
             res = addNode(i);
             i = res.i;
             root.right = res.node;
             return {node : root, i : i};
         }else{
             return {node : null, i : ++i};
         }
     }
 };


function printInorder(root) {
	if (root) {
	printInorder(root.left)
	//console.log(root.val)
    process.stdout.write(root.val+" ")
	printInorder(root.right)
	}
}

   // var r = createTree(_str);
    //console.log(r.val)
    //printInorder(r)