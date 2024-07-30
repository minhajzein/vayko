import React from 'react'

//imports................................................................................................

function TermsAndConditions() {
	return (
		<div className='md:mx-[80px] mx-4 md:mb-10 mb-28 rounded-xl flex flex-col gap-5 border p-4 md:p-10'>
			<h1 className='md:text-4xl text-2xl font-bold text-center'>
				Terms and Conditions
			</h1>
			<h2 className='capitalize md:text-2xl text-xl font-semibold'>
				introduction
			</h2>
			<p className='md:text-xl text-lg'>
				Welcome to Vayko. These Terms and Conditions govern your use of our
				website and the purchase of products from us. By accessing our website
				or placing an order, you agree to these Terms and Conditions. If you do
				not agree with any part of these terms, please do not use our website.
			</p>
			<ul className='list-inside flex flex-col gap-5'>
				<li className='flex flex-col gap-5'>
					<h1 className='text-xl font-bold'>Products and Services</h1>
					<ul className='list-disc list-outside text-lg px-7'>
						<li>
							<span className='capitalize font-bold'>
								Product Descriptions:
							</span>
							We strive to ensure that our product descriptions, images, and
							other information are accurate. However, we do not warrant that
							the descriptions are complete, reliable, or error-free. Products
							may vary slightly from their images or descriptions.
						</li>
						<li>
							<span className='capitalize font-bold'>Availability:</span> All
							products are subject to availability. We reserve the right to
							discontinue any product or service without prior notice.
						</li>
					</ul>
				</li>
				<li className='flex flex-col gap-5'>
					<h1 className='text-xl font-bold'>Orders and Payments</h1>
					<ul className='list-disc list-outside text-lg px-7'>
						<li>
							<span className='capitalize font-bold'>Order Processing:</span>
							By placing an order, you agree to purchase the products in
							accordance with these Terms and Conditions. Once an order is
							placed, you will receive a WhatsApp message and SMS confirmation.
							We reserve the right to refuse or cancel an order for any reason,
							including product availability or errors in pricing.
						</li>
						<li>
							<span className='capitalize font-bold'>Payment: </span>Payments
							are processed through our secure payment gateway. You are
							responsible for providing accurate payment information. We accept
							various payment methods as indicated on our website.
						</li>
					</ul>
				</li>
				<li className='flex flex-col gap-5'>
					<h1 className='text-xl font-bold'>Shipping and Delivery</h1>
					<ul className='list-disc list-outside text-lg px-7'>
						<li>
							<span className='capitalize font-bold'>Shipping: </span>
							Shipping is available only within India. Shipping costs and
							delivery times vary based on your location and the shipping method
							selected. For most locations, delivery is expected within 15 to 30
							working days from the date of order confirmation.
						</li>
						<li>
							<span className='capitalize font-bold'>Delivery: </span>We aim to
							deliver your order within the estimated time frame. However,
							delays may occur due to unforeseen circumstances or issues with
							the shipping carrier. We are not liable for any delays caused by
							shipping carriers.
						</li>
					</ul>
				</li>
				<li className='flex flex-col gap-5'>
					<h1 className='text-xl font-bold'>Returns and Replacements</h1>
					<ul className='list-disc list-outside text-lg px-7'>
						<li>
							<span className='capitalize font-bold'>Policy: </span>
							Please note that we do not offer returns or replacements. All
							sales are final. Ensure you review your order and product details
							carefully before making a purchase.
						</li>
						<li>
							If you have any complaints regarding a product, please contact us
							via email at <span className='font-bold'>complaint@vayko.in</span>
							. We will review and address your concerns promptly.
						</li>
					</ul>
				</li>
				<li className='flex flex-col gap-5'>
					<h1 className='text-xl font-bold'>Returns and Replacements</h1>
					<ul className='list-disc list-outside text-lg px-7'>
						<li>
							<span className='capitalize font-bold'>Policy: </span>
							Please note that we do not offer returns or replacements. All
							sales are final. Ensure you review your order and product details
							carefully before making a purchase.
						</li>
						<li>
							If you have any complaints regarding a product, please contact us
							via email at <span className='font-bold'>complaint@vayko.in</span>
							. We will review and address your concerns promptly.
						</li>
					</ul>
				</li>
				<li className='flex flex-col gap-5'>
					<h1 className='text-xl font-bold'>Intellectual Property</h1>
					<ul className='list-disc list-outside text-lg px-7'>
						<li>
							<span className='capitalize font-bold'>Ownership: </span>
							All content on our website, including text, images, logos, and
							trademarks, is the property of Vayko or its licensors and is
							protected by intellectual property laws. You may not use or
							reproduce any content without our prior written permission.
						</li>
					</ul>
				</li>
				<li className='flex flex-col gap-5'>
					<h1 className='text-xl font-bold'>Limitation of Liability</h1>
					<ul className='list-disc list-outside text-lg px-7'>
						<li>
							<span className='capitalize font-bold'>Disclaimer: </span>
							Our website and products are provided on an "as-is" basis. We make
							no warranties or representations regarding the accuracy,
							reliability, or completeness of the information on our website.
						</li>
						<li>
							<span className='capitalize font-bold'>Liability: </span>To the
							fullest extent permitted by law, Vayko shall not be liable for any
							indirect, incidental, special, or consequential damages arising
							from or in connection with your use of our website or the purchase
							of products.
						</li>
					</ul>
				</li>
				<li className='flex flex-col gap-5'>
					<h1 className='text-xl font-bold'>Changes to Terms and Conditions</h1>
					<p className='text-lg'>
						We reserve the right to modify these Terms and Conditions at any
						time. Any changes will be posted on this page, and your continued
						use of our website constitutes acceptance of the revised terms.
					</p>
				</li>
				<li className='flex flex-col gap-5'>
					<h1 className='text-xl font-bold'>Contact Us</h1>
					<p className='text-lg'>
						If you have any questions or concerns about these Terms and
						Conditions, please contact us at:
					</p>
					<ul className='py-3'>
						<li>Email: info@vayko.in</li>
						<li>Phone: +91 9395200700</li>
						<li>Mailing Address: Kannur, Kerala, 670703</li>
					</ul>
				</li>
			</ul>
		</div>
	)
}

export default TermsAndConditions
