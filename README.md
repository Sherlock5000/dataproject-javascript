# Dataproject JavaScript

## Aim
To create a data project with the graphs generated on the browser using Javascript.

The Maharashtra Government CSV has been parsed using Python, the relevant data converted to JSON and rendered via JavaScript using the Highcharts library.

## Contents
The contents of this directory include:
- **company_master.py** : This file contains the Python code for the project.
- **README.md** : This is the file we are in. It contains details about this project, its files and specific instructions on how to run the code.
- **data1.js** : This file contains JavaScript code for displaying the data for the first question.
- **data2.js** : This file contains JavaScript code for displaying the data for the second question.
- **data3.js** : This file contains JavaScript code for displaying the data for the third question.
- **data4.js** : This file contains JavaScript code for displaying the data for the fourth question.
- **data1.json** : This file contains JSON data for the first question.
- **data2.json** : This file contains JSON data for the second question.
- **data3.json** : This file contains JSON data for the third question.
- **data4.json** : This file contains JSON data for the fourth question.
- **index.html** : This file contains HTML to display the content on a browser.
- **style.css** : This file contains CSS to style the HTML content on a browser.
- **index.php** : This file has been added to enable the project to be hosted on Heroku.


## Instructions to run the code

1. Clone the project using the submitted URL using ```git clone```.
2. Download the dataset for this project from [Data_Gov_Maharashtra](https://data.gov.in/catalog/company-master-data).
3. Open the ```company_master.py``` file in an editor.
4. Run the code.
5. The code will prompt for a path containing the CSV file. Enter the path.
6. Run the code.
7. JSON files will be generated for all questions. The file names will be ```data1.json```, ```data2.json```, ```data3.json``` and ```data4.json```.
8. Ensure that you are in the project directory in the terminal. Then run ```python3 -m http.server``` there.
9. Right click on ```http://0.0.0.0:8000/``` link that will be displayed on the terminal and select ```Open Link```. This will open up a new tab on your browser.
10. This tab will contain graphs for all four questions. Scroll to see all graphs that have been displayed.