let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0

function addScore(team, score) {
    if (team == "home" && score <= 3) {
        homeScore += score
        homeScoreEl.textContent = homeScore
    } else if (team == "guest" && score <= 3) {
        guestScore += score
        guestScoreEl.textContent = guestScore
    } else {
        console.log('There is an error in the webapp.')
    }
    
    if (homeScore > guestScore) {
        homeScoreEl.style.borderColor = '#F94F6D'
        guestScoreEl.style.borderColor = '#080001'
    } else if (homeScore < guestScore) {
        guestScoreEl.style.borderColor = '#F94F6D'
        homeScoreEl.style.borderColor = '#080001'
    } else {
        homeScoreEl.style.borderColor = '#080001'
        guestScoreEl.style.borderColor = '#080001'
    }
}

function reset(team) {
    homeScoreEl.style.borderColor = '#080001'
    guestScoreEl.style.borderColor = '#080001'
    if (team == "home") {
        homeScore = 0
        homeScoreEl.textContent = homeScore
    } else if (team == "guest") {
        guestScore = 0
        guestScoreEl.textContent = guestScore
    } else {
        console.log('There is an error in the webapp.')
    }
}
