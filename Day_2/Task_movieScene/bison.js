console.log("Movie scene using settimeout");

console.log(" Bison enters the Kabaddi court!");

setTimeout(() => {
    console.log(' Bison shouts "KABADDI KABADDI!" and raids');
    setTimeout(() => {
        console.log(" Bison tackles opponent powerfully!");
        setTimeout(() => {
            console.log(" Bison wins the point!");
            setTimeout(() => {
                console.log(" MATCH WON! Crowd cheers for Bison!");
            }, 1000);
        }, 2000);
    }, 3000);
}, 2000);