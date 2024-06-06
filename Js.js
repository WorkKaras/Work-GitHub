alert("Viewing the site for people under 17 years of age is prohibited.");


while (true) {
    years = prompt("How old are you?");
    
    if (isNaN(years)) {
        alert("Please enter a valid number.");
    } else if (years <= 16) {
        alert("Sorry, you can't view this site.");
        window.close();
        break;
    } else if (years >= 17) {
        alert("Thank you for your honesty.");
        break; 
    }
}