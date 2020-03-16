#Anagrams
#De input is een woord en een lijst met woorden.
#de output is de selectie uit de lijst van woorden die een anagram van
#het input woord zijn.
#oplossingsrichting:
#ik itereer over de letters van het woord
#is de iter aanwezig in de lijst? streepweg:geenana!
#zijn alle letters op?klaar:geenana!

#DJO 20200316

def anagrams(word, words):
    result,ana,z =[],True,''
    for y in words:
        z=y
        for x in word:
            if x not in z:
                ana=False
                break
            z=z.replace(x,'',1)
        if len(z)>0:
            ana=False
        if ana==True:
            result.append(y)
        ana=True
    return result

w='racer'
wds=['crazer', 'carer', 'racar', 'caers', 'racer']

print(anagrams(w,wds))

    
    
