import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

//imports................................................................................................

function NewsLetter() {
	return (
		<div className='bg-[#88141E] hidden items-center gap-2 p-16 text-white md:flex flex-col'>
			<h1 className='capitalize text-xl'>stay updated</h1>
			<h1 className='text-3xl text-center capitalize'>
				join our whatsapp community
			</h1>
			<p className='text-center'>
				Get the latest offers, updates, and exclusive deals. <br />
				Join our WhatsApp community and stay connected!
			</p>
			<form className='pt-3'>
				<button className='bg-white flex justify-center items-center gap-2 font-semibold capitalize py-2 px-4 text-[#88141E]  rounded-full'>
					<FaWhatsapp className='text-green-600' />
					join now
				</button>
			</form>
		</div>
	)
}

export default NewsLetter
