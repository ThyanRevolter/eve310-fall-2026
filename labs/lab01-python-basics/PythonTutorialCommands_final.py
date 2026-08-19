# -*- coding: utf-8 -*-
"""
Spyder Editor

This is a temporary script file.
"""

#  Python tutorial
#----------------------------------------------
# you can run this script or separate commands
# to run a set of commands, select the lines of codes + F9

# Whenever you write code, it is a good practice to add comments that describe 
# the code. Comments allow others to understand your code, and can refresh your 
# memory when you return to it later. Add comments using the pound (#) symbol.

#----------------------------------------------
# 1. Desktop basics
#----------------------------------------------


1/2                     # note that the answer is not saved or displayed in the 
                        # console

print(1/2)              # to print a result we must use the print() function

print("Hello World")    # we can use quotes to print phrases to the console

x = 1/2                 # no printing but a new variable is created that gets 
                        # the value of the results of the division. Look for
                        # the variable x in the Variable Explorer
                        # also note that we didn't need to declare the variable
                        
print(x)                # we can print the value of x to the screen
                        
x = 0.3                 # the value of x is overwritten

x = 5 * 5               # again overwritten and equals to the result of the 
                        # multiplication
                        
x = "I love coding"     # x is now a String variable. Strings are just a 
print(x)                # combination of characters

x = 100 / 100 * 100     # note the difference given the order of operations
x = 100 / (100 * 100)   


#----------------------------------------------
# 2. Working with Packages and Functions
#----------------------------------------------

import numpy as np

x = np.linspace(0, 30, 31)  # returns evenly spaced numbers over a specified 
                            # interval. This example returns a list of 31 
                            # evenly spaced integers between 0 and 30
y = np.linspace(0,1,100)    # 100 evenly spaced numbers between 0 and 1


# Common numpy functions
z = np.sqrt(49)             # get the square root

z = np.deg2rad(z)           # convert from degrees to radians

z = np.round(z,3)           # round to a given number of digits

z = np.log(z)               # compute the natural log

z = np.log10(100000)             # compute the base 10 log

z = np.pi                   # returns the value of pi

np.sin(z/2)                 # trigometric functions take radians for input
np.cos(z)
np.tan(z/2)
np.arccos(1/2)
np.arcsin(1/2)
np.arctan(1)


z = np.arange(50)           # other useful function
mySum = np.sum(z)
myMax = np.max(z)
myMin = np.min(z)
myAvg = np.mean(z)


#----------------------------------------------
# 3. Working with Arrays
#----------------------------------------------

import numpy as np                  # In order to work with arrays in python we 
                                    # must import the numpy library
                                    
x = np.array( [0, 1, 2] )           # separate columns with commas
y = np.array([ [0], [1], [2] ])     # seperate rows with brackets and commas
y = x                               # y is overwritten, changes dimenstions and 
                                    # values
y = np.array([])                    # this empties y, but does not delete it
print( x[0] )                       # access vector elements using square 
                                    # brackets
print( x[1] )                       # NOTE: unlike matlab, python and most 
                                    # other languages use indexing that starts 
                                    # at 0
print( x[2] )                       # therefore in this example to access the 
                                    # second element we use x[1]

# Creating special vectors
x = np.arange(1,10,2)               # create a vector that starts at 1 and 
                                    # increases the value of the next element 
                                    # by 2 without reaching 10
x = np.arange(10,0,-2)              # create a vector that starts at 10 with a 
                                    # stepsize -2, and doesnt not reaching 0
                            
x = np.arange(10)                   # Create a vector that starts at 0 by 
                                    # default with a default step size of 1 and 
                                    # does not include 10
x = np.linspace(1, 10, 120)         # vector between 1 and 10 (inclusive) with 
                                    # exactly 120 elements equaly spaced

# Creating matrices is similar to creating arrays because they are multi 
# deminsional arrays
A = np.array([ [1, 2, 3], [ 4, 5, 6], [7, 8, 9] ])

# Special matrices
A0 = np.zeros([5,5])                # define a zero matrix size 5x5
A1 = np.ones([5,5])                 # define a ones matrix size 5x5
A2 = np.eye(5)                      # define an identity matrix size 5x5
A2 = np.identity(5)                 # another way to define an identity matrix
A3 = np.random.rand(3,3)            # generate a 2x3 matrix with random elements 
                                    # between 0 and 1

# Indexing (Its important to remember that indexing starts at 0)
x = np.arange(24)
x.shape = (4,6)

