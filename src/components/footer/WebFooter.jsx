import React from 'react'
import { FaYoutube } from 'react-icons/fa'
import { FaSquareInstagram, FaSquareThreads, FaSquareXTwitter } from 'react-icons/fa6'
import { ImFacebook2 } from 'react-icons/im'
import { NavLink } from 'react-router-dom'

//imports................................................................................................................................

function WebFooter() {
	return (
		<div className='hidden md:flex flex-col gap-10 bg-[#212529] text-white p-16'>
			<div className='grid m-auto grid-cols-5 gap-16 w-[70%]'>
				<div className='flex flex-col gap-3 justify-center items-center'>
					<img
						src='/images/logwhite.png'
						className='h-24 object-contain'
						alt=''
					/>
					<div className='flex gap-1 text-xl m-auto text-white'>
						<a
							href='https://www.youtube.com/@vaykoin'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaYoutube />
						</a>
						<a
							href='https://www.instagram.com/vayko.in/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaSquareInstagram />
						</a>
						<a
							href='https://www.facebook.com/vaykoin/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<ImFacebook2 />
						</a>
						<a
							href='https://x.com/Vaykoin'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaSquareXTwitter />
						</a>
						<a
							href='https://www.threads.net/@vayko.in'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaSquareThreads />
						</a>
					</div>
				</div>
				<div className='flex flex-col gap-2'>
					<h1 className='font-bold text-xl'>Company</h1>
					<ul className='flex flex-col gap-1'>
						<NavLink
							className={({ isActive }) =>
								isActive ? 'text-[#FF0000]' : 'text-white'
							}
							to='/about-us'
						>
							<li className='capitalize'>about us</li>
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive ? 'text-[#FF0000]' : 'text-white'
							}
							to='/contact-us'
						>
							<li className='capitalize'>contact us</li>
						</NavLink>
					</ul>
				</div>
				<div className='flex flex-col gap-2'>
					<h1 className='font-bold text-xl'>Other links</h1>
					<ul className='flex flex-col gap-1'>
						<NavLink
							className={({ isActive }) =>
								isActive ? 'text-[#FF0000]' : 'text-white'
							}
							to='/profile'
						>
							<li className='capitalize'>Account</li>
						</NavLink>

						<NavLink
							className={({ isActive }) =>
								isActive ? 'text-[#FF0000]' : 'text-white'
							}
							to='/faq'
						>
							<li className='capitalize'>FAQ</li>
						</NavLink>
					</ul>
				</div>
				<div className='flex flex-col gap-2'>
					<h1 className='font-bold text-xl'>Policies</h1>
					<ul className='flex flex-col gap-2'>
						<NavLink
							className={({ isActive }) =>
								isActive ? 'text-[#FF0000]' : 'text-white'
							}
							to='/privacy-policy'
						>
							<li className='capitalize'>privacy policy</li>
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								isActive ? 'text-[#FF0000]' : 'text-white'
							}
							to='/terms-and-conditions'
						>
							<li className='capitalize'>Terms & Conditions</li>
						</NavLink>
					</ul>
				</div>
				<div className='flex flex-col gap-2'>
					<h1 className='font-bold text-xl'>Contact</h1>
					<ul className='flex flex-col gap-1'>
						<li>+91 9395 200700</li>
						<li>Kannur, Kerala</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default WebFooter
