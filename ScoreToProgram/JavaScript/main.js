let game = null;

/*
Crezione funzione Player
 */

function Player(){
    this.sprite = game.sprPlayer1Move; //Carico lo sprite del movimento del Player
    this.curFrame = 0;
    this.animSpeed = 0.2;
    this.width = this.sprite.w;
    this.height = this.sprite.height;
    this.xStart = 100;
    this.yStart = 320;
    this.x = this.xStart;
    this.y = this.yStart;
    this.xOffset = Math.floor(this.width/2);
    this.yOffset = this.height;
    this.maxSpeed = 5;
    this.hSpeed = 0;
    this.Draw = function(){
        game.ctx.save();
        game.ctx.translate(this.x-game.viewX,this.y-game.viewY);
        game.ctx.scale(this.scaling, 1);
        let ox = Math.floor(this.curFrame) * this.width;
        game.ctx.drawImage(this.sprite, ox, 0,
            this.sprite.w, this.sprite.height,
            -this.xOffset, -this.yOffset,
            this.sprite.w, this.sprite.height);
        game.ctx.restore();
    }
    this.Update = function() {
        if(Inputs.GetKeyDown(KEY_RIGHT)) {
            if(this.hSpeed < 0) this.hSpeed = 0;
            if(this.hSpeed < this.maxSpeed) this.hSpeed += 0.2;
        }
        else if(Inputs.GetKeyDown(KEY_LEFT)) {
            if(this.hSpeed > 0) this.hSpeed = 0;
            if(this.hSpeed > -this.maxSpeed) this.hSpeed -= 0.2;
        }
        else{
            this.hSpeed/=1.1;
            if(Math.abs(this.hSpeed) < 1) {
                this.hSpeed = 0;
                //Imposto lo sprite del Player fermo
                this.sprite =game.sprPlayer1Idle;
                this.curFrame = 0;
            }
        }
        if(this.hSpeed !== 0){
            // sposto il player
            this.x += this.hSpeed;
            //Oriento lo sprite in orizzontale
            this.scaling = (this.hSpeed < 0) ? -1 : 1;
            //Cambio sprite
            if(this.sprite !== game.sprPlayer1Move) {
                this.sprite = game.sprPlayer1Move;
                this.curFrame = 0;
            }
            this.animSpeed = 0.1 + Math.abs( this.hSpeed / this.maxSpeed * 0.12);
        }
    }

    /*
    Creazione dei movimenti del Player
    */
    this.UpdateAnimation = function() {
        this.curFrame += this.animSpeed;
        if(this.animSpeed > 0) {
            let diff = this.curFrame - this.sprite.frames;
            if(diff >= 0){
                this.curFrame = diff;
            }
        }
        else if(this.curFrame < 0){
            this.curFrame = (this.sprite.frames + this.curFrame) - 0.0000001;
        }
    }
}
/*
Crezione dell'oggetto Pallone
 */
