import React from 'react'

function Faq() {
	return (
		<div className='md:p-10 md:mx-[80px] p-5 mx-4 border rounded-xl mb-24'>
			<h1 className='md:pb-5 pb-3 font-bold md:text-4xl text-2xl text-center'>
				FAQ
			</h1>
			<ul className='flex flex-col gap-3 list-disc rounded-xl p-5 md:10 md:py-8'>
				<li className='font-bold md:text-2xl text-xl'>What is Vayko?</li>
				<p className='text-xl '>
					Vayko is the official e-commerce platform of Mallu Traveller, offering
					a curated range of products inspired by the adventurous spirit of
					Shakir Subhan. Our products are designed to reflect the love for
					travel, exploration, and unique experiences.
				</p>
				<li className='font-bold md:text-2xl text-xl'>Where do you ship to?</li>
				<p className='text-xl'>
					We currently ship only within India. Shipping costs and delivery times
					vary based on your location and the shipping method selected.
				</p>
				<li className='font-bold md:text-2xl text-xl'>
					How long does it take to receive my order?
				</li>
				<p className='text-xl'>
					Delivery is expected within 15 to 30 working days from the date of
					order confirmation. Please note that delivery times may vary depending
					on your location and any unforeseen delays.
				</p>
				<li className='font-bold md:text-2xl text-xl'>
					How can I track my order?
				</li>
				<p className='text-xl'>
					Once your order is dispatched, you will receive a tracking number via
					SMS and WhatsApp. You can use this number to track your order on the
					respective courier service's website.
				</p>
				<li className='font-bold md:text-2xl text-xl'>
					What payment methods do you accept?
				</li>
				<p className='text-xl'>
					We accept various payment methods, including:{' '}
					<ul className='list-disc list-inside'>
						<li>Credit/Debit Cards</li>
						<li>Net Banking</li>
						<li>UPI</li>
						<li>Wallets (e.g., Paytm, PhonePe)</li>
					</ul>
					- Please note that Cash on Delivery (COD) is not available.
				</p>
				<li className='font-bold md:text-2xl text-xl'>
					Can I cancel or modify my order after placing it?
				</li>
				<p className='text-xl'>
					Order cancellations or modifications are not possible once the order
					is placed. Please review your order carefully before finalizing the
					purchase.
				</p>
				<li className='font-bold md:text-2xl text-xl'>
					What is your return and replacement policy?
				</li>
				<p className='text-xl'>
					Please note that we do not offer returns or replacements. All sales
					are final. Ensure you review your order and product details carefully
					before making a purchase.
				</p>
				<li className='font-bold md:text-2xl text-xl'>
					How do I file a product complaint?
				</li>
				<p className='text-xl'>
					If you have any complaints regarding a product, please email us at
					<span className='cursor-pointer text-blue-600'>
						{' '}
						complaints@vayko.in
					</span>{' '}
					. Our team will review and address your concerns promptly.
				</p>
				<li className='font-bold md:text-2xl text-xl'>
					How can I contact customer support?
				</li>
				<p className='text-xl'>
					You can reach our customer support team through the following
					channels:{' '}
					<ul className='list-disc list-inside'>
						<li>
							Email:{' '}
							<span className='cursor-pointer text-blue-600'>
								info@vayko.in
							</span>
						</li>
						<li className='cursor-pointer '>
							Phone : <span className='text-blue-600'>+91 9395200700</span>
						</li>
					</ul>
				</p>
				<li className='font-bold md:text-2xl text-xl'>
					Do you offer international shipping?
				</li>
				<p className='text-xl'>
					Currently, we only offer shipping within India. We do not provide
					international shipping at this time.
				</p>
				<li className='font-bold md:text-2xl text-xl'>
					How do I know if a product is in stock?
				</li>
				<p className='text-xl'>
					Product availability is indicated on the product page. If an item is
					out of stock, it will be displayed as unavailable. We are constantly
					updating our inventory, so please check back later.
				</p>
				<li className='font-bold md:text-2xl text-xl'>
					What if my order is delayed?
				</li>
				<p className='text-xl'>
					While we aim to deliver your order within the estimated time frame,
					delays may occur due to unforeseen circumstances or issues with the
					shipping carrier. We are not liable for any delays caused by shipping
					carriers. You can track your order using the tracking number provided.{' '}
				</p>
				<li className='font-bold md:text-2xl text-xl'>
					Does Vayko provide any lucky draws or special promotions?
				</li>
				<p className='text-xl'>
					Yes, Vayko conducts a lucky draw for a limited time period where
					customers have a chance to win exciting prizes. All customers who make
					a purchase during this period are automatically entered into the draw.
					The biggest gift awaits the lucky draw winners! Additionally, raffle
					coupons are given to customers as part of our promotional activities.
					Stay tuned to our website and social media channels for more
					information on upcoming draws, promotions, and how to use your raffle
					coupons.
				</p>
				<li className='font-bold md:text-2xl text-xl'>
					How can I provide feedback or suggestions?
				</li>
				<p className='text-xl'>
					We value your feedback! You can send your suggestions or feedback to{' '}
					<span className='text-blue-500'>info@vayko.in</span> or contact us via
					our contact form on the website.
				</p>
			</ul>
		</div>
	)
}

export default Faq
