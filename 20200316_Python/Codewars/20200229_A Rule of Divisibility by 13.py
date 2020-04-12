#Delers van dertien
#DJO 20200301

def get_digit(num):
    a.clear()
    som=0
    if num >=10:
        get_digit(num // 10)
    a.append(num % 10)
    for i in range(len(a)):    
        som += b[i%len(b)]*a[len(a)-i-1]
    return(som)

# main 
a=[]
b=[1,10,9,12,3,4]
som,compare=0,0
#getal =int(input('kunt u een getal in mijn gehuegen geven ? '))
som=get_digit(getal)
while (som != compare):
        compare = som
        som=get_digit(som)
print(som)
    
