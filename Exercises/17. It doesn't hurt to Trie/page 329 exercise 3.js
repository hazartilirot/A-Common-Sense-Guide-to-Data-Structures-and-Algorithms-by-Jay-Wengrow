class TrieNode {
	#children = {}
	
	get children() { return this.#children }
	set children(value) { this.#children = vaule }
}

class Trie {
	#root
	constructor() {
		this.#root = new TrieNode();
	}
	
	insert(word) {
		let currentNode = this.#root;
		
		for (const char of word) {
			
			if (!currentNode.children[char])
				currentNode.children[char] = new TrieNode();
			
			currentNode = currentNode.children[char];
		}
		currentNode.children['*'] = null;
	}
	
	printoutNodes(node = this.#root) {
		let currentNode = node
		
		for (const [key, childNode] of Object.entries(currentNode.children)) {
			console.log(key + " ")
            if (key !== "*") this.printoutNodes(childNode);
		}
	}
}

const trie = new Trie();

trie.insert('ace');
trie.insert('act');
trie.insert('bad');
trie.insert('bake');
trie.insert('bat');
trie.insert('batter');
trie.insert('cab');
trie.insert('cat');
trie.insert('catnap');
trie.insert('catnip');

trie.printoutNodes();