import { useSelector } from 'react-redux'
import { selectCategoryById } from '../../redux/apiSlices/categoriesApiSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { CiLock } from 'react-icons/ci'

//imports................................................................................................................................

function CategoryCard({ id }) {
	const category = useSelector(state => selectCategoryById(state, id))
	const navigate = useNavigate()
	const handleClick = () => {
		if (category.status === 'active') {
			navigate('/products')
		} else {
			toast.info(`Stay tuned! ${category.title} is unlocking soon`)
		}
	}

	return (
		<div
			onClick={handleClick}
			className='flex flex-col gap-3 group items-center cursor-pointer w-[69px] md:w-[150px]'
		>
			<div className='rounded-full relative   shadow-inner shadow-gray-400 duration-300  size-[55px] md:size-[130px]'>
				<img
					className='rounded-full size-full object-cover'
					src={category.photo}
					alt='category'
				/>
				{category.status === 'inactive' && (
					<CiLock className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl border bg-gray-200/50 text-black rounded-full p-1' />
				)}
			</div>
			<h1 className='text-black duration-300 md:font-semibold text-[10px] md:text-lg max-w-full md:truncate capitalize'>
				{category.title.split(' ')[1]}
			</h1>
		</div>
	)
}

export default CategoryCard
