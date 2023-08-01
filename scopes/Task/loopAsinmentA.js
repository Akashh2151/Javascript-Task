function vowelCount(str) {
    let char = str.length - 1;
    let index = 0;

    while (index <= char) {
        let charr = str.charAt(index);
        if (
            charr == 'a' || charr == 'e' || charr == 'i' || charr == 'o' || charr == 'u' ||
            charr == 'A' || charr == 'E' || charr == 'I' || charr == 'O' || charr == 'U'
        ) {
            console.log(charr);
        }
        index = index + 1;
    }
    console.log("Total vowels:", index);
}

vowelCount("I am very good UI Developer");
