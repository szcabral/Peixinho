const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

var peixe;

function preload(){
    this.load.image("mar","peixinhos/37130.jpg");
    this.load.image("peixe","peixinhos/crustaceo.png")
    this.load.image("logo","peixinhos/logo-inteli_branco.png")
    this.load.image("camaraozinho","peixinhos/camarao.png")
}
function create(){
    this.add.image(400, 300, "mar").setScale(0.3);
    this.add.image(400, 525, "logo").setScale(0.5);
    peixe = this.add.image(400, 300, "peixe");

    peixe.setFlip(true, false);

    camaraozinho = this.add.image(600, 425, "camaraozinho").setScale(0.05);
}

function update(){

    peixe.x = this.input.x;
    peixe.y = this.input.y;
    }

