import getRandomColor from '../../utils/getRandomColor'

//imports........................................................................................

function RaffleCode({ raffleCode }) {
	const color = getRandomColor()
	return <div className={`bg-black text-white p-1 rounded`}>{raffleCode}</div>
}

export default RaffleCode
