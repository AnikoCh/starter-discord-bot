module.exports = {
    app: {
        token: 'MTA0MDc3NTYzOTM4MjM2NDI2NQ.Gj1yG5.NvSj1Jtm2l5F86kAW09sZNrtMxWFIgYmdlkRdg',
        listening: 'Spotify',
        global: true,
        guild: '1040776361800908861'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
