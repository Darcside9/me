import random

num = "1234567890"
lowercase = 'abcdefghijklmnopqrstuvwxyz'
uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'


min = float(input("min: "))
max = float(input("max: "))

    
def passgen():
    print (num + lowercase + uppercase)

passgen()