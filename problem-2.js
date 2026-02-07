function validOtp(otp) {
    if (typeof otp !== "string") {
        return "Invalid";
    }

    if (otp.length === 8 && otp.startsWith("ph-")) {
        return true;
    }
    else return false;
}


// const output = validOtp("ph-10985");
// const output = validOtp("ph-1234");
// const output = validOtp("abc-12345");
// const output = validOtp(["ph-10985"]);
const output = validOtp(12345678);
console.log(output);
