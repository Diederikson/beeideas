#RGB To Hex Codewars
#DJO20200302
# Input halen we er af bij inleveren


r=int(input('r ?'))
g=int(input('g ?'))
b=int(input('b ?'))

#Borderchecks
if r < 0: r=0
if r >255: r=255
if g < 0: g=0
if g >255: g=255
if b < 0: b=0
if b >255: b=255

#concatenation
print(hex(r).replace('x','0')[-2:]+hex(g).replace('x','0')[-2:]+hex(b).replace('x','0')[-2:])

