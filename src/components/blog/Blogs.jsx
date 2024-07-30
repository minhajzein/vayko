import BlogCard from './BlogCard'
const blogs = [
	{
		id: 1,
		image: '/images/blogs/blog-1.png',
		title: 'Shoes: From Necessity to Fashion Statement',
		description:
			'Lorem ipsum dolor sit amet consectetur. Euismod fermentum nisi congue commodo et varius tempor arcu.',
	},
	{
		id: 2,
		image: '/images/blogs/blog-2.png',
		title: 'Story of Beauty, Tradition, and Personal Expression',
		description:
			'Lorem ipsum dolor sit amet consectetur. Euismod fermentum nisi congue commodo et varius tempor arcu.',
	},
	{
		id: 3,
		image: '/images/blogs/blog-3.png',
		title: 'From Garden Delight to Culinary Marvel',
		description:
			'Lorem ipsum dolor sit amet consectetur. Euismod fermentum nisi congue commodo et varius tempor arcu.',
	},
]

//imports................................................................................................

function Blogs() {
	return (
		<div className='hidden md:flex flex-col gap-16 p-16'>
			<div className='flex flex-col items-center gap-2'>
				<h6 className='capitalize font-semibold text-[#FF2A3E]'>blogs</h6>
				<h1 className='capitalize text-4xl font-semibold'>latest blog posts</h1>
			</div>
			<div className='flex justify-between'>
				{blogs.map(blog => (
					<BlogCard key={blog.id} blog={blog} />
				))}
			</div>
			<div className='w-full flex justify-center items-center gap-10'>
				<button>
					<img src='/svgs/arrow-square-left.svg' alt='button-left' />
				</button>
				<button>
					<img src='/svgs/arrow-square-right.svg' alt='button-right' />
				</button>
			</div>
		</div>
	)
}

export default Blogs
