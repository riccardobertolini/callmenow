import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

export function Home() {
	const router = useRouter()
	const [roomName, setRoomName] = useState('')

	const joinRoom = () => {
		router.push(`/room/${roomName || Math.random().toString(36).slice(2)}`)
	}

	return (
		<div>
			<Head>
				<title>Native WebRTC API with NextJS</title>
				<meta
					name="description"
					content="Use Native WebRTC API for video conferencing"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<h1>Lets join a room!</h1>
				<input
					onChange={(e) => setRoomName(e.target.value)}
					value={roomName}
				/>
				<button onClick={joinRoom} type="button">
					Join Room
				</button>
			</main>
		</div>
	)
}

import { useEffect, useRef } from 'react'

const useSocket = () => {
	const socketCreated = useRef(false)
	useEffect(() => {
		if (!socketCreated.current) {
			const socketInitializer = async () => {
				await fetch('/api/socket')
			}
			try {
				socketInitializer()
				socketCreated.current = true
			} catch (error) {
				console.log(error)
			}
		}
	}, [])
}

export default useSocket
