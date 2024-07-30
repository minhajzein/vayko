import { useState } from 'react'
import Menu from '/svgs/menu.svg'
import ArrowNavigate from '/svgs/arrow-navigate.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useGetCartQuery } from '../../redux/apiSlices/cartApiSlice'
import { CiUser } from 'react-icons/ci'
import { sendLogout } from '../../redux/slices/authSlice'

//imports................................................................................................

function Navbar() {
	const [isOpen, setIsOpen] = useState(false)
	const user = useSelector(state => state.auth.user)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { data: cartDetails } = useGetCartQuery(user?.id)

	return (
		<div className='w-full shadow-md md:px-[80px] px-4 sticky top-0 backdrop-blur-xl bg-white/50 z-40 py-4 flex justify-between  items-center'>
			<img
				src='/images/vayko-round-logo.png'
				onClick={() => navigate('/')}
				className='object-contain md:size-16 size-10 hover:scale-105 duration-300 cursor-pointer'
				alt='logo'
			/>
			<h1></h1>
			<div className='hidden md:flex items-center gap-6'>
				<ul className='hidden md:flex gap-6 font-semibold'>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'text-[#FF0000]' : 'text-black'
						}
						to='/'
					>
						<li className='capitalize'>home</li>
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'text-[#FF0000]' : 'text-black'
						}
						to='/products'
					>
						<li className='capitalize'>products</li>
					</NavLink>
					<NavLink
						className={({ isActive }) =>
							isActive ? 'text-[#FF0000]' : 'text-black'
						}
						to='/about-us'
					>
						<li className='capitalize'>about us</li>
					</NavLink>
					{user && (
						<NavLink
							className={({ isActive }) =>
								isActive ? 'text-[#FF0000]' : 'text-black'
							}
							to='/orders'
						>
							<li className='capitalize'>my orders</li>
						</NavLink>
					)}
				</ul>
				{user && (
					<NavLink to='/cart'>
						<div className='relative'>
							<img src='/svgs/shopping-cart.svg' alt='cart' />
							<div className='absolute top-0 right-0 flex -translate-y-1 bg-[#FF2A3E] size-5 text-white rounded-full text-[12px]'>
								<p className='m-auto'>
									{cartDetails?.cartProducts.data.reduce(
										(acc, cur) => (acc += Number(cur.quantity)),
										0
									)}
								</p>
							</div>
						</div>
					</NavLink>
				)}
				{user ? (
					<div className='group relative'>
						<img src='/images/review-profile.png' className='size-10' alt='' />
						<div className='bg-white absolute top-full w-60 right-0 hidden z-20 p-2 group-hover:block rounded-xl'>
							<ul>
								<NavLink to='/profile'>
									<li className='cursor-pointer capitalize p-2 border-b'>
										my profile
									</li>
								</NavLink>

								<li
									onClick={() => dispatch(sendLogout())}
									className='p-2 border-b capitalize text-[#FF2A3E] cursor-pointer'
								>
									logout
								</li>
							</ul>
						</div>
					</div>
				) : (
					<button
						onClick={() => navigate('/login')}
						className='bg-white border border-[#FF2A3E] flex justify-center items-center gap-2 font-semibold capitalize py-2 px-4 text-black rounded-full'
					>
						<CiUser className='text-[#FF2A3E]' />
						login
					</button>
				)}
			</div>
			{/* <input
				type='search'
				className='w-[60%] md:hidden rounded-full px-3 py-1 text-sm outline-none'
			/> */}
			<img
				onClick={() => setIsOpen(true)}
				className='md:hidden size-10'
				src={Menu}
				alt='menu'
			/>
			{/* mobile navigation */}
			<div
				className={`w-full h-dvh absolute top-0 ${
					isOpen ? 'right-0' : 'right-full'
				} bg-white duration-300 flex flex-col md:hidden justify-between pt-10 pb-24 p-4 `}
			>
				<img
					onClick={() => setIsOpen(false)}
					className='absolute top-4 right-4'
					src='/svgs/tag-cross-black.svg'
					alt='close'
				/>
				<div className='w-full flex flex-col gap-4'>
					<div className='flex flex-col'>
						{user && (
							<div className='flex gap-4 items-center'>
								<img
									className='size-16 object-contain '
									src='/images/review-profile.png'
									alt='avatar'
								/>
								<div>
									<h1 className='text-2xl font-bold'>{user?.name}</h1>
									<p className='font-semibold'>+91 {user?.contact}</p>
								</div>{' '}
							</div>
						)}

						<ul>
							{user ? (
								<>
									<NavLink to='/profile'>
										<li className='py-6 border-b flex justify-between border-black/20 text-xl font-semibold'>
											<h1 className='capitalize'>profile</h1>
											<img src={ArrowNavigate} alt='navigate' />
										</li>
									</NavLink>
									<NavLink to='/orders'>
										<li className='py-6 border-b flex justify-between border-black/20 text-xl font-semibold'>
											<h1 className='capitalize'>my orders</h1>
											<img src={ArrowNavigate} alt='navigate' />
										</li>
									</NavLink>
								</>
							) : (
								<>
									<NavLink to='/login'>
										<li className='py-6 border-b flex justify-between border-black/20 text-xl font-semibold'>
											<h1 className='capitalize'>login</h1>
											<img src={ArrowNavigate} alt='navigate' />
										</li>
									</NavLink>
									<NavLink to='/sign-up'>
										<li className='py-6 border-b flex justify-between border-black/20 text-xl font-semibold'>
											<h1 className='capitalize'>sign up</h1>
											<img src={ArrowNavigate} alt='navigate' />
										</li>
									</NavLink>
								</>
							)}
							<NavLink to='/about-us'>
								<li className='py-6 border-b flex justify-between border-black/20 text-xl font-semibold'>
									<h1 className='capitalize'>about us</h1>
									<img src={ArrowNavigate} alt='navigate' />
								</li>
							</NavLink>
							<NavLink to='/contact-us'>
								<li className='py-6 border-b flex justify-between border-black/20 text-xl font-semibold'>
									<h1 className='capitalize'>contact us</h1>
									<img src={ArrowNavigate} alt='navigate' />
								</li>
							</NavLink>
							<NavLink to='/terms-and-conditions'>
								<li className='py-6 border-b flex justify-between border-black/20 text-xl font-semibold'>
									<h1 className='capitalize'>Terms & conditions</h1>
									<img src={ArrowNavigate} alt='navigate' />
								</li>
							</NavLink>
							<NavLink to='/privacy-policy'>
								<li className='py-6 border-b flex justify-between border-black/20 text-xl font-semibold'>
									<h1 className='capitalize'>privacy policy</h1>
									<img src={ArrowNavigate} alt='navigate' />
								</li>
							</NavLink>
							<NavLink to='/faq'>
								<li className='py-6 border-b flex justify-between border-black/20 text-xl font-semibold'>
									<h1 className='capitalize'>FAQ</h1>
									<img src={ArrowNavigate} alt='navigate' />
								</li>
							</NavLink>
						</ul>
					</div>
				</div>
				<div className='flex flex-col gap-6 items-start'>
					{!user && <button className='text-red-600'>Logout</button>}
					<div>
						<h1 className='text-2xl uppercase font-semibold'>vayko</h1>
						<p>Version v1.0</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
