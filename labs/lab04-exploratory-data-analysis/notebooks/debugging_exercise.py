"""Lab 4 debugging exercise.

This script contains several intentional errors. Find and fix them.
The CSV lives at ../data/JES_Water_Lab4_Tutorial.csv
"""

import pandas as pd
import numpy as np

# Import Lab 4 tutorial data as a dataframe
water_df = pd.read_csv('../data/JES_Water_Lab4_Tutorial')

#Find the size of the data frame and number of rows and columns
df_size = water_df.size()
[row,col] = water_df.shape

print('Size:',df_size)
print('Rows:',row)
print('Columns:',col)

#Use indexing to extract and print the 50th value of the column 'prevWeek'
print(water_df.iloc[49,'prevWeek'])

#Create and print the following array called my_array: 
#Row 1: 4 10 14 3 21
#Row 2: 6 11 21 30 5

my_array = np.array[[4,10,14,3,21],[6, 11, 21,30,5]]
print(my_array)

#Use indexing to extract and print the value in the second row and third column of my_array
print(my_array[2,3])