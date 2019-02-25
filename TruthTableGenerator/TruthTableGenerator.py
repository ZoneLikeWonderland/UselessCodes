import re


class newbool(object):
    def __init__(self, x: bool):
        self.v = bool(x)

    def __neg__(self):
        # nagation
        return newbool(not self.v)

    def __mul__(self, r):
        # conjunction
        return newbool(self.v and r.v)

    def __add__(self, r):
        # disjunction
        return newbool(self.v or r.v)

    def __and__(self, r):
        # implication
        if self.v and not r.v:
            return newbool(False)
        return newbool(True)

    def __or__(self, r):
        # bi-implication
        return newbool(self.v == r.v)

    def __str__(self):
        return str(self.v)


T = newbool(True)
F = newbool(False)

inputstr = input("Input formula(using ¬ ∧ ∨ → ↔)\n")

word = list()
for iii in re.findall(r"\w+", inputstr):
    if iii not in word and iii not in {"T","F"}:
        word.append(iii)
        print(iii, end="\t")
print(inputstr)
print("-"*8*(len(word)+1))

inputstr = inputstr.replace("¬", "-").replace("∧", "*").replace("∨",
                                                                "+").replace("→", "&").replace("↔", "|")

for iii in range(2**len(word)):
    crt = bin(iii)[2:].zfill(len(word))
    crt = crt.replace("0", "F").replace("1", "T")
    for jjj in crt:
        print(jjj, end="\t")
    for jjj in range(len(word)):
        exec(word[jjj]+"="+crt[jjj])
    print(eval(inputstr))
