"""
YO! Triple Quotes is here to stay!
#Memoizing Fibonacci | Codewars
#---------------------------------------------------------------
# Fibonacci functie is bronnen intensief, door recursie
# en door dubbele berekeningen. door tussenresulaten op te slaan
# en die te hergebruiken bij de berekeningen kan een efficiency
# slag behaald worden. Een waarde moet dus in eerste instantie
# opgezocht worden en dan eventueel berekend (en opgeslagen)
#---------------------------------------------------------------
# DJO B.20200507|08:39 - E.20200831|16:47 D.116d8h8
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
# En fuckme over. Een hele lap commentaar weer pleite. Wat een
# enorm gekloot is dit toch. Ik heb de recursie uitgezocht gisteren
# (en ben dus de aantekeningen kwijt). De belangrijkste bevinding
# is dat de eerste functie van regel 40 net zolang wordt aange
# roepen totdat die returnt. Dan komt de tweede functie pas in
# in beeld. Ruckzooi. Menfin youptjoep het nog maar een keer
# Er is overigens geen behoorlijk joeptjoep te vinden. Maarrr
# Zoeken op animation Fibonacci recursion, levert een heel mooi
# animation op alwel hier:
# www.cs.usfca.edu/~galles/visualization/DPFib.html
# ---
# enfin ikke denk wij maak een dict met daarin de paren
# (getal, fibno) als key value
# Gekuh henkie. Dict gemaakt eerste twee waarden toegevoegd,
# maar nu is de vraag hoe vul je die met een tussen resultaat?
# ---
# 20200831 Je kan zeggen dat we hier wat lang over hebben gedaan,
# Maar dan nu toch een oplossing door de (recursieve) berekening van een
# uikomst eigenlijk nogmaals te doen (Als die uitkomst nog niet bestaat)
# Anders moet je de waarde uit het array teruggeven aan de hoofd
# fibberekening. En zorg dat je de beginwaarden niet allebij op 1 zet
# Dan klopt r geen fuck meer van. But not to worry
# Zoals te doen gebruikelijk werkt mijn oplossing niet in
# Codewars (timeout) en heb ik geen zin meer.
# NEXXXT
# ---
# Rustaaag. Ik heb welliswaar de handoek in de ring gegooid maar ik ga nog wel een
# Post mortem doen hiervan. Namelijk er is sprake van een decorator (de @ syntax)
# Wat is dat. En wat is de fout in mijn oplossing, want in de oplossingen
# van anderen zie ik weldegelijk (stukjes van) mijn code terug
# ennyway mijn oplossing blijft staan maar de correcte oplossing staat
# nu als derde (en is een beetje aangepast ook
# ---
# kom ik hier een heule tijd later (gewoon omdat ik weer es wat wil pielen)
# Zie ik de derder oplossing staan en dat lijkt nergens naar. Abandonned code
# of zo. Maar goed Codewars is er dus ook nog.
"""
memo = {}

def fibonacci_1(n):
    if n in [0, 1]:
        return n
    if n not in memo:
        memo[n] = fibonacci_1(n - 1) + fibonacci_1(n - 2)
    return memo[n]

#memoization is een sub-functie of inner functie of hoe het heeft
def fibonacci_2(n):
    mem={0:0,1:1} 
    def calc(n):
        if n not in mem:
            mem[n]=calc(n-1)+calc(n-2)
        return mem[n]
        print(mem)
    return calc(n)
    

def fibonacci_3(n):
    if n in [0, 1]:
        return n
    # print(n," ", n-1," ",n-2," (",2*n-3,") ",end="|",sep='')
    return fibonacci_3(n - 1) + fibonacci_3(n - 2)

while True:
    fib=int(input('geef een getal'))
    print(fibonacci_1(fib),'fib_1')
    print(fibonacci_2(fib),'fib_2')
    print(fibonacci_3(fib),'fib_3')
