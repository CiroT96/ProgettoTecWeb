/*
 *  resources.js
 */

function ResourcesHandler(callback) {
    /* dichiarazione proprietà  */
    this.resNumber = 0;
    this.resLoaded = 0;
    this.errors = [];
    this.status = 0;
    this.loading = false; //Variabile per il caricamento

    /* caricamento sprite e immagini */
    this.LoadSprite = function(url, frames, funct) {
        this.loading = true;
        let img = new Image();
        img.src = url;
        img.rh = this;
        this.resNumber++;
        img.frames = frames;
        this.w = this.width/this.frames;
        img.onload = function() {
            if(funct !== undefined) {
                funct();
            }
            this.w = this.width/this.frames;
            this.rh.resLoaded++;
            this.rh.CheckLoaded();
        };
        img.addEventListener("error", function(e) {
            this.rh.resNumber--;
            this.rh.errors.push([url, e]);
            this.rh.CheckLoaded();
        });
        return img;
    }
    //Barra di caricamento
    this.CheckLoaded = function() {
        if(!this.loading) return null;
        this.DrawLoading();
        if(this.resLoaded + this.errors.length >= this.resNumber) {
            callback();
            this.resNumber = 0;
            this.resLoaded = 0;
            this.loading = false;
        }
    }

     //disegno del loader
    this.DrawLoading = function() {
        //percentuale di caricamento
        this.status = (this.resLoaded) / (this.resNumber + this.errors.length);
        //centro del canvas
        let cx = game.canvas.width/2;
        let cy = game.canvas.height/2;
        //imposta il colore di riempimento
        game.ctx.fillStyle = "#333";
        //disegna un rettangolo grande quanto il canvas
        game.ctx.fillRect(0, 0, game.canvas.width, game.canvas.height);
        //avvia il path di disegno primitive
        game.ctx.beginPath();
        game.ctx.strokeStyle = "#222";
        //imposta lo spessore della linea da disegnare
        game.ctx.lineWidth = 25;
        //aggiunge un arco al path (una corona circolare di raggio 80)
        game.ctx.arc(cx, cy, 80, 0, Math.PI*2, false);
        //disegna il path
        game.ctx.stroke();
        //calcola i radianti del secondo arco,
        let radians = (360 * this.status) * Math.PI / 180;
        //disegna il secondo arco
        game.ctx.beginPath();
        game.ctx.strokeStyle = "#ddd";
        game.ctx.lineWidth = 25;
        game.ctx.arc(cx, cy, 80, 0 - 90*Math.PI/180, radians - 90*Math.PI/180, false);
        game.ctx.stroke();
        //Imposta un font e disegna il testo al centro del cerchio di caricamento
        game.ctx.font = '22pt Segoe UI Light';
        game.ctx.fillStyle = '#ddd';
        game.ctx.fillText(Math.floor(this.status*100) + "%",cx-25,cy+10);
    }
}