# a=1
# l=[1,3,4,5]
# for i in range(i=0;i<l.len;i++)
# { 
  
#   if(a!=l[i]):
#     print("the missing number is",a)
#     a++
#   else:
#     a++
#     continue
# }

# print()
def find_missing_numbers(l):
    # Calculate the expected range from the minimum to the maximum number in the list
    full_range = list(range(min(l), max(l) + 1))
    missing_numbers = []

    for num in full_range:
        if num not in l:
            missing_numbers.append(num)

    return missing_numbers

# Example usage
l = [1, 3, 4, 5, 8,12,20]
missing_numbers = find_missing_numbers(l)
print(f"The missing numbers are: {missing_numbers}")
