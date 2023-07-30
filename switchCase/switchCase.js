var dayOfWeek=function(day) {
    switch (day) {
        case 1:
            console.log(`${day} - monday`);
            break;
        case 2:
            console.log(`${day} - tuesday`);
            break;
        case 3:
            console.log(`${day} - wensday`);
            break;
        case 4:
            console.log(`${day} - thursday`);
            break;
        case 5:
            console.log(`${day} - friday`);
            break;
        case 6:
            console.log(`${day} - saturday`);
            break;
        case 7:
            console.log(`${day} - sunday`);
            break;
    
        default:
            console.log(`${day} - invalid input`);
            break;
    }
}
dayOfWeek(1);
dayOfWeek(2);
dayOfWeek(3);
dayOfWeek(4);
dayOfWeek(5);
dayOfWeek(6);
dayOfWeek(7);
dayOfWeek(0);
dayOfWeek(null);
dayOfWeek(undefined);