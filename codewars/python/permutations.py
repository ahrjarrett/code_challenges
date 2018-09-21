# Source : https://www.codewars.com/kata/permutations/train/python
# Author : Andrew Jarrett
# Date   : 2018-09-21

# Implementation based on Heap's algorithm:
# https://en.wikipedia.org/wiki/Heap%27s_algorithm

def swap(i, n, A):
    print('in swap')
    print('i:',i)
    print('n:',n)
    print('swapping', A[i], 'for', A[n], 'in', A)

    A[i], A[n] = A[n], A[i]
    return A

def generate_permutations(items, n):
    if n == 0: yield items
    else:
        for i in range(n - 1):
            yield from generate_permutations(items, n - 1)
            if i % 2 == 0:
                swap(i, n - 1, items)
            else:
                swap(0, n - 1, items)
        yield from generate_permutations(items, n - 1)

def permutations(string):
    items = list(string)
    result = []
    perms = yield from generate_permutations(items, len(items))
    for perm in perms:
        result.append(perm)
    return result


# arr = [0,1,2,3,4,5,6,7]
# print(swap(2, 7, arr))

print(permutations('aabb'))

# for p in permutations('aabb'):
#     print(p) # => ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
