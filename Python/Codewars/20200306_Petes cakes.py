#Pete the Baker
#DJO 20200314



# ga na of het 1x aftrekken van alle componenten elk mogelijk is
# ga na of het nx afrekken van alle componenten mogelijk is
# het makat niet uit welk component als eerste op is (<0) dan stopt alles
# in een while lus testen of bij aftrek componenten * 1, * 2, *n
# één van de componente onder 0 terucht komt, dan stopt het.
# niet aanwezige componemten zijn dan mogelijk meteen onder nul

#While (vooraad - n*componenten)> 0
#    n+=1
#return n



def cakes(recipe, available):
    n,erIsNog = 0,True
    while erIsNog:
        for x in recipe:
            if x in available and (available[x]-recipe[x])>=0:
                    available[x]-=recipe[x]
            else: erIsNog=False
        if erIsNog:n+=1
    return n
        

a={"flour": 1200, "sugar": 1200, "eggs": 5, "milk": 200}
r={"flour": 500, "sugar": 200, "eggs": 1}


print(cakes(r,a))
