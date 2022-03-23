let user = {
    name: "John",
    years: 30
};

let { name, years: age, isAdmin = false } = user;
console.log(name, age, isAdmin);

function topSalary(salaries) {
    if (Object.keys(salaries).length === 0) return null;
    return Object.entries(salaries).reduce(
        (max, val) => {
            if (max[1] < val[1]) max = val;
            return max;
        }, ['test', -1])[0];
}

function getLastDayOfMonth(year, month) {
    if (month === 12) {
        month = 0;
        year++;
    }
    const date1 = new Date(`${year}-${month+1}-1`);
    date1.setDate(date1.getDate() - 1);
    return date1.getDate();
}

console.log(getLastDayOfMonth(2013, 1));