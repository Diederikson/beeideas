#ROT-13 | Codewars
#invoer is alleen A-Z a-z en 0-9
#alle andere karakters moeten gewoon ongefilterd door.
#DJO20200318
#---
#Takeaway: Best lastige opdracht. Vastgezeten op gebruiken modulo.
#Terwijl dat helemaal niet hoeft. Vreemd dat het werkt met een
#combi van +13 en -13. Nog een handige ascii lijst tot slot:
#0 1 2 3 - 48 49 50 51 52 53 54 55 56 57 
#A B C D - 65 66 67 68 ... 90
#a b c d - 97 98 99 100 ... 122

def rot_upper(s):
    if ord(s)<=77: return chr(ord(s)+13)
    return chr(ord(s)-13)

def rot_lower(s):
    if ord(s)<=109: return chr(ord(s)+13)
    return chr(ord(s)-13)

def code_it(s):
    if ord(s)>=65 and ord(s)<=90: return rot_upper(s)
    if ord(s)>=97 and ord(s)<=122: return rot_lower(s)
    return s

#testloop, voor inleveren return gebruiken
while True:
    ui=input("geeft string? ")

    rs= "".join([code_it(c) for c in ui])
    print (rs)



