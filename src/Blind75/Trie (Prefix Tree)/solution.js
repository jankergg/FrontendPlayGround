class TrieNode {
  dict = {};
  isEndOfWord = false;
  constructor(char) {
    if (char) {
      this.dict[char] = {};
    }
  }
  add(char) {
    if (!this.dict[char]) {
      this.dict[char] = new TrieNode()
    }
  }
  get(char) {
    return this.dict[char];
  }
  has(char) {
    return this.dict[char] !== undefined
  }
  setEnd() {
    this.isEndOfWord = true;
  }
}

export default class Trie {
  constructor() {
    this.root = new TrieNode()
  }
  /**
   * @param {string} word
   */
  insert(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!node.has(char)) {
        node.add(char)
      }
      node = node.get(char);
    }
    node.setEnd()
  }

  /**
   * @param {string} word
   * @returns {boolean}
   */
  search(word) {
    const node = this.searchPrefix(word);
    return !!node && node.isEndOfWord;
  }

  /**
   * @param {string} prefix
   * @returns {boolean}
   */
  startsWith(prefix) {
    return !!this.searchPrefix(prefix);
  }

  /**
   * @param {string} prefix
   * @returns {TrieNode | undefined}
   */
  searchPrefix(prefix) {
    let node = this.root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!node.has(char)) {
        return;
      }
      node = node.get(char);
    }
    return node;
  }
}
