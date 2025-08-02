Implement WordFinder class that allows for adding words and searching for them. It has the following methods:

addWord(word: string): Adds a word to the data structure
search(query: string): Checks if any added word matches the given word. The query can include dots ., which can match any letter
Input
The WordFinder instance will have its methods called with various parameters based on these:

methods: string[]: An array of method names
params: string[]: An array of strings
methods[i] will be called with params[i].

Examples

Input: methods = ["addWord","addWord","search","addWord","search","search","search"], params = ["car","cat","c.r","dog","d.g","cat","c.."]
Output: [null,null,true,null,true,true,true]
Explanation: Words 'car' and 'cat' are added, 'c.r' matches 'car', 'dog' and 'd.g' match, 'c..' matches both 'car' and 'cat'.
Input: methods = ["addWord","addWord","addWord","search","search","addWord","search"], params = ["hello","hollow","hollow","hell","hel.o","hero","h.o."]
Output: [null,null,null,false,true,null,false]
Explanation: The words 'hello', 'hollow' are added, 'hell' doesn't exist, 'hel.o' matches 'hello', 'hero' is added, 'h.o.' does not match with any other word.
Input: methods = ["addWord","search","addWord","search","addWord","search","search"], params = ["bat","b.t","ball","ba.l","bat","b.ll","ball"]
Output: [null,true,null,true,null,true,true]
Explanation: Words 'bat' and 'ball' are added, 'b.t' matches 'bat', 'ba.l', 'b.ll' and 'ball' match 'ball'.
Constraints
1 <= word.length <= 25
1 <= methods.length <= 1000
Search queries may include . and lowercase English letters, with at most 2 dots per query
Each word contains only lowercase English letters
