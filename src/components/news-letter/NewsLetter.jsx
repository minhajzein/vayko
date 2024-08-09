import React from 'react'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'

//imports................................................................................................

function NewsLetter() {
	return (
		<div className='bg-[#88141E] hidden items-center gap-2 p-16 text-white md:flex flex-col'>
			<h1 className='capitalize text-xl'>stay updated</h1>
			<h1 className='text-3xl text-center capitalize'>
				Follow Us on Instagram
			</h1>
			<p className='text-center'>
				Get the latest offers, updates, and exclusive deals. Follow our
				Instagram page and stay connected!
			</p>
			<form className='pt-3'>
				<a
					href='https://www.instagram.com/vayko.in/'
					target='_blank'
					className='bg-white flex justify-center items-center gap-2 font-semibold capitalize py-2 px-4 text-[#88141E]  rounded-full'
				>
					<FaInstagram className='text-purple-500' />
					join now
				</a>
			</form>
		</div>
	)
}

export default NewsLetter
