'use client'

import { useEffect, useState, useRef } from "react"

export default function SimpleGame ({ playerName } : { playerName: string }) {
    const clickRef = useRef(false)
    const [color, setColor] = useState('#0270ff')
    const [position, setPosition] = useState({
        x: 100,
        y: 50
    })
    const [clickCount, setClickCount] = useState(0)
    const [highScore, setHighScore] = useState(0)

    const colors = ['#296cc4', '#30a5db', '#489da3', '#4966c5', '#5a53c7', '#a465b8']

    const changePosition = () => {

        const randomX = Math.floor(Math.random() * (window.innerWidth - 100))
        const randomY = Math.floor(Math.random() * (window.innerHeight - 50))

        setPosition({
            x: randomX < 100 ? 100 : randomX,
            y: randomY < 50 ? 50 :randomY
        })
    }

    const loadScore = () => {
        const savedScore = localStorage.getItem(`${playerName}-high-score`)

        if (savedScore) {
            setHighScore(+savedScore)
        } else {
            const savedSessionScore = sessionStorage.getItem(`${playerName}-high-score`)

            if (savedSessionScore) {
                setHighScore(+savedSessionScore)
            } 
        }
    }

    useEffect(() => {
        loadScore()

        setInterval(() => {
            const randomIndex = Math.floor(Math.random() * colors.length)
            setColor(colors[randomIndex])

            if (clickRef.current === true) {
                return clickRef.current = false
            } 
            
            setClickCount(prevCount => {
                setHighScore(prevScore => {
                    const newHighScore = prevScore > prevCount ? prevScore : prevCount

                    localStorage.setItem(`${playerName}-high-score`, `${newHighScore}`)
                    sessionStorage.setItem(`${playerName}-high-score`, `${newHighScore}`)
                    return newHighScore
                })
                return 0
            })
            changePosition()
        }, 1500)


    }, [])

    const handleClick = () => {
        setClickCount(prevCount => {
            const newScore = prevCount + 1
            if (newScore > highScore) {
                setHighScore(newScore)
            }
            return newScore
        })
        clickRef.current= true
        changePosition()
    }

    const fontFamily = `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`
    const textStyles = {
        fontSize: '16px', fontWeight: 500, fontFamily,
    }


    const baseShadow = '0px 0px 5px 2px #00000073' 
    const level1Shadow = '0px 0px 5px 5px #af9313' 
    const level2Shadow = '0px 0px 10px 10px #d3b017' 
    const level3Shadow = '0px 0px 15px 15px #eb9617' 
    const level4Shadow = '0px 0px 20px 15px #ffd103' 


    return (
        <div style={{ backgroundColor: color, margin: 0, padding: 0, position: 'fixed', inset: 0, maxWidth: '100vw', maxHeight: '100vh'}}>
            <div style={{ padding: '10px'}}>
                <p style={{margin: 0, ...textStyles, textAlign: 'end' }}>PLAYER {playerName.toUpperCase()}</p>
                {highScore > 0 ?
                    <p style={{margin: 0, ...textStyles, textAlign: 'end' }}>HIGH SCORE {highScore}</p>
                : null}
            </div>

            <div style={{ width: '150px', position: 'absolute', transition: '0.2s all ease-in-out', transform: 'translate(-50%, -50%)',left: `${position.x}px`, top: `${position.y}px`, display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '5px', background: '#9cc3e4', padding: '20px', borderRadius: '5px',
                 boxShadow: clickCount > 16 ? level4Shadow : clickCount > 12 ? level3Shadow : clickCount > 9 ? level2Shadow : clickCount > 6 ? level1Shadow : baseShadow
                }}>
                <p style={{margin: 0, ...textStyles, textAlign: 'center'}}>TOTAL CLICKS {clickCount}</p>
                <button onClick={() => handleClick()} style={{ fontSize: '20px', fontFamily, fontWeight: 500, borderRadius: '5px', cursor: 'pointer'}}>CLICK ME</button>
            </div>
        </div>
    )
}