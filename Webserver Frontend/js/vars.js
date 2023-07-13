var depthValues = [];
var hourValues = [];
const socket = new WebSocket('ws://localhost:8080');
const chart = document.getElementById("depth-chart");
