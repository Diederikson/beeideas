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
#DJO B.20200322|11:04 - E.20200420|10:32 D.28d23h28m
# via https://www.timeanddate.com/date/timeduration.html
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
# . Een variabele ge-init met rechte haken en cijfers lijkt
# . een array te zijn maar is dat _Niet. Het is een list
# . Python werkt default met lists. Wil je een array creeren
# . dan doe je dat het beste met numpy.array (zie r. 45)
# . Optimalisatie: we maken nu het array kleiner door 
# . de triple ogen er uit te halen. Netter is het om het
# . array onveranderd te laten. wat je dan moet tellen zijn
# . de voorkomens van 1 / 5 . Dat doen we nog. Ooit
# . Beuargh. Test werken niet goed. Met het verwijderen van
# . alle gelijke waarden uit het array verrlies je een
# . mogelijke telling van 1 of 2 enen of vijven.
# . opgelost door in de iteratie de losse 1en en 5en te tellen
# . Zie r. 62.

import numpy as np

def score(dice):
    result=0
    scoreTable=np.array([1000,200,300,400,500,600])
    scoreOneFive=np.array([100,0,0,0,50,0])
    diceArray=np.array(dice)
    
    for x in range(1,6):
        sameEyes=(diceArray==x).sum()
        if sameEyes >=3:
            result+=scoreTable[x-1]
            result+=scoreOneFive[x-1]*(sameEyes-3)
            diceArray=diceArray[diceArray!=x]
    result+=(diceArray==1).sum()*100
    result+=(diceArray==5).sum()*50
    return result
    
a=[1,1,5,5,6]
b=[4,4,4,3,3]
c=[2,4,4,5,4]

print('Score', score(a), score (b), score(c))
