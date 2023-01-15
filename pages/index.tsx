import Head from 'next/head'
import {useEffect, useState} from 'react'
import styles from '../styles/Home.module.css'


interface Props {
    handleCredChange: (roomName: string) => void;
    handleLogin: () => void;
}

interface EventProps {
    target: HTMLInputElement;
}

export default function Home({handleCredChange, handleLogin}: Props) {
    const [roomName, setRoomName] = useState('')

    useEffect(() => {
        handleCredChange(roomName)
    }, [roomName, handleCredChange])


    return (
        <div className={styles.container}>
            <Head>
                <title>Online Chat By Riccardo Bertolini</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <form className={styles.main} onSubmit={handleLogin} autoComplete="off">
                <h1>📽️📞 CallMeNow</h1>
                <h5>WebRTC API with NextJS and Pusher</h5>

                <input onChange={(event: EventProps) => setRoomName(event.target.value)}
                       value={roomName}
                       className={styles['room-name']}
                       placeholder="Enter Room Name"
                       data-lpignore="true"/>
                <button type="submit" className={styles['join-room']}>Join Room</button>
            </form>
        </div>
    )
}