import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/user/LandingPage'
import ProductsPage from '../pages/user/ProductsPage'
import WishlistPage from '../pages/user/WishlistPage'
import SingleProductPage from '../pages/user/SingleProductPage'
import CartPage from '../pages/user/CartPage'
import SignupPage from '../pages/user/SignupPage'
import LoginPage from '../pages/user/LoginPage'
import OrderPage from '../pages/user/OrderPage'
import ProfilePage from '../pages/user/ProfilePage'
import AboutUsPage from '../pages/user/AboutUsPage'
import ContactUsPage from '../pages/user/ContactUsPage'
import FaqPage from '../pages/user/FaqPage'
import PrivacyPolicyPage from '../pages/user/PricacyPolicyPage'
import TermsAndConditionsPage from '../pages/user/TermsAndConditionsPage'
import RequireAuth from '../components/private/RequireAuth'
import RefundPolicyPage from '../pages/user/RefundPolicyPage'
import PublicRoute from '../components/public-route/PublicRoute'
import CheckoutPage from '../pages/user/CheckoutPage'

//imports.................................................................

function UserRoutes() {
	return (
		<Routes>
			<Route path='/' element={<LandingPage />} />
			<Route path='products' element={<ProductsPage />} />
			<Route path='product/:slug' element={<SingleProductPage />} />
			<Route path='about-us' element={<AboutUsPage />} />
			<Route path='contact-us' element={<ContactUsPage />} />
			<Route path='faq' element={<FaqPage />} />
			<Route path='privacy-policy' element={<PrivacyPolicyPage />} />
			<Route path='terms-and-conditions' element={<TermsAndConditionsPage />} />
			<Route path='refund-policy' element={<RefundPolicyPage />} />
			<Route path='cart' element={<CartPage />} />
			<Route path='checkout' element={<CheckoutPage />} />
			<Route element={<PublicRoute />}>
				<Route path='login' element={<LoginPage />} />
				<Route path='sign-up' element={<SignupPage />} />
			</Route>
			<Route element={<RequireAuth />}>
				<Route path='wishlist' element={<WishlistPage />} />
				<Route path='orders' element={<OrderPage />} />
				<Route path='profile' element={<ProfilePage />} />
			</Route>
		</Routes>
	)
}

export default UserRoutes
