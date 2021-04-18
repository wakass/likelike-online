//settings are just variables that can be sent to the client from the server
//they are either related to the rooms or shared with the server 
module.exports.SETTINGS = {
    //if not specified by the url where is the starting point
    defaultRoom: "lobby",
    //minimum time between talk messages enforced by both client and server
    ANTI_SPAM: 1000,
    //shows up at first non lurking login
    INTRO_TEXT: "Click/tap to move"
};

//miscellaneous assets to preload
module.exports.IMAGES = [
    ["sheepIdle", "sheep-idle.png"],
    ["sheepWalk", "sheep-walk.png"],
    ["wifeWalk", "wife.png"],
    ["wifeEmote", "wife-emote.png"],
    ["husbandWalk", "husband.png"],
    ["husbandEmote", "husband-emote.png"],
    ["child1Walk", "child1.png"],
    ["child1Emote", "child1-emote.png"],
    ["child2Walk", "child2.png"],
    ["child2Emote", "child2-emote.png"],
    ["child3Walk", "child3.png"],
    ["child3Emote", "child3-emote.png"],
    ["uncleWalk", "uncle.png"],
    ["uncleEmote", "uncle-emote.png"],
    ["milkmanWalk", "milkman.png"],
    ["milkmanEmote", "milkman-emote.png"],
    ["boyfriendWalk", "child-boyfriend.png"],
    ["boyfriendEmote", "child-boyfriend-emote.png"],
    ["flyWalk", "fly.png"],
    ["flyEmote", "fly-emote.png"]
];

//miscellaneous sounds to preload
module.exports.SOUNDS = [
    ["beat1", "beat1.ogg"], 
    ["beat2", "beat2.ogg"], 
    ["beat3", "beat3.ogg"] 
];

module.exports.ROOMS = {

    lobby: {
        bg: "lobbyBg.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 2,
        pageBg: "#ab5236",
        area: "lobbyArea.png",
        music: "lobby.ogg",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [38, 83, 100, 100],
        areaColors: {
            //h will be replaced by #
            hff00ff: { cmd: "enter", room: "theStateOfMaine", label: "Enter SICKSICK", point: [60, 35], enterPoint: [104, 98], obstacle: false },
        }
    },

    theStateOfMaine: {
        bg: "theStateOfMaineBg.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 4,
        pageBg: "#ab5236",
        area: "theStateOfMaineArea.png",
        music: "theStateOfMaine.ogg",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [38, 80, 100, 100],
        areaColors: {
            //h will be replaced by #
            hf800ff: { cmd: "enter", room: "garden", label: "Garden", point: [46, 84], enterPoint: [104, 98], obstacle: false },
            h79077c: { cmd: "enter", room: "barbarella", label: "Barbarella", point: [74, 84], enterPoint: [8, 21], obstacle: false },
            ha924ad: { cmd: "enter", room: "neon", label: "Neon", point: [96, 84], enterPoint: [104, 98], obstacle: false },
            h8b348d: { cmd: "enter", room: "makeupRoom", label: "Make up room", point: [111, 84], enterPoint: [104, 98], obstacle: false },
            h009688: { cmd: "enter", room: "lunarStage", label: "", point: [22, 75], enterPoint: [104, 98], obstacle: false },
        }
    },

    garden: {
        bg: "gardenBg.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 2,
        pageBg: "#ab5236",
        area: "gardenArea.png",
        music: "garden.ogg",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [38, 80, 100, 100],
        areaColors: {
            //h will be replaced by #
            h0000ff: { cmd: "enter", room: "theStateOfMaine", label: "State of Maine", point: [62, 73], enterPoint: [104, 98], obstacle: false },
            h00ff00: { cmd: "enter", room: "barbarella", label: "Barbarella", point: [13, 73], enterPoint: [8, 21], obstacle: false },
            hff0000: { cmd: "enter", room: "neon", label: "Neon", point: [117, 59], enterPoint: [104, 98], obstacle: false },
        }
    },

    lunarStage: {
        bg: "lunaBg.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 1,
        pageBg: "#ab5236",
        area: "lunaArea.png",
        music: "luna.ogg",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [38, 80, 100, 100],
        areaColors: {
            //h will be replaced by #
            hff00ff: { cmd: "enter", room: "neon", label: "Neon", point: [64, 50], enterPoint: [104, 98], obstacle: false },
        }
    },

    makeupRoom: {
        bg: "makeuproomBg.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 1,
        pageBg: "#ab5236",
        area: "makeuproomArea.png",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [5, 15, 21, 28],
        areaColors: {
            //h will be replaced by #
            hff0000: { cmd: "enter", room: "neon", label: "Neon", point: [121, 77], enterPoint: [104, 98], obstacle: false },
            h00ff00: { cmd: "enter", room: "theStateOfMaine", label: "State of Plupluplu", point: [85, 35], enterPoint: [104, 98], obstacle: false },
            h0000ff: { cmd: "enter", room: "barbarella", label: "Barbarella", point: [33, 54], enterPoint: [77, 90], obstacle: false },
        }
    },

    neon: {
        bg: "neonBg.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 1,
        pageBg: "#ab5236",
        area: "neonArea.png",
        music: "neon.ogg",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [15, 88, 37, 99],
        areaColors: {
            //h will be replaced by #
            hff0000: { cmd: "enter", room: "garden", label: "Voluptuous garden", point: [12, 92], enterPoint: [104, 98], obstacle: false },
            h00ff00: { cmd: "enter", room: "barbarella", label: "Barbarella", point: [77, 90], enterPoint: [62, 17], obstacle: false },
            h0000ff: { cmd: "enter", room: "makeupRoom", label: "Makeup room", point: [119, 94], enterPoint: [104, 98], obstacle: false },
        },

        things: {
            //sprite spreadsheets only 1 row ok?
            wall1: { file: "neonWall1.png", frames: 1, frameDelay: 1, position: [43, 100], label: "" },
            wall2: { file: "neonWall2.png", frames: 1, frameDelay: 1, position: [84, 100], label: "" }
        }
    },

    barbarella: {
        bg: "barbarellaBg.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 1,
        pageBg: "#ab5236",
        area: "barbarellaArea.png",
        music: "barbarella.ogg",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [5, 15, 21, 28],
        areaColors: {
            //h will be replaced by #
            hff0000: { cmd: "enter", room: "makeupRoom", label: "???", point: [113, 19], enterPoint: [104, 98], obstacle: false },
            h00ff00: { cmd: "enter", room: "garden", label: "???", point: [117, 86], enterPoint: [104, 98], obstacle: false },
            h0000ff: { cmd: "enter", room: "theStateOfMaine", label: "???", point: [16, 95], enterPoint: [104, 98], obstacle: false },
            hff00ff: { cmd: "enter", room: "neon", label: "???", point: [56, 13], enterPoint: [104, 98], obstacle: false },
            h00ffff: { cmd: "enter", room: "makeupRoom", label: "???", point: [58, 84], enterPoint: [104, 98], obstacle: false },
        }
    },
};