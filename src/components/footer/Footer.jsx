import { useSelector } from 'react-redux'
import { NavLink, useLocation } from 'react-router-dom'

//imports................................................................

function Footer() {
	const { pathname } = useLocation()
	const user = useSelector(state => state.auth.user)

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
					<img
						src={pathname === item.link ? item.activeIcon : item.icon}
						className='cursor-pointer'
						key={item.name}
					/>
				</NavLink>
			))}
		</div>
	)
}

export default Footer
