Given an integer array coins indicating different coin denominations and an integer target denoting a total sum of money, return the minimum number of coins needed to make up the target. If it's not possible to make up the target with any combination of the coins, return -1.

Assume there's an infinite supply of each coin.

Input
coins: number[]: An array of integers
target: number: An integer
Examples

Input: coins = [3,7,4], target = 14
Output: 2
Explanation: We can form the target amount (14) using the following combination of coins: 7 + 7. This requires a minimum of 2 coins.
Input: coins = [1], target = 0
Output: 0
Explanation: The target amount is 0, which requires no coins to reach. Even though there's only a 1 coin available, you can still form 0 using no coins.
Input: coins = [2], target = 3
Output: -1
Explanation: The only available coin denomination is 2. However, it's impossible to form the target amount (3) using just multiples of 2. Therefore, no combination of coins can reach 3, and the output is -1.
Constraints
1 <= coins.length <= 12
1 <= coins[i] <= 1,000,000
0 <= target <= 10,000
