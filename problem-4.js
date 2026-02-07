/* 
invalid if input not array

    find ha majority naki array te

যদি "ha" সংখ্যা "na" এর বেশি → true
যদি "ha" সংখ্যা "na" এর সমান → “equal”
অন্যথায় → false

    return (true/false) অথবা equal (string)
*/



function gonoVote(array) {


    if (!Array.isArray(array)) {
        return "Invalid";
    }

    let haCount = 0;
    let naCount = 0;

    for (const element of array) {
        if (element === "ha") {
            haCount++
        }
        else if (element === "na") {
            naCount++
        }
    }

    if (haCount > naCount) {
        return true;
    }
    else if (haCount === naCount) {
        return 'equal';
    }
    else return false;
}



const output = gonoVote(["ha", "na", "ha", "na"]);
console.log(output);

// expected: equal



