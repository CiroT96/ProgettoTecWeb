function MainMenu() {
    this.Draw = function () {
        this.screen();
    }
    this.MainScreen = function () {

        game.ctx.save();
        game.ctx.fillStyle = game.patternMenu;
        game.ctx.fillRect(0, 0, game.canvas.width, game.canvas.height);
        game.ctx.restore();

        game.ctx.drawImage(game.sprLogo, 200, 60);//Titolo
        game.ctx.drawImage(game.sprLogo2, 20, 20);//Logo

        game.ctx.shadowColor = "#000";
        game.ctx.shadowOffsetX = 1;
        game.ctx.font = "32pt 'PixelFont'"
        game.ctx.textAlign = "center";
        game.ctx.shadowBlur = 3;

        //Tasto Start
        if (Inputs.MouseInsideText("START", 150, 350, "#aee", "#ea4") && Inputs.GetMousePress(MOUSE_LEFT)) {
           game.mainMenu.screen = game.mainMenu.SelectionScreen;
            Inputs.Clear();
        }
    }
    this.screen = this.MainScreen;

    this.SelectionScreen = function () {

        //background
        game.ctx.drawImage(game.backgroundSelect, 0, 0);
        //logo
        game.ctx.drawImage(game.sprSelectLogo,185, 50);
        //freccia dietro
        game.ctx.drawImage(game.sprSelectFreccia,100,40);

        if (Inputs.MouseInsideRect(100, 40,game.sprSelectFreccia.width,game.sprSelectFreccia.height)){
            if (Inputs.GetMousePress(MOUSE_LEFT)) {
                game.mainMenu.screen = game.mainMenu.MainScreen;
                Inputs.Clear();
            }
        }

        let x = 180;
        let y = 180;
        let w = game.sprSelectLevel.w;
        let perRow = 5;
        let spacing = 20;
        let totLevels = 5;
        let levels = 0;

        game.ctx.fillStyle = "#87CEFA";
        game.ctx.font = "40pt 'PixelFont'"
        game.ctx.textAlign = "center";

        for(let i=0; i < totLevels; i++){
            /*
            Coordinate del Pallone/livello
             */
            let px = x + (w+spacing)*(i % perRow);
            let py = y + (w+spacing)*Math.floor(i/perRow);
                //Disegno il pallone per selezionare il livello
                game.ctx.drawImage(game.sprSelectLevel,px, py);
                levels = levels +  1;
                if(Inputs.MouseInsideRect(px, py, w, w)){
                    if(Inputs.GetMousePress(MOUSE_LEFT)){
                        game.LoadLevel(levels);
                        Inputs.Clear();
                    }
                }
            game.ctx.fillText(String(levels), px+w/2, py+45);
            }
        game.ctx.textAlign = "start";
        }
}
