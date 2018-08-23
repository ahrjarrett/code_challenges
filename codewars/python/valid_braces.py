# Source : https://www.codewars.com/kata/valid-braces/train/
# Author : Andrew Jarrett
# Date   : 2018-08-23

def validBraces(exp):
    openers = '([{'
    closers = ')]}'
    brace_map = dict(zip(openers, closers))
    
    queue = []
    
    for letter in exp:
        if letter in openers:
            queue.append(brace_map[letter])
        elif letter in closers:
            if not queue or letter != queue.pop():
                return False
        
    return not queue


# alternate solution:
def alt_validBraces(string):
    braces = {"(": ")", "[": "]", "{": "}"}
    stack = []
    for character in string:
        if character in braces.keys():
            stack.append(character)
        else:
            if len(stack) == 0 or braces[stack.pop()] != character:
                return False
    return len(stack) == 0  
