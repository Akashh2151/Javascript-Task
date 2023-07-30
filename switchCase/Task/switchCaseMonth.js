function montOfYear(month) {
    switch (month) {
        case 1:
            console.log(`${month} - January`);
            break;
        case 2:
            console.log(`${month} - February`);
            break;
        case 3:
            console.log(`${month} - march`);
            break;
        case 4:
            console.log(`${month} - april`);
            break;
        case 5:
            console.log(`${month} - may`);
            break;
        case 6:
            console.log(`${month} - june`);
            break;
        case 7:
            console.log(`${month} - july`);
            break;
        case 8:
            console.log(`${month} - agust`);
            break;
        case 9:
            console.log(`${month} - saptember`);
            break;
        case 10:
            console.log(`${month} - octombar`);
            break;
        case 11:
            console.log(`${month} - nohembar`);
            break;
        case 12:
            console.log(`${month} - December`);
            break;
    
        default:
            console.log(`${month} - invalid input`);
            break;
    }
    
}
montOfYear(0);
montOfYear(2);
montOfYear(5);
montOfYear(12);
montOfYear(15);
montOfYear(100);
montOfYear(null);
montOfYear(undefined);