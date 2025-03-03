module.exports = {
    app: {
        token: process.env.DISCORD_TOKEN || 'MTM0NjE4ODQ2MzI3NTUxMTg3OQ.GVFErC.nnNqt73guyQPnK9DgSkU0J3yNQPgjvEqPKh2wU',
        playing: 'אוכל שווארמה',
        global: true,
        guild: process.env.GUILD_ID || '1181705177577820191',
        extraMessages: false,
        loopMessage: false,
        lang: 'en',
        enableEmojis: false,
    },

    emojis:{
        'back': '⏪',
        'skip': '⏩',
        'ResumePause': '⏯️',
        'savetrack': '💾',
        'volumeUp': '🔊',
        'volumeDown': '🔉',
        'loop': '🔁',
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        Translate_Timeout: 10000,
        maxVol: 100,
        spotifyBridge: true,
        volume: 75,
        leaveOnEmpty: true,
        leaveOnEmptyCooldown: 30000,
        leaveOnEnd: true,
        leaveOnEndCooldown: 30000,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
