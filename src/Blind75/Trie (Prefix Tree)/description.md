A trie (pronounced "try"), also known as a prefix tree, is a tree-like data structure designed to efficiently manage and query strings. It's particularly useful for tasks such as autocomplete and spell checking.

Implement a Trie class with the following methods:

insert(word: string): void: Adds the given word to the Trie
search(word: string): boolean: Checks if the specified word exists in the trie and returns true if it does, otherwise false
startsWith(prefix: string): boolean: Checks if there is any word in the Trie that starts with the given prefix and returns true if such a word exists, otherwise false
Input
The Trie instance will have its methods called with various parameters based on these:

methods: string[]: An array of Trie method names
params: string[]: An array of strings
methods[i] will be called with params[i].

Examples

Input: methods = ["insert","insert","search","startsWith","insert","search","startsWith"], params = ["car","care","car","cap","card","cast","car"]
Output: [null,null,1,0,null,0,1]
Explanation: The words 'car' and 'care' are inserted. 'search' for 'car' finds it, and 'startsWith' for 'cap' returns 0. 'card' is then inserted. 'search' for 'cast' does not find it. 'startsWith' finds 'car'
Input: methods = ["insert","insert","search","startsWith","insert","search","startsWith"], params = ["dog","doge","dog","do","door","doge","doc"]
Output: [null,null,1,1,null,1,0]
Explanation: Words 'dog' and 'doge' are inserted. 'search' finds 'dog' and 'startsWith' finds 'do'. After 'door' is inserted, 'search' finds 'doge'.'startsWith' do not finds 'doc'
Input: methods = ["insert","insert","startsWith","insert","search","search","startsWith"], params = ["banana","band","ban","bandit","band","banana","ban"]
Output: [null,null,1,null,1,1,1]
Explanation: 'banana' and 'band' are inserted. 'startsWith' finds 'ban'. After 'bandit' is inserted, both 'band' and 'banana' can be found. 'startsWith' finds 'ban'.
Constraints
1 <= word.length <= 100
1 <= prefix.length <= 100
word and prefix contain only lowercase English letters
1 <= methods.length <= 1000
