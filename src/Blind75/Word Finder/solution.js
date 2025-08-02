class TrieNode {
  constructor() {
    this.dict = {};
    this.isEndOfWord = false;
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

export default class WordFinder {
  constructor() {
    this.root = new TrieNode();
  }
  /**
   * @param {string} word
   */
  addWord(word) {
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
    const node = this.searchNode(word, this.root);
    return node && node.isEndOfWord;
  }

  /**
   * @param {string} prefix
   * @returns {TrieNode | boolean}
   */
  searchNode(prefix, root) {
    let node = root;
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (char === '.') {
        const children = Object.keys(node.dict);
        for (const child of children) {
          const childNode = node.get(child);
          const result = this.searchNode(prefix.substring(i + 1), childNode);
          if (result && result.isEndOfWord) return result;
        }
        return false;
      }
      if (!node.has(char)) {
        return false;
      }
      node = node.get(char);
    }
    return node;
  }
}
