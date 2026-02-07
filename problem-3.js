/* 
    calc finalScore
    return finalScore, use Math.round()
    sum of right, wrong and skip should be 100 or retunr Invalid
    right 1 point
    wrong -0.5 point
    skip 0 point 
*/



function finalScore(omr) {

    if (((omr.right + omr.wrong + omr.skip) !== 100 ) || (typeof omr.right !== "number" || typeof omr.wrong !== "number" || typeof omr.skip !== "number")) {
        return "Invalid";
    }

    const finalScore = omr.right + (omr.wrong * -0.5) + (omr.skip * 0);
    return Math.round(finalScore);
}



const output = finalScore({ right: 67, wrong: 23, skip: 10 });
console.log(output);

// expected: 56



