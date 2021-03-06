const blessed = require("blessed");

module.exports = class extends blessed.list {
    constructor(options, items) {

        options = Object.assign({}, {
            keys: true,
            mouse: true,
            style: {
                fg: "blue",
                bg: "default",
                selected: {
                    bg: "green"
                },
                focus: {
                    selected: {
                        bg: "#BD3017"
                    }
                }
            },
        }, options);
        options.items = items;
        super(options);
        this.select(0);
    }
};