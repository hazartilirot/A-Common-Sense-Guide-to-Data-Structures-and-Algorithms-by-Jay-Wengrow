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
	
	autocorrect(word) {
		let prefix = '';
		let currentNode = this.#root;
        let counter = 0;
		
		for (let char of word) {
			if (currentNode.children[char]) {
                prefix += char;
				currentNode = currentNode.children[char];
                counter++;
            } else if (!currentNode.children[char] && counter === 0) {
                return null
            } else {
                break;
			}
		}
        return (this.collectAllWords(currentNode, prefix));
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

/*"catna" is a prefix found in the dictionary. Only one matched word which is "catnap"*/
let result = trie.autocorrect('catnar');
console.log(result);
/*the prefix is "ca" so all words are returned from the dictionary*/
result = trie.autocorrect('caxasfdij');
console.log(result);
/*if a word doesn't exist in the dictionary the null is returned*/
result = trie.autocorrect('yes');
console.log(result);