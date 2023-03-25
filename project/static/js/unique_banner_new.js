var teamTitle = document.getElementById("team-text-title");
var teamContent = document.getElementById("team-text-content");
var team = document.getElementById("teamText");
var costTitle = document.getElementById("cost-text-title");
var costContent = document.getElementById("cost-text-content");
var missionTitle = document.getElementById("mission-text-title");
var missionContent = document.getElementById("mission-text-content");
var defaultTitle = document.getElementById("default-text-title");
var defaultContent = document.getElementById("default-text-content");

function showCost () {
    defaultTitle.innerHTML = costTitle.innerHTML;
    defaultContent.innerHTML = costContent.innerHTML;
};

function showTeam () {
    defaultTitle.innerHTML = teamTitle.innerHTML;
    defaultContent.innerHTML = teamContent.innerHTML;
};

function showMission () {
    defaultTitle.innerHTML = missionTitle.innerHTML;
    defaultContent.innerHTML = missionContent.innerHTML;
};