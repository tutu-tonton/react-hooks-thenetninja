//========================================
//  入力欄コンポーネント
//  ローカルstate所持
//  親からのメソッドに、ローカルstateを詰め込んで、親に返す
//========================================

import React, { useState } from 'react';

const NewSongForm = ({ addSong }) => {
	const [title, setTitle] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(title);
		// propsのaddSongに、titleを入れて返してあげる
		addSong(title);
		setTitle('');
	};
	return (
		<form onSubmit={handleSubmit}>
			<label>Song name:</label>
			<input type="text" value={title} required onChange={(e) => setTitle(e.target.value)} />
			<input type="submit" value="add song" />
		</form>
	);
};

export default NewSongForm;
