#Greed is Good | Codewars
#invoer is een array van 6 cijfers
#daar moet een score uitkomen volgens deze tabel:
#Three 1's => 1000 points
#Three 6's =>  600 points
#Three 5's =>  500 points
#Three 4's =>  400 points
#Three 3's =>  300 points
#Three 2's =>  200 points
#One   1   =>  100 points
#One   5   =>   50 point
#voorbeelden:
#Throw       Score
#---------   ------------------
#5 1 3 4 1   50 + 2 * 100 = 250
#1 1 1 3 1   1000 + 100 = 1100
#2 4 4 5 4   400 + 50 = 450
#DJO20200322|11:04
#---
#Takeaway:
# x collections uiteindelijk niet gebruikt:
#   is een subclass van dictionary
#   zie evt: docs.python.org
#---
# . elements is veelbelovend: geeft een array terug met
#   elk element zovaak als het is geteld
#---
# . idee itereren. Merk ook op dat er maar 1 getal 3 x kan
#   voorkomen. Dus how about a testcase 
#---
# . print((y==1).sum()) # tel Trues in het equals array
# . y=y[y==1] # bewaar alle enen! -> nieuw array!
# . y=y[y!=1] # haal de enen eruit
#---
# v

import numpy as np

def score(dice):
    y=np.array(dice)
    result=0
    #for x in range(1,6): Nee, eerst maar es eentje proberen.
    result=(y==1).sum()
    if result>=3:
        result=1000+result-3
    return result

    #Compute 3 or more eyes
    #def compute_eyes(ey):
    #    return (de score van 3) plus de score van de resterende
    #    (zo die er al is). Kunnen 100 zijn voor een (elke?) 1
    #    Kunnen 50 zijn voor een (elke?) 5
    #return
    # bruikbare methodes
    # .sum() telt arrayelementen bij elkaar op
    # equals operator op array (==) true als erin false als niet
    # voor elk element in de array. Returns arrau met T en F
    # True heeft als waarde 1, dus op die manier kan je
    # elementen met een bepaalde waarde tellen.
    pass

a=[5,1,3,4,1]
b=[2,1,1,2,2]
c=[2,4,4,5,4]

print(score(b))

#probe machen met Lambdafunctie: het idee is dat elk getal dezelfde
#behandeling krijgt met iets andere puntentelling
#telling(5)
#~Zie Anki voor verder (Lambda Greed is Good)
#Of zoiets als
#we fietsen door alle cijfers heen
#als een cijfer 3 of meer keer voorkomt
#roepen we een hendy functie aan die te telling teuggeeft
#zo niet dan tellen we het aantal punten 'gewoon' op
#en retourneren het resultaat
#
#hoe weet je dan of het er méér dan drie zijn?
#je kan ze tellen en dan kijken of er drie af te trekken zijn 