function Pallone() {
    this.sprite = game.sprPalloneIdle; //Carico lo sprite del movimento del Player
    this.curFrame = 0;
    this.animSpeed = 0.2;
    this.width = this.sprite.w;
    this.height = this.sprite.height;
    this.xStart = game.canvas.width/2;
    this.yStart = game.canvas.height/2+100;
    this.x = this.xStart;
    this.y = this.yStart;
    this.xOffset = Math.floor(this.width/2);
    this.yOffset = this.height;
    this.maxSpeed = 5;
    this.hSpeed = 0;
    this.Draw = function(){
        game.ctx.save();
        game.ctx.translate(this.x-game.viewX,this.y-game.viewY);
        game.ctx.scale(this.scaling, 1);
        let ox = Math.floor(this.curFrame) * this.width;
        game.ctx.drawImage(this.sprite, ox, 0,
            this.sprite.w, this.sprite.height,
            -this.xOffset, -this.yOffset,
            this.sprite.w, this.sprite.height);
        game.ctx.restore();
    }
    this.Update = function() {
        if(Inputs.GetKeyDown(KEY_SPACE)) {
            if(this.hSpeed < 0) this.hSpeed = 0;
            if(this.hSpeed < this.maxSpeed) this.hSpeed += 0.2;
        }
        else{
            this.hSpeed/=1.1;
            if(Math.abs(this.hSpeed) < 1) {
                this.hSpeed = 0;
                //Imposto lo sprite del Player fermo
                this.sprite =game.sprPalloneIdle;
                this.curFrame = 0;
            }
        }
        if(this.hSpeed !== 0){
            // sposto il pallone
            this.x += this.hSpeed;
            //Oriento lo sprite in orizzontale
            this.scaling = (this.hSpeed < 0) ? -1 : 1;
            //Cambio sprite
            if(this.sprite !== game.sprPalloneIdle) {
                this.sprite = game.sprPalloneIdle;
                this.curFrame = 0;
            }
            this.animSpeed = 0.1 + Math.abs( this.hSpeed / this.maxSpeed * 0.12);
        }
    }

    /*
    Creazione dei movimenti del Pallone
    */
    this.UpdateAnimation = function() {
        this.curFrame += this.animSpeed;
        if(this.animSpeed > 0) {
            let diff = this.curFrame - this.sprite.frames;
            if(diff >= 0){
                this.curFrame = diff;
            }
        }
        else if(this.curFrame < 0){
            this.curFrame = (this.sprite.frames + this.curFrame) - 0.0000001;
        }
    }

}


/*
Funzione di inzio e istanziamanto del Game
 */
