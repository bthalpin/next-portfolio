'use client'

import { useEffect, useState } from "react"

export default function SimpleGame ({ playerName } : { playerName: string }) {
    const [color, setColor] = useState('#0270ff')
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })
    const [clickCount, setClickCount] = useState(0)

    const colors = ['#296cc4', '#30a5db', '#489da3', '#4966c5', '#5a53c7', '#a465b8']
    useEffect(() => {
        setInterval(() => {
            const randomIndex = Math.floor(Math.random() * colors.length)
            setColor(colors[randomIndex])

            const randomX = Math.floor(Math.random() * 90)
            const randomY = Math.floor(Math.random() * 90)

            setPosition({
                x: randomX,
                y: randomY
            })
        }, 1500)
    }, [])

    const fontFamily = `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;`
    return (
        <div style={{ backgroundColor: color, margin: 0, padding: 0, position: 'fixed', inset: 0}}>
            <div style={{ position: 'absolute', left: `${position.x}%`, top: `${position.y}%`, display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '5px', background: '#afcce4', padding: '20px', borderRadius: '5px', boxShadow: '5px 5px 5px #00000073' }}>
                <p style={{margin: 0,fontSize: '20px', fontWeight: 500, fontFamily, textAlign: 'center' }}>PLAYER {playerName.toUpperCase()}</p>
                <p style={{margin: 0,fontSize: '20px', fontWeight: 500, fontFamily, textAlign: 'center'}}>TOTAL CLICKS {clickCount}</p>
                <button onClick={() => setClickCount(prevCount => prevCount + 1)} style={{ fontSize: '20px', fontFamily, fontWeight: 500, borderRadius: '5px', cursor: 'pointer'}}>CLICK ME</button>
            </div>
        </div>
    )
}