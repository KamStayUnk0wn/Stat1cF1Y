import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

const PORT = 3001

app.get('/events', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  })

  const sendEvent = () => {
    const songs = [
      { title: 'Bohemian Rhapsody', artist: 'Queen' },
      { title: 'Imagine', artist: 'John Lennon' },
      { title: 'Billie Jean', artist: 'Michael Jackson' },
      { title: 'Like a Rolling Stone', artist: 'Bob Dylan' },
      { title: 'Smells Like Teen Spirit', artist: 'Nirvana' }
    ]
    const randomSong = songs[Math.floor(Math.random() * songs.length)]
    res.write(`data: ${JSON.stringify({ type: 'songChange', song: randomSong })}\n\n`)
  }

  // Send an event every 5 seconds
  const intervalId = setInterval(sendEvent, 5000)

  // Clean up on close
  req.on('close', () => {
    clearInterval(intervalId)
  })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})