function StartGame(){
    //crea un istanza di Game
    game = new Game();
}
function Game() {
    // id del div dov'è contenuto il canvas
    this.div = document.getElementById("GameDiv");
    this.div.style.width = "768px";
    this.div.style.height = "432px";
    // id del canvas
    this.canvas = document.getElementById("GameCanvas");
    this.canvas.setAttribute("width", "768px");
    this.canvas.setAttribute("height", "432px");
    this.canvas.defaultWidth = this.canvas.width;
    this.canvas.defaultHeight = this.canvas.height;
    //il cursore sarà visibile nell'area di gioco
    this.canvas.style.cursor = "true";
    //id del context 2d HTML5
    this.ctx = this.canvas.getContext("2d");

    this.viewX = 0;
    this.viewY = 0;

    this.paused = false;
    this.level = 0;

    this.score = 0;
    this.spacing = 2;
    this.sleep = false;


    let rh = new ResourcesHandler(function () {
        game.LoadLevel(0);
        game.GameLoop();
    });

    /*
    Caricamento menu principale
     */

    //menu
    this.sprLogo = rh.LoadSprite("Img/Logo.png", 1);
    this.sprLogo2 = rh.LoadSprite("Img/Logo2.png", 1);

    //Background
    this.backgroundSelect = rh.LoadSprite("Img/Backgroundselect.png",1);
    this.backgroundGioco = rh.LoadSprite("Img/Backgroundgioco.png",1);
    this.backgroundMenu = rh.LoadSprite("Img/Backgroundmenu.png", 1, function () {
        game.patternMenu = game.ctx.createPattern(game.backgroundMenu, "repeat");
    });

    //BackGround Domande&Risposte
    this.backgroundDomanda = rh.LoadSprite("Img/backgroundDomanda.png",1);
    this.backgroundDomanda1 = rh.LoadSprite("Img/backgroundDomanda1.png",1);
    this.backgroundDomanda2 = rh.LoadSprite("Img/backgroundDomanda2.png",1);
    this.backgroundDomanda4 = rh.LoadSprite("Img/backgroundDomanda4.png",1);
    this.backgroundDomanda6 = rh.LoadSprite("Img/backgroundDomanda6.png",1);

    this.backgroundRisposta1 = rh.LoadSprite("Img/backgroundrisposte.png",1);
    this.backgroundRisposta2 = rh.LoadSprite("Img/backgroundrisposte.png",1);
    this.backgroundRisposta3 = rh.LoadSprite("Img/backgroundrisposte.png",1);

    //level selection
    this.sprSelectLogo = rh.LoadSprite("Img/SelectLevel.png", 1);
    this.sprSelectFreccia = rh.LoadSprite("Img/SelectFreccia.png", 1);
    this.sprSelectLevel = rh.LoadSprite("Img/SelectLevelPallone.png",1);
    //Player
    this.sprPlayer1Move = rh.LoadSprite("Img/Movimento.png",3);
    this.sprPlayer1Idle = rh.LoadSprite("Img/PlayerIdle.png",1);
    //Pallone
    this.sprPalloneIdle = rh.LoadSprite("Img/Pallone.png",1);
    //Porta
    this.sprPorta = rh.LoadSprite("Porta.png",1);
    //Portiere
    this.sprPortiereIdle = rh.LoadSprite("PortiereIdle.png",1);
    this.sprPortiereParata = rh.LoadSprite("PortiereParata.png",1);
    this.sprPortiereGoal = rh.LoadSprite("PortiereGoal.png",1);
    //End Game
    this.sprGameOver = rh.LoadSprite("Img/GameOver.png",1);
    this.sprGameWinner = rh.LoadSprite("Img/WINNER.png",1);



    //aggiorna tutto
    this.Update = function () {
        if(this.level > 0) {
            this.player.Update();
            this.pallone.Update();
        }
    }

    //aggiorna animazioni
    this.EndLoop = function(){
        if(this.level > 0){
            this.player.UpdateAnimation();
            this.pallone.UpdateAnimation();
        }
    }

    this.Draw = function () {
        //Pulisco Schermata del canvas precedente disegnato
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.level === 0) {
            //menu principale
            this.mainMenu.Draw();
        } else {
            //disegno il livello di gioco
            this.ctx.drawImage(this.backgroundGioco, 0, 0, 768, 432);
            this.ctx.drawImage(this.sprPorta, 650, 80, 120, 300);
            this.ctx.drawImage(this.sprPortiereIdle, 600, 200, 60, 150);
            this.ctx.drawImage(this.backgroundRisposta1, 10, 100, 320, 40);
            this.ctx.drawImage(this.backgroundRisposta2, 200, 150, 320, 40);
            this.ctx.drawImage(this.backgroundRisposta3, 350, 100, 320, 40);
            //Gestione domande e risposte
            if (this.level === 1) {

                this.ctx.drawImage(this.backgroundDomanda, 0, 0, 770, 65);

                if (Inputs.MouseInsideText("Ricorsiva", 50, 138, "#ff0000", "#ea4") && Inputs.GetMousePress(MOUSE_LEFT)) {
                    //Risposta esatta
                    this.EndLevel(true);
                    Inputs.Clear();
                } else if (Inputs.MouseInsideText("Iterativa", 280, 187, "#ff0000", "#ea4") && Inputs.GetMousePress(MOUSE_LEFT)) {
                    //Risposta errata
                    this.EndLevel(false);
                    Inputs.Clear();
                } else if (Inputs.MouseInsideText("Ridondante", 380, 138, "#ff0000", "#ea4") && Inputs.GetMousePress(MOUSE_LEFT)) {
                    //Risposta errata
                    this.EndLevel(false);
                    Inputs.Clear();
                }

            }
                if (this.level === 2) {

                    this.ctx.drawImage(this.backgroundDomanda2, 0, 0, 770, 65);

                    if (Inputs.MouseInsideText("Bitwise", 50, 138, "#ff0000", "#ea4") && Inputs.GetMousePress(MOUSE_LEFT)) {
                        //Risposta esatta
                        this.EndLevel(true);
                        Inputs.Clear();
                    } else if (Inputs.MouseInsideText("Logici", 280, 187, "#ff0000", "#ea4") && Inputs.GetMousePress(MOUSE_LEFT)) {
                        //Risposta errata
                        this.EndLevel(false);
                        Inputs.Clear();
                    } else if (Inputs.MouseInsideText("Aritmetici", 380, 138, "#ff0000", "#ea4") && Inputs.GetMousePress(MOUSE_LEFT)) {
                        //Risposta errata
                        this.EndLevel(false);
                        Inputs.Clear();
                    }

                }
                if (this.level === 3) {

                    this.ctx.drawImage(this.backgroundDomanda6, 0, 0, 770, 65);

                    if (Inputs.MouseInsideText("For", 50, 138, "#FF0000", "#ea4") && Inputs.GetMousePress(MOUSE_LEFT)) {
                        //Risposta esatta
                        this.EndLevel(true);
                        Inputs.Clear();
                    } else if (Inputs.MouseInsideText("While", 280, 187, "#FF0000", "#ea4") && Inputs.GetMousePress(MOUSE_LEFT)) {
                        //Risposta errata
                        this.EndLevel(false);
                        Inputs.Clear();
                    } else if (Inputs.MouseInsideText("If", 380, 138, "#FF0000", "#ea4") && Inputs.GetMousePress(MOUSE_LEFT)) {
                        //Risposta errata
                        this.EndLevel(false);
                        Inputs.Clear();
                    }
                }
                if (this.level === 4) {

                    this.ctx.drawImage(this.backgroundDomanda4, 0, 0, 770, 65);

                    if (Inputs.MouseInsideText("Due Byte", 50, 138, "#FF0000", "#ea4") && Inputs.GetMousePress(MOUSE_LEFT)) {
                        //Risposta esatta
                        this.EndLevel(true);
                        Inputs.Clear();
                    } else if (Inputs.MouseInsideText("Quattro Byte", 220, 187, "#FF0000", "#ea4") && Inputs.GetMousePress(MOUSE_LEFT)) {
                        //Risposta errata
                        this.EndLevel(false);
                        Inputs.Clear();
                    } else if (Inputs.MouseInsideText("Otto Byte", 380, 138, "#FF0000", "#ea4") && Inputs.GetMousePress(MOUSE_LEFT)) {
                        //Risposta errata
                        this.EndLevel(false);
                        Inputs.Clear();
                    }
                }
                if (this.level === 5) {

                    this.ctx.drawImage(this.backgroundDomanda1, 0, 0, 770, 65);

                    if (Inputs.MouseInsideText("OOB", 120, 138, "#FF0000", "#ea4") && Inputs.GetMousePress(MOUSE_LEFT)) {
                        //Risposta esatta
                        this.EndLevel(true);
                        Inputs.Clear();
                    } else if (Inputs.MouseInsideText("Funzionale", 250, 187, "#FF0000", "#ea4") && Inputs.GetMousePress(MOUSE_LEFT)) {
                        //Risposta errata
                        this.EndLevel(false);
                        Inputs.Clear();
                    } else if (Inputs.MouseInsideText("Procedurale", 380, 138, "#FF0000", "#ea4") && Inputs.GetMousePress(MOUSE_LEFT)) {
                        //Risposta errata
                        this.EndLevel(false);
                        Inputs.Clear();
                    }
                }
            this.player.Draw();
            this.pallone.Draw();
            this.ctx.restore();
        }
    }

    this.ResetLevel = function(){
        this.player = null;
        this.pallone = null;
        this.mainMenu = null;
    }

    this.LoadLevel = function (lev) {
        //Resetta tutte le istanze
        this.ResetLevel();
        if (lev === 0) {
            //menu
            this.mainMenu = new MainMenu();
        } else{
            //primo livello
            this.player = new Player();
            this.pallone = new Pallone();
        }
        this.level = lev;
    }

    //Definizione dell'oggetto GameLoop
    this.GameLoop = function () {
        if(!this.sleep){
            if(!this.paused){
                // aggiorna tutti gli oggetti
                this.Update();
            }
            //disegna tutto a schermo
        }

        this.Draw();
        //this.EndLoop();

        if(!this.sleep){
            if(!this.paused){
                //aggiorna le animazioni
                this.EndLoop();
            }
        }
        //resetta le variabili premuti e rilasciati
        //Inputs.clear();
        //Gestione Gioco
        window.requestAnimFrame(function() {
            game.GameLoop();
        });
    }
    //Funzione che gestisce il gioco quando termina
    this.EndLevel = function (x) {
        this.ResetLevel();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        if(x === true){
            this.ctx.drawImage(this.sprPortiereGoal,0,0,768,432);
            this.ctx.drawImage(this.sprGameWinner,300,0,500,230);
        }else{
            this.ctx.drawImage(this.sprPortiereParata,0,0,768,432);
            this.ctx.drawImage(this.sprGameOver,0,0,325,190);
        }
    }
}