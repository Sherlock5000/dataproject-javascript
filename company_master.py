import csv
import numpy as np
import json
from collections import defaultdict

# Asking user for CSV filepath
csv_path = input('Enter Company Master CSV file path:')

# Opening CSV and storing fieldnames and their respective values in a dict
with open(csv_path, 'r', newline='', encoding='latin1') as csv_file:
    reader = csv.DictReader(csv_file)
    columns = reader.fieldnames

    lists = {}

    for column in columns:
        lists[column] = []

    for row in reader:
        for column in columns:
            lists[column].append(row[column])

# --------------------------------------------------
# Question 1 -> Histogram of Authorized Cap


def do_plot():
    ''' This function plots outputs for dataproject-python'''
    frequency = []

    # Storing values from concerned column in 'frequency' as 0, 1, 2, 3 and 4
    for item in lists["AUTHORIZED_CAP"]:
        item = int(float(item))
        if item <= 100000:
            frequency.append(0)
        elif 100000 < item <= 1000000:
            frequency.append(1)
        elif 1000000 < item <= 10000000:
            frequency.append(2)
        elif 10000000 < item <= 100000000:
            frequency.append(3)
        else:
            frequency.append(4)

    frequency.sort()

    # Defining function to rename xticklabels as custom values
    def xtick_custom(val, tick):
        ''' This function renames xticklabels as custom values '''
        if val == 0:
            return 0
        elif val == 1:
            return '1L'
        elif val == 2:
            return '10L'
        elif val == 3:
            return '1Cr'
        elif val == 4:
            return '10 Cr'
        elif val == 5:
            return '>10Cr'

    # /home/anirban/mountblue-project-4/dataproject-javascript/Data_Gov_Maharashtra.CSV
    dict1 = defaultdict(int)
    for item in frequency:
        dict1[item] += 1

    array1 = []
    for value in dict1.values():
        array1.append(value)

    jsonPath1 = "data1.json"

    with open(jsonPath1, 'w') as jsonFile:
        json.dump(array1, jsonFile, indent=4)

    # --------------------------------------------------
    # Question 2 -> Bar Plot of Company Registration by Year

    years = []

    # Traversing values in concerned column
    for item in lists['DATE_OF_REGISTRATION']:
        # If date is not 'NA'
        if len(item) > 2:
            year = int(item[-4:])
            years.append(year)

    years.sort()

    # Initializing dict to store frequency of years
    years_dict = defaultdict(int)

    # Traversing list 'years' and storing frequency in 'years_dict'
    for year in years:
        years_dict[year] += 1

    # Sorting dict
    year_frequency = dict(sorted(years_dict.items()))

    yrs = []
    yrs_frequency = []

    # Unzipping items in 'year_frequency' in lists 'yrs' and 'yrs_frequency'
    for key, value in year_frequency.items():
        yrs.append(key)
        yrs_frequency.append(value)

    # --------------------------------------------------
    # Question 3 -> Company Registration in the year 2015 by District

    business_count = defaultdict(int)
    activity = lists['PRINCIPAL_BUSINESS_ACTIVITY_AS_PER_CIN']
    dates = lists['DATE_OF_REGISTRATION']
    d = len(dates)

    # Traversing each date in the date column
    for i in range(d):
        date = dates[i]

        # If date is not 'NA'
        if len(date) > 2:
            registration_year = int(date[-4:])

            # Considering only year 2015 and storing frequency of activity
            if registration_year == 2015:
                business_count[activity[i]] += 1

    business_names = []
    business_names_frequency = []

    # Unzipping items in 'business_count' in the lists above
    for key, value in business_count.items():
        business_names.append(key)
        business_names_frequency.append(value)

    # --------------------------------------------------
    # Question 4 -> Grouped Bar Plot

    activity_freq_year = {}

    # List 'activity' obtained from previous section
    length = len(activity)

    # Only considering these four years
    required_years = [2015, 2016, 2017, 2018]

    # Traversing each item in concerned column
    for i in range(length):
        date = dates[i]
        # If date is not 'NA'
        if len(date) > 2:
            registration_year = int(date[-4:])

        # Not considering years not in 'required_years'
        if registration_year not in required_years:
            continue
        else:
            # Creating dict of dict
            # Business activity is key
            # Dict of years and frequency is value
            if activity[i] not in activity_freq_year:
                activity_freq_year[activity[i]] = {}

            if registration_year not in activity_freq_year[activity[i]].keys():
                activity_freq_year[activity[i]][registration_year] = 1
            else:
                activity_freq_year[activity[i]][registration_year] += 1

    business = []
    business_yearwise_count = []

    # Unzipping items in dict in lists 'business' and 'business_yearwise_count'
    for key, value in activity_freq_year.items():
        business.append(key)
        business_yearwise_count.append(value)

    # Deleting item at index 11 in the lists
    # That item is outlier with only two items in inner dict
    del business[11]
    del business_yearwise_count[11]

    year_2015 = []
    year_2016 = []
    year_2017 = []
    year_2018 = []

    # Unzipping items in inner dict to respective lists declared above
    for item in business_yearwise_count:
        for key, value in item.items():
            if key == 2015:
                year_2015.append(value)
            elif key == 2016:
                year_2016.append(value)
            elif key == 2017:
                year_2017.append(value)
            else:
                year_2018.append(value)

    # Setting width of bar
    bar_width = 0.15

    # Setting the parameters of the bars
    bar_a = np.arange(len(year_2015))
    bar_b = [x + bar_width for x in bar_a]
    bar_c = [x + bar_width for x in bar_b]
    bar_d = [x + bar_width for x in bar_c]

if __name__ == "__main__":
    do_plot()
