"""
Yo! Twerug van weggeweest. Als het gaat om je innerlijke stem te volgen
Heb ik nog wel een probleem (of uitdaging): ik hoor niks! Maar voor nu wil
ik heel graag memoization snappen en dat ook kunnen toepassen.
Hier is een stuk code van de bepsait pythpn-course.eu (/python3_memoization.php)
#-------------------------------------------------------------------------------
# DJO202103210824
# via https://www.python-course.eu/python3_memoization.php
# https://pythoncursus.nl/decorators-python/
# https://stackoverflow.com/questions/739654/how-to-make-function-decorators-and-chain-them-together/1594484#1594484
#---
# Takeaway: je pakt de functie in in de decorator.
# Met de hand ziet dat er zo uit.
# Er spelen 2 dingen: decorators, dat zijn callables die een callable teruggeven en
# Memoization, een pattern om functie uitkomsten te hergebruiken zodat op 
#---
"""
def memoize(fe):
    memo = {}
    def helper(x):
        if x not in memo:            
            memo[x] = fe(x)
        return memo[x]
    return helper
    

@memoize
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

# Dit is het feitelijke inpakken, en het doet me denken aan formele en actuele parameters
# ik heb er ff memoiz van gemaakt om te checken dat memoize geen reserved word is
# so to speak. En dat is het niet (mag dus gewoon memoize zijn)
# Ziehier de kleuternotatie (zonder (@decorator) (ff commenten en uncommenten enzo)
# fib = memoize(fib)
# Let u ook even op r.22 return helper!
#ik probeer 
print(fib(40))

