// Source : https://www.codewars.com/kata/54da539698b8a2ad76000228
// Author : Andrew Jarrett
// Date   : 2018-08-23

def isValidWalk(walk):
    gps = {
        's': [0, -1],
        'n': [0,  1],
        'w': [-1, 0],
        'e': [ 1, 0],
    }
    x, y = 0, 0
    if len(walk) != 10:
        return False 
    for step in walk:
        x = x + gps[step][0]
        y = y + gps[step][1]
    return x == 0 and y == 0
        
