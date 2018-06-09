const Jimp = require('jimp');

exports.execute = (client, message, args) => {
    message.channel.startTyping();
    var imgPath = "dog_template.png";
    var img;
    var text = "hello there :^D";

    // TODO remove default message
    if(args.length > 1){
        args.shift();
        text = args.join(" ");
    }

    Jimp.read(imgPath).then((image) => {
        img = image;
        return Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
    }).then((font) => {
        img.print(font, 350, 25, text, 280).write("img01.png", () => {
            message.channel.send({
                files: [{
                    attachment: "img01.png",
                    name: "retard_dog.png"
                }]
            });
            message.channel.stopTyping();
        });
    });
};

exports.info = {
    name: "retarded",
    alias: ["r", "retard"],
    permission: "default",
    type: "fun",
    guildOnly: false,
    help: "Print text to the retarded dog image :>"
};
