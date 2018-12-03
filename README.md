# TRIANGLE TRACKER
#### It calculates what type of a triangle will be formed with the provided sides of a triangle, 30/11/2018.
#### By **ANUM ASIF**
## Description
This application is developd to help the Maths Students to calculate the types of a triangle. In general, there are 3 types of a triangle i.e ISOSCELES, SCALENE and EQILATERAL. You can also use it to check whether the 3 lengths you have in mind will even make a triangle or not. Because this is the first thing it checks when you enter the required 3 values. Please note that it is developed only for numerical data.
## Setup/Installation Requirements
*Web Browser*
## Specifications
### The website:
1. displays an error message if  no value is entered
   - INPUT:" " 
   - OUTPUT:"Enter sides of a triangle"
2. displays an error message for alphabetical characters
   - INPUT:"Hello" 
   - OUTPUT:"Put sides of a triangle"
3. displays an error message if only one length is entered
   - INPUT:23 
   - OUTPUT:"Put three lengths seperated by comma ','"
4. displays an error message if only two lengths are entered
   - INPUT:23,45 
   - OUTPUT:"Put three lengths seperated by comma ','"
5. checks the condition (sum of two side of a triangle is less than or equal to the 3rd side) for all the possible combinations and displays a message if true.
   - INPUT:5,8,3 
   - OUTPUT:"Not a triangle" 
6. Checks if all the three entered values are same, displays a message that its an eqilateral triangle
   - INPUT:5,5,5 
   - OUTPUT:"Equilateral Triangle"
7. Checks if any two entered values are same, displays a message that its an isosceles triangle
   - INPUT:4,4,5 
   - OUTPUT:"Isosceles Triangle"
8. Checks if all the entered values are different, displays a message that it's a scalene triangle
   - INPUT:4,5,6 
   - OUTPUT:"Scalene Triangle"
### Development
Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:

- Fork the repo
- Create a new branch (`git checkout -b improve-feature`)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (`git commit -am 'Improve feature'`)
- Push to the branch (`git push origin improve-feature`)
- Create a Pull Request 
## Known Bugs
If you find a bug (the website couldn't handle the query and / or gave undesired results), kindly open an issue [here](https://github.com/AnumAsif/triangle-tracker/issues/new) by including your search query and the expected result.

If you'd like to request a new function, feel free to do so by opening an issue [here](https://github.com/AnumAsif/triangle-tracker/issues/new). Please include sample queries and their corresponding results.
## Technologies Used
- [JS-Functions](https://www.w3schools.com/js/js_functions.asp) - Advantage of using Functions: we can reuse the code as many times as we want by just defining it once and calling it in time of need.
We can also use the same code many times with different arguments, to produce different results.
- [JS-Arrays](https://developers.google.com/chart/interactive/docs/quick_start) -Advantage of using arrays: we can store multiple values in a single variable.
## Link to my live site on GitHub Pages
- [Triangle Tracker](https://anumasif.github.io/triangle-tracker/)
## Support and contact details
Please feel free to contact me if you have any suggestion for me to improve this website.
- Email: anum@cockar.com
### License
*MIT*
Copyright (c) 2018 **ANUM ASIF**
