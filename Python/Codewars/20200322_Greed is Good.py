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
#. collections gebruikt: is een subclass van dictionary
#  zie: docs.python.org
#. elements is veelbelovend: geeft een array terug met
#  elk element zovaak als het is geteld
#. idee itereren. Merk ook op dat er maar 1 getal 3 x kan
#. voorkomen. Dus how about a testcase 
#---
#import collections as col: deez is niet nodig
import numpy as np

def score(dice):
    

    #Compute 3 or more eyes
    #def compute_eyes(ey):
    #    return (de score van 3) plus de score van de resterende
    #    (zo die er al is). Kunnen 100 zijn voor een (elke?) 1
    #    Kunnen 50 zijn voor een (elke?) 5
    #return
    pass

a=[5,1,3,4,1]
b=[1,1,1,3,1]
c=[2,4,4,5,4]

#counter=col.Counter(b)
y=np.array(b)
print(y,b)
print((y==1).sum())
print((y==2).sum())
print((y==3).sum())
print((y==4).sum())
print((y==5).sum())
print((y==6).sum())

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
