import ytdl from 'ytdl-core'
import fs from 'fs'

export const download = (videoId) => new Promise ((resolve, reject) => {
    const videoURL = `https://www.youtube.com/shorts/${videoId}`
    console.log(`Realizando o download do vídeo ${videoId}`)

    ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" })
        .on(
            "info",
            (info) => {
                const seconds = info.formats[0].approxDurationMs / 1000
                if (seconds > 61) {
                    throw new Error("duração maior que 60 seg")
                }
            })
        .on('end', () => {
            console.log("Download concluído.")
            resolve()
        })
        .on("error", (error) => {
            console.log('não foi possivel fazer o donwload do video.', error)
            reject(error)
        })
        .pipe(fs.createWriteStream('./tmp/audio.mp4'))
})