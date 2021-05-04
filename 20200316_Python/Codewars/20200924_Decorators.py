"""
Hai. This time we are tokkin about decorators
En het is lastig omdat we vanuit ray-basic
gewend zijn dat functies en methodes (in Java)
als argumenten getallen (primitieven) danwel variabelen
nemen. dus
"""
def plus_one(number):
    return number+1

"""
if you ray this
(en ik hoop nu eindelijk eens door te pakken
naar voorbij hello world x1000) nutting heppens yet
Maar de grap van Python is dat ones runned
al die dingen in het gehuegen blijven en bevraagbaar
zijn in de shell.
dus je kan in de shell doen plus_one(5) en dan krijg je 6
Nu is het zo dat functies First Class Citizens zijn in Python
Ze kunnen toegekend worden en ze kunnen als parameter meegegeven worden
aan (higher-order) functies e.g.:
"""
# Python program to illustrate functions
# can be passed as arguments to other functions
def shout(text,number):
    return text.upper() + str(number)
def whisper(text):
    return text.lower()
def greet(funci):
#storing the function in a variable
#   greeting = funci
    print (funci)     
greet(shout("hello",2))
greet(whisper("Hi there"))
# Python program to illustrate functions
# can be treated as objects
def shout(text):  
    return text.upper()      
print (shout('Hello')) 
yell = shout 
print (yell('Helllo'))
#Morgeb verderb
