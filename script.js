var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var colArr = ["#DAFFED","#EF6461","#E4B363","#BDF7B7","#3943B7"];

var totalHits = 0;

function dvdBounce(x, y, s, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
    
    this.draw = function () {
        c.beginPath();
        c.rect(this.x, this.y, this.s, this.s);
        c.fillStyle = colArr[this.color];
        c.fill();
        c.strokeStyle = '#000000';
        c.stroke();
        c.font = '20px Arial';
        c.fillText('Total Hits : ' + totalHits, 0, canvas.height)
    }
    
    this.update = function () {
        if (this.x < 0) {
            this.dx = -this.dx;
            totalHits++;
            if(this.color == 4){
                this.color = 0;
                return
            }
            
            this.color++;
            
        }
        if (this.y < 0) {
            this.dy = -this.dy;
            totalHits++;
            if (this.color == 4) {
                this.color = 0;
                return
            }
            
            this.color++;
            
        }
        if (this.x + this.s > canvas.width) {
            this.dx = -this.dx;
            totalHits++;
            if (this.color == 4) {
                this.color = 0;
                return
            }
            
            this.color++;
            
        }
        if (this.y + this.s > canvas.height) {
            this.dy = -this.dy;
            totalHits++;
            if (this.color == 4) {
                this.color = 0;
                return
            }
            
            this.color++;
            
        }
        this.x += this.dx;
        this.y += this.dy;
        console.log(this.x + " " + this.y);
        this.draw();
    }
    this.draw();
}

var dvd = new dvdBounce(10, 10, 100, 1, 1, Math.round(Math.random() * 4));

function refresh(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    dvd.update();
}

setInterval(refresh,1000/144);