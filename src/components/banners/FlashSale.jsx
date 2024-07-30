import React from 'react'
import ArrowWhite from '/svgs/Arrow.svg'

//imports................................................................

function FlashSale() {
	return (
		<div className='w-full p-3 md:hidden'>
			<div className='w-full flex border-2 bg-[#EDC24F] bg-opacity-10 rounded-lg p-2 relative'>
				<img src='/images/flash.png' alt='' />
				<div>
					<h1 className='text-3xl italic font-bold text-[#CA981E]'>
						Flash Sales!
					</h1>
					<p className='capitalize text-[11px]'>
						Check out the latest offer products and win <br /> attractive
						prizes!
					</p>
				</div>
				<button className='bg-[#DCAB28] size-[30px] rounded-full flex justify-center items-center absolute right-3 bottom-3'>
					<img src={ArrowWhite} alt='flash' />
				</button>
			</div>
		</div>
	)
}

export default FlashSale
