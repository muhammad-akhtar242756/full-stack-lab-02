"use strict";

console.log("var before assignment:", hoistedVar);
var hoistedVar = "test";
console.log("var after assignment:", hoistedVar);

try {
    console.log(hoistedLet);
} catch (e) {
    console.log("let error:", e.message);
}
let hoistedLet = "test";

let student = {
    name: "Muhammad Akhtar",
    regNo: "2025-CS-242756",
    program: "BS Computer Science",
    semester: 4,
    cgpa: 3.65,
    attendance: 92,
    assignment: 18,
    midterm: 24,
    finalExam: 44
};

function displayStudent(s, scenarioName) {
    let totalMarks = s.assignment + s.midterm + s.finalExam;
    let percentage = (totalMarks / 100) * 100;
    let remainder = totalMarks % 2;
    let marksLost = 100 - totalMarks;

    let grade = "F";
    if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    }

    let passStatus = percentage >= 50 ? "Passed" : "Failed";

    let isGold = s.cgpa >= 3.6 && s.attendance >= 90 && percentage >= 85 && !false;
    let isSilver = s.cgpa >= 3.2 && s.attendance >= 75 && percentage >= 70;
    let scholarship = isGold ? "Gold Scholarship" : (isSilver ? "Silver Scholarship" : "Not Eligible");

    let academicStatus = "Good Standing";
    if (percentage < 50 || s.cgpa < 2.0 || s.attendance < 60) {
        academicStatus = "Critical";
    } else if (percentage < 60 || s.cgpa < 2.5 || s.attendance < 75) {
        academicStatus = "Academic Warning";
    }

    let isPassing = percentage >= 50;
    let isHigh = percentage > 80;
    let isLow = s.cgpa <= 2.5;
    let isSem4 = s.semester === 4;
    let isValid = s.regNo !== "";
    let bothGood = s.cgpa >= 3.5 && s.attendance >= 85;
    let needHelp = s.attendance < 75 || s.cgpa < 2.5;
    let notFailing = !(percentage < 50);

    console.log("Operators demonstration:", { totalMarks, percentage, remainder, marksLost, isPassing, isHigh, isLow, isSem4, isValid, bothGood, needHelp, notFailing });

    document.getElementById("student-profile").innerHTML = `
        <div class="report-item"><strong>Name</strong><span>${s.name}</span></div>
        <div class="report-item"><strong>Registration No</strong><span>${s.regNo}</span></div>
        <div class="report-item"><strong>Program</strong><span>${s.program}</span></div>
        <div class="report-item"><strong>Semester</strong><span>${s.semester}</span></div>
        <div class="report-item"><strong>CGPA</strong><span>${s.cgpa}</span></div>
        <div class="report-item"><strong>Attendance</strong><span>${s.attendance}%</span></div>
    `;

    document.getElementById("academic-marks").innerHTML = `
        <div class="report-item"><strong>Assignment</strong><span>${s.assignment} / 20</span></div>
        <div class="report-item"><strong>Midterm</strong><span>${s.midterm} / 30</span></div>
        <div class="report-item"><strong>Final Exam</strong><span>${s.finalExam} / 50</span></div>
    `;

    document.getElementById("academic-results").innerHTML = `
        <div class="report-item"><strong>Total Marks</strong><span>${totalMarks} / 100</span></div>
        <div class="report-item"><strong>Percentage</strong><span>${percentage.toFixed(1)}%</span></div>
        <div class="report-item"><strong>Grade</strong><span>${grade}</span></div>
        <div class="report-item"><strong>Status</strong><span>${passStatus}</span></div>
    `;

    document.getElementById("scholarship-status").textContent = scholarship;
    document.getElementById("academic-status").textContent = academicStatus;
    document.getElementById("scenario-message").textContent = scenarioName;

    console.log("================================");
    console.log("STUDENT ACADEMIC REPORT");
    console.log("================================");
    console.log("Student Name: " + s.name);
    console.log("Registration No: " + s.regNo);
    console.log("Program: " + s.program);
    console.log("Semester: " + s.semester);
    console.log("CGPA: " + s.cgpa);
    console.log("Attendance: " + s.attendance + "%");
    console.log("Assignment Marks: " + s.assignment);
    console.log("Midterm Marks: " + s.midterm);
    console.log("Final Exam Marks: " + s.finalExam);
    console.log("Total Marks: " + totalMarks);
    console.log("Percentage: " + percentage.toFixed(1) + "%");
    console.log("Grade: " + grade);
    console.log("Academic Status: " + academicStatus);
    console.log("Scholarship Status: " + scholarship);
    console.log("================================");
}

const scenarios = {
    high: { name: "High Performing Student", regNo: "2025-CS-1001", program: "BS Computer Science", semester: 4, cgpa: 3.90, attendance: 96, assignment: 20, midterm: 29, finalExam: 48 },
    average: { name: "Average Student", regNo: "2025-CS-1002", program: "BS Computer Science", semester: 4, cgpa: 3.10, attendance: 82, assignment: 15, midterm: 21, finalExam: 37 },
    attendance: { name: "Low Attendance Student", regNo: "2025-CS-1003", program: "BS Computer Science", semester: 4, cgpa: 3.70, attendance: 65, assignment: 19, midterm: 27, finalExam: 45 },
    poor: { name: "Poor Performing Student", regNo: "2025-CS-1004", program: "BS Computer Science", semester: 4, cgpa: 1.80, attendance: 58, assignment: 8, midterm: 10, finalExam: 20 }
};

function loadScenario(type) {
    displayStudent(scenarios[type], scenarios[type].name);
}

displayStudent(student, "Default Student");
