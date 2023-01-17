import Head from 'next/head'
import {useEffect, useState} from 'react'
import styles from '../styles/Home.module.css'


interface Props {
    handleCredChange: (userName: string, roomName: string) => void;
    handleLogin: () => void;
}

interface EventProps {
    target: HTMLInputElement;
}

export default function Home({handleCredChange, handleLogin}: Props) {
    const [roomName, setRoomName] = useState('')
    const [userName, setUserName] = useState('')

    useEffect(() => {
        handleCredChange(userName, roomName)
    }, [roomName, userName, handleCredChange])


    return (
        <div className={styles.container}>
            <Head>
                <title>Chat service</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <form className={styles.main} onSubmit={handleLogin} autoComplete="off">
                <div className={styles.imgContainer}>
                    <img src="/pattern.png" alt=""/>
                </div>
                <h2>Get your video conference room</h2>
                <input onChange={(event) => setUserName(event.target.value)}
                       className={styles['room-name']}
                       placeholder="Enter your name"
                       data-lpignore="true"/>
                <input onChange={(event: EventProps) => setRoomName(event.target.value)}
                       value={roomName}
                       className={styles['room-name']}
                       placeholder="Enter Room Name"
                       data-lpignore="true"/>
                <button type="submit" className={styles['join-room']}>Join/Create Room</button>
            </form>
        </div>
    )
}