a = x[2]                            # all values from the third row
b = x[0][3]                         # the value in the 1st row and 4th column
b = x[0,3]                          # another way to grab the same value
c = x[:,4]                          # all values from the 5th column
d = x[0,:]                          # all values from the first row
e = x[:,3:]                         # all columns from 4th col till the last col
f = x[0,2:4]                        # all values in 1st row from 3rd to 5th col
g = x[:,[0,-1]]                     # all rows in the 1st and last column

# Matrix operations
print( A1 + 5 )                     # addition is element-wise
print( A1 + A2 )
A = np.transpose(A)                 # transpose a matrix
A = A.T                             # another way to transpose a matrix

import numpy.linalg as ln           # In order to work with the inverse 
                                    # function we have to import the linear 
                                    # algerbra package from numpy
A3 = ln.inv(A3)                     # the inverse
a = A3*A;                           # matrix multiplication
            
# the matrix operators for multiplication, division, and power have a 
# corresponding element-wise operator
p1 = A**2                           # raises each element to the second power
p2 = A*A                            # multiplies each element by the 
                                    # cooresponding element in the other array

# concatenation is the processes of joining arrays to make larger ones
# arrays must be of equal size among the axis that you wish to join them
a = np.array([[1, 2], [3, 4]])
b = np.array([[5, 6]])

c = np.concatenate((a, b), axis=0)      # Concatenate array along vertical axis
c = np.vstack( (a, b) )                 # Another way to combine arrays
#d = np.concatenate((a,b), axis=1)      # Note that this line of code will throw an error as it is attempting to combine a 2x2 by a 1x2 matrix
d = np.concatenate((a, b.T), axis=1)    # to fix this we transpose the second matrix thus we combine a 2x2 with a 2x1 matrix
d = np.hstack( (a, b.T) )
e = np.concatenate((a, b), axis=None)   # by setting the axis equal to none, we get an 1 dimensional array with all elements


# logical operations
x = np.arange(24)

a = x[x<=5]                 # get all values less than or equal to 5 from x
b = x[x%3 != 0]             # get all values that are not divisible by 3
                            # note: the modulus (%) operator computes the remander
                            # EX: 22%3 = 1 becuase 22/3 = 7 with remainder 1

x[x%3 == 0] = 0             # set all values divisible by 3 in x to 0

c = np.where(d == 4)        # find the location of 7

#other useful matrix functions
A = np.array( [1, 3, 5] )
B = np.vstack( (A, [-1, 5, 1]) )

m = np.size(B)          # getting the number of elements in a matrix
n = np.shape(B)         # getting the size (number of rows and col) in a matrix

biggest = B.max()       # get the maximum value in a matrix
smallest = B.min()      # get the minimum value in a matrix




# #----------------------------------------------
# # 4. Working with Strings and Formatting
# #----------------------------------------------

# weight = 552.3498545634

# width = 12.344675838372
# height = 6.442838592932
# depth = 23.34532452345

# volume = width * height * depth

# #This print statement allows us to choose the number of decimal places we round
# # to and also print variables that may change in a set print statement
# print(' Width: {:.3f} meters\n Height: {:.3f} meters\n Depth: {:.3f} meters\n Volume: {:.3f} cubic meters'.format(width, height, depth, volume))

# print('The object weighs {:} newtons'.format(weight))
# print('The object weighs {:.0f} newtons'.format(weight))

# #The format also works for variables that are not numbers
# name = 'John'
# print('My name is {}'.format(name))




# #----------------------------------------------
# # 5. Importing External Data
# #----------------------------------------------

# # Loading .txt data into Python can be done in just one line of code with the 
# # numpy library. There are a number of different arguments for the loadtext()
# # function, however these four arguments are the ones you will probably need 
# # most often. 

# # The first argument, is the name of the file that you wish to import. This
# # file must be saved within your working directory (the folder in which your 
# # script is saved) in order for the function to use the file.

# # The second argument specifies the delimiter (character in the file that 
# # seperates the data) In the case of our file, data is separated by a tab which
# # is indicated with the '\t'

# # The third argument, dtype allows us to specify the type of data that we are
# # dealing with. The default data type with loadtext() is a float (decimal) so 
# # because we are importing float values, we could leave this argument out.

# # Finally we have the skiprows argument. This argument is useful when a file 
# # has headers for the data that you do not wish to import. If we want it to 
# # skip the first row, we would set skiprows = 1. Becuase we dont wish to skip 
# # the rows of any of this data we will set skiprows = 0. The default is 0 so 
# # technically we could have left the argument out

# tData = np.loadtxt("py_tData.txt", delimiter='\t', dtype = float, skiprows=0)

# # becuase of the default values for dtype and skiprows, we can also use

# tData = np.loadtxt("py_tData.txt", delimiter = '\t')


