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
	
	search(word) {
		let currentNode = this.#root;
		
		for (const char of word) {
			if (currentNode.children[char]) {
				currentNode = currentNode.children[char]
			} else {
				return null;
			}
		}
		return currentNode;
	}
	
	collectAllWords(node = null, word = '', words = []) {
		const currentNode = node || this.#root;
        
		for (const [key, childNode] of Object.entries(currentNode.children)) {
			(key === "*")
                ? words.push(word)
                : this.collectAllWords(childNode, word + key, words)
		}
      return words
	}
	
	autocomplete(prefix) {
		let currentNode = this.search(prefix);
		return currentNode ? this.collectAllWords(currentNode, prefix) : null
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

/*search returns the last node*/
const lastNode = trie.search('ca')
console.log(JSON.stringify(lastNode.children))

/*collectAllWords returns all words in a collection*/
console.log(trie.collectAllWords());

/*returns all the following suggestions*/
console.log(trie.autocomplete('ca'));