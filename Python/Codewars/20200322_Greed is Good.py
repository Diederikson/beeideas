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
import collections


def score(dice):
    #kunnen 3 enen?
    #kunnen 3 zessen?
    #etc
    #tel op rest erbijiijij
    #return
    pass
a=[5,1,3,4,1]
b=[1,1,1,3,1]
c=[2,4,4,5,4]

counter=collections.Counter(a)
print(counter)
