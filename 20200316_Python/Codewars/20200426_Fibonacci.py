#Memoizing Fibonacci | Codewars
#---------------------------------------------------------------
# Fibonacci functie is bronnen intensief, door recursie
# en door dubbele berekeningen. door tussenresulaten op te slaan
# en die te hergebruiken bij de berekeningen kan een efficiency
# slag behaald worden. Een waarde moet dus in eerste instantie
# opgezocht worden en dan eventueel berekend (en opgeslagen)
#---------------------------------------------------------------
# DJO B.20200507|08:39 - T[
# via https://www.timeanddate.com/date/timeduration.html
#---
#Takeaway:
# Je returnt een bestaande waarde (als die er is ) of je
# roept de functie aan om die waarden te generen/op te slaan
#---
# De relatie tussen de index en de waarde
# enfin, aardig opgetuigd. Maar nu het vervolg.
#---
# recursief aanroepen is voorwaardelijk dat doe je alleen als
# de gevraagde waarde niet in mem zit
# brainfreeze het is een index of het is een waarde
#---
# end en sep parameters bij print. End geeft alternatief voor newline en
# sep geeft aan wat er tussen de kommas komt (normaal een space)
#---
#
#
def fibonacci(n):
    mem=[]
    def calc(n):
        if n in [0,1]:
            return n
        if n in mem:
            return mem[n]        
        mem.append(n)
        print(mem)
        return calc(n - 1) + calc(n - 2)
    return calc(n)
    

def fibonacci2(n):
    if n in [0, 1]:
        return n
    print(n," ", n-1," ",n-2," (",2*n-3,") ",end="|",sep='')
    return fibonacci2(n - 1) + fibonacci2(n - 2)

while True:
    fib=int(input('geef een getal'))
    print(fibonacci(fib),'fib')
    print(fibonacci2(fib),'chck')
