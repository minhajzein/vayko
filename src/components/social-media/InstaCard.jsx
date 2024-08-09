//imports................................................................

function InstaCard({ embed }) {
	return (
		<div
			dangerouslySetInnerHTML={{ __html: embed }}
			// className='relative shadow-lg w-[104px]  md:w-[204px] md:h-[350px] h-[175px] flex justify-center items-center rounded-lg overflow-hidden'
		></div>
	)
}

export default InstaCard
