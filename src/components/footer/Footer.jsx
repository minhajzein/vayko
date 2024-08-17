import { useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'
import { useGetCartQuery } from '../../redux/apiSlices/cartApiSlice'

//imports................................................................

function Footer() {
	const { pathname } = useLocation()
	const user = useSelector(state => state.auth.user)
	const cart = useSelector(state => state.cart.cart)
	const { data: cartDetails } = useGetCartQuery(user?.id)

	const navItems = [
		{
			link: '/',
			icon: '/svgs/footer-icons/shop.svg',
			activeIcon: '/svgs/footer-icons/active-home.svg',
			name: 'home',
		},
		{
			link: '/products',
			icon: '/svgs/footer-icons/wishlist.svg',
			activeIcon: '/svgs/footer-icons/active-wishlist.svg',
			name: 'wishlist',
		},
		{
			link: '/cart',
			icon: '/svgs/footer-icons/cart.svg',
			activeIcon: '/svgs/footer-icons/active-cart.svg',
			name: 'cart',
		},
		{
			link: user ? '/profile' : '/login',
			icon: '/svgs/footer-icons/user.svg',
			activeIcon: '/svgs/footer-icons/active-user.svg',
			name: 'profile',
		},
	]

	return (
		<div className='w-full flex z-40 justify-between md:hidden p-6 fixed bottom-0 bg-white shadow shadow-black'>
			{navItems.map(item => (
				<NavLink key={item.link} to={item.link}>
					{item.name === 'cart' ? (
						<div className='relative'>
							<div className='absolute top-0 right-0 flex -translate-y-1 bg-[#FF2A3E] size-4 text-white rounded-full text-[10px]'>
								<p className='m-auto text-[]'>
									{user
										? cartDetails?.cartProducts.data.reduce(
												(acc, cur) => (acc += Number(cur.quantity)),
												0
										  )
										: cart.reduce((acc, cur) => (acc += cur.quantity), 0)}
								</p>
							</div>
							<img
								src={pathname === item.link ? item.activeIcon : item.icon}
								className='cursor-pointer'
								key={item.name}
							/>
						</div>
					) : (
						<img
							src={pathname === item.link ? item.activeIcon : item.icon}
							className='cursor-pointer'
							key={item.name}
						/>
					)}
				</NavLink>
			))}
		</div>
	)
}

export default Footer
