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
            h8b348d: { cmd: "enter", room: "makeUpRoom", label: "Make up room", point: [111, 84], enterPoint: [104, 98], obstacle: false },
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
            hff008b: { cmd: "enter", room: "neon", label: "Neon", point: [64, 50], enterPoint: [104, 98], obstacle: false },
        }
    },

    barbarella: {
        bg: "barbarellaBg.png",
        frames: 2,
        frameDelay: 30,
        avatarScale: 1,
        pageBg: "#ab5236",
        area: "barbarellaArea.png",
        tint: "#fdeac8",
        bubblesY: 44,
        spawn: [5, 15, 21, 28],
        areaColors: {
            //h will be replaced by #
            hff0000: { cmd: "enter", room: "makeupRoom", label: "???", point: [120, 20], enterPoint: [104, 98], obstacle: false },
            h00ff00: { cmd: "enter", room: "garden", label: "???", point: [118, 88], enterPoint: [104, 98], obstacle: false },
            h0000ff: { cmd: "enter", room: "theStateOfMaine", label: "???", point: [14, 95], enterPoint: [104, 98], obstacle: false },
            hff00ff: { cmd: "enter", room: "neon", label: "???", point: [59, 15], enterPoint: [104, 98], obstacle: false },
            h00ffff: { cmd: "enter", room: "makeupRoom", label: "???", point: [55, 87], enterPoint: [104, 98], obstacle: false },
        }
    },
};