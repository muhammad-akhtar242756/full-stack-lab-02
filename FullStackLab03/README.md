# Full Stack Web Development - Lab 03

## Topic
JavaScript Fundamentals — Student Academic & Scholarship Management System

## Technologies Used
- HTML5
- CSS3
- Bootstrap 5
- JavaScript (ES6)

## Concepts Covered
- JavaScript Objects
- Arithmetic Operators (+, -, *, /, %)
- Comparison Operators (>, <, >=, <=, ===, !==)
- Logical Operators (&&, ||, !)
- Conditional statements (if, else if, else)
- Variable Hoisting (var vs let)
- DOM Manipulation
- Testing multiple data scenarios

## Project Description
This project extends the Lab 02 portfolio webpage with a new section: Student Academic & Scholarship Management.
JavaScript is used to dynamically display student details, calculate total marks and percentage, determine the letter grade, evaluate pass/fail status, check scholarship eligibility across different tiers (Gold, Silver, Not Eligible), and issue academic warning statuses (Good Standing, Academic Warning, Critical).

The project also includes a hoisting demonstration comparing var and let in the console, as well as an operators demonstration using actual student metrics. Four scenario buttons allow testing different student cases interactively.

## Testing Scenarios
1. High Performing Student: High marks, high CGPA, high attendance -> Grade A, Passed, Gold Scholarship, Good Standing.
2. Average Student: Moderate marks and CGPA -> Grade B, Passed, Silver Scholarship, Good Standing.
3. Low Attendance: Good marks but attendance below 75% -> Passed, Not Eligible for scholarship, Academic Warning.
4. Poor Performing: Low marks and low CGPA -> Grade F, Failed, Not Eligible, Critical.

## Debugging with Browser Console
If any error occurs during runtime:
1. Open Developer Tools with F12 and click the Console tab.
2. The console displays the exact error message and the line number where it happened.
3. Common errors include:
   - ReferenceError: Variable accessed before initialization (let/const in Temporal Dead Zone).
   - TypeError: Accessing properties of an element that does not exist or has a misspelled id.
4. Locate the line mentioned in the console error to correct the statement.

## How to Run
1. Open index.html in any modern browser or using VS Code Live Server.
2. Scroll to the Student Academic & Scholarship Management section.
3. Click the scenario buttons to test different student results.
4. Press F12 to view the hoisting demonstration, operators output, and academic report in the Console.

## Author
Muhammad Akhtar (Reg No: 2025-CS-242756)
