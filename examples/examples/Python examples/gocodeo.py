def high_low(numbers):
    highest = numbers[0]
    lowest = numbers[0]
    
    for number in numbers:
        if number > highest:
            highest = number
        
        if number < lowest:
            lowest = number
    
    return (highest, lowest)


def is_palindrome(string):
    reversed_string = string[::-1]
    
    return string == reversed_string


def get_primes(num):
    primes = []
    
    for i in range(2, num + 1):
        is_prime = True
        
        for j in range(2, int(i ** 0.5) + 1):
            if i % j == 0:
                is_prime = False
                break
        
        if is_prime:
            primes.append(i)
    
    return primes   
