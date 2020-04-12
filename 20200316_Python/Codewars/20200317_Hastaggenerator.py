#Codewars: Hastag generator
#contvert given string to camelcase, stripping spaces
#DJO20200317
#import string
def generate_hashtag(s):
    result=False
    if len(s)>0 and len(s)<140:
        result="#"+s.title().replace(" ","")
    return result


ht="dt we maar hopen dat we aan  dit is de     zender  van illegale joop"
print(generate_hashtag(ht))
