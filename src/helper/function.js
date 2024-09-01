// используется для получения данных с хранилища
export const getLocalStorage = () => {
	const play = JSON.parse(localStorage.getItem('play'))
	return play
}
