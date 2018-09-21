# Source :
# Author : Andrew Jarrett
# Date   : 2018-09-21

'''
In this kata you will have to calculate fib(n) where:

    fib(0) := 0
    fib(1) := 1
    fin(n + 2) := fib(n + 1) + fib(n)

Write an algorithm that can handle n up to 2000000.

Your algorithm must output the exact integer answer, to full precision. Also, it must correctly handle negative numbers as input.
'''

# Hint   : https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book-Z-H-11.html#%_sec_1.2.4


# initialize f for 2 million capacity:
f = [0] * 2000000

def fib(n):
    # flag for if negative
    negative = True if n < 0 else False
    n = abs(n)

    if n == 0:
        return 0
    if n == 1 or n == 2:
        f[n] = 1
        return f[n]
    if f[n]:
        return f[n]

    k = n // 2 if n % 2 == 0 else (n + 1) // 2

    if n % 2 == 0:
        f[n] = (2 * fib(k-1) + fib(k)) * fib(k)
    else:
        f[n] = (fib(k) * fib(k) + fib(k-1) * fib(k-1))

    # if n was originally negative & also even, negate f[n] for solution
    if negative and n % 2 == 0:
        return -(f[n])
    return f[n]

print(fib(10))      # 55
print(fib(-20))     # -6765
print(fib(1000000)) # BIG ASS NUMBER
