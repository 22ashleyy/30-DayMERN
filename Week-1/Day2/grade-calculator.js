//grade calculator
function calculateGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

// Example usage:
const score = 85;
const grade = calculateGrade(score);
console.log(`The grade for a score of ${score} is: ${grade}`);