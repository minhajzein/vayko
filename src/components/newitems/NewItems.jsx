import React from 'react'
import RightArrowRed from '/svgs/arrow-right-red.svg'
import NewItemShowcase from './NewItemShowcase'
import { Link } from 'react-router-dom'

//imports.................................................................................................

function NewItems() {
	return (
		<div className='bg-[#FAFAFA] md:hidden'>
			<div className='flex justify-between w-full p-3'>
				<h1 className='capitalize  font-semibold'>new items</h1>
				<Link to='/products' className='flex gap-2 items-center'>
					<h1 className='capitalize text-[#FE2B3E]'>see all</h1>
					<img src={RightArrowRed} alt='arrow-right' />
				</Link>
			</div>
			<NewItemShowcase />
		</div>
	)
}

export default NewItems
