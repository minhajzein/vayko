import React from 'react'

function PrivacyPolicy() {
	return (
		<div className='md:mx-[80px] mx-4 md:mb-10 mb-28 rounded-xl flex flex-col gap-5 border p-5 md:p-10'>
			<h1 className='md:text-4xl text-2xl font-bold text-center'>
				Privacy Policy
			</h1>
			<h2 className='capitalize md:text-2xl text-xl font-semibold'>
				introduction
			</h2>
			<p className='md:text-xl text-lg'>
				Welcome to Vayko. We are committed to protecting your privacy and
				ensuring that your personal information is handled in a safe and
				responsible manner. This Privacy Policy outlines how we collect, use,
				and protect your personal data when you visit our website and make
				purchases.
			</p>
			<ul className='list-inside flex flex-col gap-5'>
				<li className='flex flex-col gap-3'>
					<h1 className='text-xl font-bold'>Information We Collect</h1>
					<ul className='list-disc flex flex-col gap-3 list-outside text-lg px-7'>
						<li>
							<span className='capitalize font-bold'>
								Personal Information:{' '}
							</span>
							When you create an account, place an order, or contact us, we
							collect personal information such as your name, email address,
							phone number, and mailing address.
						</li>
						<li>
							<span className='capitalize font-bold'>
								Payment Information:{' '}
							</span>
							We collect payment information, such as your credit card details,
							through our secure payment gateway.
						</li>
						<li>
							<span className='capitalize font-bold'>
								Browsing Information:{' '}
							</span>
							We collect information about your browsing behavior on our
							website, including pages viewed, links clicked, and the time spent
							on our site.
						</li>
						<li>
							<span className='capitalize font-bold'>
								Technical Information:{' '}
							</span>
							We collect technical information, such as your IP address, browser
							type, and operating system, to enhance your user experience and
							improve our services.
						</li>
					</ul>
				</li>
				<li className='flex flex-col gap-3'>
					<h1 className='text-xl font-bold'>How We Use Your Information</h1>
					<ul className='list-disc flex flex-col gap-3 list-outside text-lg px-7'>
						<li>
							<span className='capitalize font-bold'>Order Processing: </span>
							To process and fulfill your orders, including sending you emails
							to confirm your order status and delivery updates.
						</li>
						<li>
							<span className='capitalize font-bold'>Customer Service: </span>
							To provide customer support and respond to your inquiries.
						</li>
						<li>
							<span className='capitalize font-bold'>Marketing: </span>
							To send you promotional messages about new products, special
							offers, or other information we think you may find interesting,
							using the email address you have provided. You can opt-out of
							these communications at any time.
						</li>
						<li>
							<span className='capitalize font-bold'>Improvement: </span>
							To improve our website, products, and services based on your
							feedback and interactions.
						</li>
						<li>
							<span className='capitalize font-bold'>Security: </span>
							To detect and prevent fraud and other security issues.
						</li>
					</ul>
				</li>
				<li className='flex flex-col gap-3'>
					<h1 className='text-xl font-bold'>Data Security</h1>
					<p className='text-xl'>
						We are committed to ensuring that your information is secure. To
						prevent unauthorized access or disclosure, we have put in place
						suitable physical, electronic, and managerial procedures to
						safeguard and secure the information we collect online. Our secure
						payment gateway protects your payment information during
						transactions.
					</p>
				</li>
				<li className='flex flex-col gap-3'>
					<h1 className='text-xl font-bold'>Cookies</h1>
					<p className='text-xl'>
						A cookie is a small file that asks permission to be placed on your
						computer's hard drive. Once you agree, the file is added, and the
						cookie helps analyze web traffic or lets you know when you visit a
						particular site. We use cookies to identify which pages are being
						used. This helps us analyze data about web page traffic and improve
						our website to tailor it to customer needs. You can choose to accept
						or decline cookies. Most web browsers automatically accept cookies,
						but you can usually modify your browser settings to decline cookies
						if you prefer.
					</p>
				</li>
				<li className='flex flex-col gap-3'>
					<h1 className='text-xl font-bold'>Third-Party Services</h1>
					<p className='text-xl'>
						Third-Party Services We may employ third-party companies and
						individuals to facilitate our services (e.g., payment processing,
						shipping). These third parties have access to your personal
						information only to perform these tasks on our behalf and are
						obligated not to disclose or use it for any other purpose. We ensure
						that these third-party service providers comply with strict data
						protection standards.
					</p>
				</li>
			</ul>
		</div>
	)
}

export default PrivacyPolicy
