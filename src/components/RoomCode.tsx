import React from 'react';

import toast from 'react-hot-toast';
import copyImg from '../assets/images/copy.svg';
import '../styles/room-code.scss';

type RoomCodeProps = {
	code: string;
};

export function RoomCode(props: RoomCodeProps) {
	const { code } = props;
	function copyRoomCode() {
		navigator.clipboard.writeText(props.code);
		toast('Código da sala copiado!', {
			icon: '📋',
			duration: 1500,
			style: { background: '#835afd', color: '#f3f3f3' },
		});
	}
	return (
		<button type="button" onClick={copyRoomCode}>
			<div>
				<img src={copyImg} alt="copy-room-code" />
			</div>
			<span>Código: {code} </span>
		</button>
	);
}
