# Source :
# Author : Andrew Jarrett
# Date   : 2018-09-21
# Hint   : https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book-Z-H-11.html#%_sec_1.2.4

'''
In this kata you will have to calculate fib(n) where:

    fib(0) := 0
    fib(1) := 1
    fin(n + 2) := fib(n + 1) + fib(n)

Write an algorithm that can handle n up to 2000000.

Your algorithm must output the exact integer answer, to full precision. Also, it must correctly handle negative numbers as input.
'''

'''
If n is even then k = n/2:
F(n) = [2*F(k-1) + F(k)]*F(k)

If n is odd then k = (n + 1)/2
F(n) = F(k)*F(k) + F(k-1)*F(k-1)
'''

'''
HINT I: Can you rearrange the equation fib(n + 2) = fib(n + 1) + fib(n) to find fib(n) if you already know fib(n + 1) and fib(n + 2)? Use this to reason what value fib has to have for negative values.
'''



n = 10
f = [0] * (n + 1)

def fib(n):
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

    return f[n]


print(fib(n)) # 55

# [0, 0]