# # Loading csv files is exactly the same we just need to change the delimeter 
# # to commas. Note that in this .csv file, there were two lines of headers, so 
# # we need to skip two lines
# cData = np.loadtxt("py_cData.csv", delimiter = ',', skiprows = 2)

# print(tData)

# print(cData)

# # get the dimension of the imported data
# print("Getting the size of tData")
# n = tData.shape
# print('Number of rows in tData is: {:}'.format(n[0]))
# print('Number of columns in tData is: {:}'.format(n[1]))
# #get data type 
# type(tData)

# # save and load data

# #saving the data as .npy
# np.save('cData.npy', cData)
# #clear cData
# del cData
# #load cData
# newData = np.load('cData.npy')


# #----------------------------------------------
# # 6. Working with matplotlib
# #----------------------------------------------

# # Import the necessary packages
# import numpy as np
# import matplotlib.pyplot as plt

# # Read the data and store it in a variable
# plotData = np.loadtxt("plotData.csv", delimiter = ',', skiprows = 2)

# # Lets put our data into variables so we can reference it easier in our code
# x = plotData[:,0]
# y1 = plotData[:,1]
# y2 = plotData[:,2]

# f = plt.figure()            # create a figure that we can later save

# # We can plot multiple plots on the same graph or just use one
# plt.plot(x, y1, label = 'Function 1')   
# #the label argument lets us define the text that we wish to have assigned to 
# #the plot in a legend
# plt.plot(x, y2, '--r' ,label = 'Function 2') 
# #by adding '--r' we are specifying that we want the data plotted as red dashed line

# plt.title('Practice Plot')
# plt.xlabel('X Label')
# plt.ylabel('Y Label')
# plt.legend()            # this command displays the legend on the plot

# plt.grid()              # adds a gridline to the plot
# plt.axis([0,20,0,400])	    # allows you to set the axis limits, plt.axis(xStart,
#                         # xEnd, yStart, yEnd)

# plt.show()              # this command will update any changes you make on your 
#                         # plot to the screen

# f.savefig('myFig.png') # save the figure as a .png file, Note: the figure is the 
#                       # reference not plt.




# #
# #----------------------------------------------
# # 7. User Defined Functions
# #----------------------------------------------


# # This is the function definition
# def myFunction(name):
#  	#Everything within your function must be indented
#  	output = 'Hello, {}!'.format(name)
#  	return output


# # You can now call the function in the main section of your script
# myString = myFunction('John')
# print(myString)

# # Try calling the function with a different name

# # You can also use multiple arguments and return multiple variables
# def myFunction(h, w, l):
#  	#Everything within your function must be indented
#  	volume = h * w * l
#  	surfaceArea = 2 * (w*l + h*l + h*w)

#  	return volume, surfaceArea

# # This is the main section of the script
# # There are two ways to use a function that returns multiple values
# # look at the differences between the following variables
# sqVol, sqSA = myFunction(2,4,6)
# dimensions = myFunction(2,4,6)
# print(sqVol)
# print(sqSA)
# print(dimensions[0])
# print(dimensions[1])


# # Here we can call upon a function in a separate file outside of this script
# # place the file functionSolve.py in your working directory
# # Note: the file must be saved within the working directory

# # import the function
# from functionSolve import quadratic

# # call the function
# answer = quadratic(9)

# print(answer)


# #----------------------------------------------
# # 8. Logical Operations
# #----------------------------------------------
# #----------------------------------------------
# # 8a. For and while loops
# #----------------------------------------------

# import numpy as np

# # Just as with user defined functions, the body of the loop must be indented. 
# # Everything following the loop that is not indented will be exeuted 
# # sequentially after the loop is terminated

# # For Loop
# x = np.arange(50)
# y = 50


# sum = 0
# for i in x:    # this line defines the values for index i. Recall that indexes start at 0!
#     sum = sum + 1
#     print(i)
# print(sum)

# sum = 0
# for i in np.arange(50):
#     sum = sum + 1
#     print(i)
# print(sum)

# sum = 0
# for i in range(0, y):
#     sum = sum + 1
#     print(i)
# print(sum)


# # While Loop
# z = 1
# while z <= 40:
#     print(z)
#     z = z+z


# # note that in the next example, the condition is never met
# # if you run this code, the program will be stuck in the loop because it 
# # continues to loop until the condition is met
# # be careful of this when you are working with while loops
# # if you suspect that your code is running due to an infinite loop, stop the 
# # program and look at the conditions in your while loop statement 
# #z = 1
# #while z <= 40:
# #	print(z)
# #	z = z*z
# # use Ctrl+C in the consoe to stop to interrupt the run

# #
# #----------------------------------------------
# # 8b. Conditional statements (If statements)
# #----------------------------------------------

