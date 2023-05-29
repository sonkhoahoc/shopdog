let England = document.getElementById('England');
let Korea = document.getElementById('Korea');
let America = document.getElementById('America');
let Italian = document.getElementById('Italian');
let Japan = document.getElementById('Japan');

England.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
} 
Korea.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
}  
America.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
} 
Italian.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
}
Japan.onclick = function() {
    localStorage.setItem('currentBrand', JSON.stringify(this.id));
}