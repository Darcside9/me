#
#Compute the area of a field, reporting the results in acres.
#
SQFT_PER_ACRE = 43560

#Read input from the user
length = (input("Enter the field in feet: "))
width = (input("Enter the width in feet: "))

#Compute the area in acres
area = length * width / SQFT_PER_ACRE

#Display the result
print("The area of the field is, " + area + "acres")