# # Just as with user defined functions and loops, the body of your if statement 
# # must be indented

# # In this example, if the value of x is divisible by 2, we print to the screen 
# # that x is an even number. Note, that because 45 is an odd number, nothing is
# # printed to the screen. Because the condition is not met, the lines in the if
# # statement are not run
# x = 45
# if x%2 == 0:
#  	print('{} is an even number.'.format(x))


# # In this example, we added in an else statement to account for odd numbers
# x = 45
# if x%2 == 0:
#  	print('{} is an even number.'.format(x))
# else:
#  	print('{} is an odd number'.format(x))

# # Suppose we have multiple conditions that we would like to check
# x = 0
# if x == 0:
#  	print('Though some people say {} is neither even nor odd, {} is even due to Parity.'.format(x,x))
# elif x%2 == 0:		#elif stands for 'else if'
#  	print('{} is an even number.'.format(x))
# else:
#  	print('{} is an odd number'.format(x))
# # you can have as many if and elif statements as needed.
# # note that the elif and else statements only apply to the if statement that
# # occurs directly above it
# # conditions in the previous examples are checked sequentially, therefore if a 
# # condition is met, all of the following conditions are ignored



# #-------------------------------------------------------------------------
# # 8c. Combining while and if statements (the 'break' command)
# #-------------------------------------------------------------------------

# # Recall that while statements can sometimes lead to infinite loops within our 
# # code if we dont forsee and instance in which a condition is not met. We can 
# # prevent infinite loops by including an if and break statement
# # Consider the previous while loop from section 7a
# z = 1
# # by adding in a count variable we can keep track of how many times the loop 
# # has been run
# count = 0
# while z <= 40:
#  	print(z)
#  	z = z*z
#  	count = count + 1

#  	# we can now check the count with each iteration to ensure that we dont 
#     # iterate for too long
#  	if count > 10:
#          break	# the break command ends the innermost enclosing 'for' or 
#                 # 'while' loop


# # generally for loops are used when the number of times we would like to iterate is known apriori and while loops are used when we don't know apriori the number of iterations we'll need.
# # however, both can often be used to accomplish the same task
# #	
# #
# #------------------------------------------------------------
# # 9. Solving Linear and Nonlinear Equations
# #------------------------------------------------------------

# #
# #------------------------------------------------------------
# # 9a. Solving nonlinear equations 
# #------------------------------------------------------------
    
# # using fsolve to solve a nonlinear equation
# #------------------------------------------------------------
    
# # import all needed libraries
# import numpy as np
# import matplotlib.pyplot as plt
# from scipy.optimize import fsolve

# # this is the function that defines the equation we wish to solve
# # rememebr that the variables within this function are local and do not exist 
# # outside of the function
# def fun1(x):
#     y = (x**2)-25
#     return y

# # graphical solution
# # make array for the x and y axis values
# x = np.arange(-10,10,0.5)
# y = fun1(x)

# # plot function
# plt.plot(x,y)
# plt.plot(x,(x*0))

# # solving using fsolve
# # now that the function is graphed we can make an educated guess about where 
# # the roots are to provide a good initial guess
# roots = np.zeros(2)
# roots[0] = fsolve(fun1, -10)
# roots[1] = fsolve(fun1, 10)
# print(roots)

# # note: nonlinear functions might have multiple roots, which one fsolve will return depends on the initial guess we provide. In this case we know there are two roots since the order of the polynomial is 2.

# # using fsolve to solve a system of nonlinear equations
# #------------------------------------------------------------
# from scipy.optimize import fsolve
# import math

# # z is a vector collecting x1 and x2
# def equations(z):
#     x1, x2 = z
#     return (x1+x2**2-4, math.exp(x1) + x1*x2 - 3)

# x1, x2 =  fsolve(equations, (1, 1))

# print('x is {:.3f}; y is {:.3f}'.format(x1,x2))
# print('checking the solution f(z) = 0:')
# print(equations((x1, x2)))


# #------------------------------------------------------------
# # 9b. Find the solution of a system of linear equations  
# #------------------------------------------------------------

# # import all needed libraries
# import numpy.linalg as ln

# # define A and b
# A = np.array([[1,2],[-3,4]])
# b = np.array([5,-20])

# # Now we can use numpy to solve the system
# soln = ln.solve(A, b)
# print(soln)



# #----------------------------------------------
# # 10. Debugging
# #----------------------------------------------

# #import numpy as np
# #
# #x = np.array(2,3)
# ##x = np.array( [2,3] )

# ###### Using Spyder's Debugging Tools
# #sum = 0
# #for i in np.arange(50):
# #    square = i**2
# #    sum = sum + square
# #print(sum)
# #
# #
