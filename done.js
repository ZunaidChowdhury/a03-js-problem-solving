// Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {

    if ((typeof currentPrice !== "number" || typeof discount !== "number") || (discount < 0 || discount > 100)) {
        return "Invalid";
    }

    let discountedProductPrice = null;
    let discountOnProduct = null;

    discountOnProduct = (discount * currentPrice) / 100;
    discountedProductPrice = currentPrice - discountOnProduct;

    return discountedProductPrice.toFixed(3);

}

// Problem-02: OTP Validation for Zapshift
function validOtp(otp) {

    if (typeof otp !== "string") {
        return "Invalid";
    }

    if (otp.length === 8 && otp.startsWith("ph-")) {
        return true;
    }
    else return false;

}

// Problem-03: BCS Final Score Calculator
function finalScore(omr) {

    if (((omr.right + omr.wrong + omr.skip) !== 100) || (typeof omr.right !== "number" || typeof omr.wrong !== "number" || typeof omr.skip !== "number")) {
        return "Invalid";
    }

    const finalScore = omr.right + (omr.wrong * -0.5) + (omr.skip * 0);
    return Math.round(finalScore);
}

// Problem-04: Upcoming Gono Vote
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

// Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {

    if (typeof str !== "string" || str === "") {
        return "Invalid";
    }

    let longwords = '';
    let token = 0;

    // finding largest word 
    let wordList = str.split(' ');

    longwords = wordList.sort((a, b) => b.length - a.length)[0];
    token = wordList.join('').length;


    return { longwords: longwords, token }
}

