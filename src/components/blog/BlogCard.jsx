import React from 'react'

//imports................................................................................................

function BlogCard({ blog }) {
	return (
		<div className='flex flex-col w-[30%] gap-3'>
			<img src={blog.image} className='rounded-lg' alt='blog-1' />
			<h1 className='text-3xl'>{blog.title}</h1>
			<p className='opacity-60'>
				Lorem ipsum dolor sit amet consectetur. Euismod fermentum nisi congue
				commodo et varius tempor arcu.
			</p>
			<button className='text-[#FF2A3E] flex items-center gap-2 underline'>
				Read More <img src='/svgs/arrow-right-red.svg' alt='' />
			</button>
		</div>
	)
}

export default BlogCard
