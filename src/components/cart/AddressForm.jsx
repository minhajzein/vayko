import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
	useAddAnAddressMutation,
	useEditAddressMutation,
} from '../../redux/apiSlices/addressApiSlice'
import { useSelector } from 'react-redux'
import { CgSpinner } from 'react-icons/cg'
import { toast } from 'react-toastify'

//imports................................................................................................

function AddressForm({ isShow, setIsShow, address }) {
	const user = useSelector(state => state.auth.user)
	const [addAddress, { isLoading }] = useAddAnAddressMutation()
	const [editAddress, { isLoading: editing }] = useEditAddressMutation()
	const formik = useFormik({
		initialValues: {
			name: address?.name || '',
			contact: address?.contact || '',
			city: address?.city || '',
			pin_code: address?.pin_code || '',
			address: address?.address || '',
			district: address?.district || '',
		},
		enableReinitialize: true,
		validationSchema: Yup.object({
			name: Yup.string().required(),
			contact: Yup.string()
				.required()
				.matches(/^[6789]\d{9}$/, 'please enter a valid mobile number'),
			city: Yup.string().required(),
			pin_code: Yup.string()
				.required()
				.matches(/^[1-9][0-9]{5}$/, 'please enter a valid pin code'),
			address: Yup.string().required(),
			district: Yup.string().required(),
		}),
		onSubmit: async values => {
			try {
				if (address === undefined) {
					const response = await addAddress({
						userId: user?.id,
						credentials: values,
					})
					if (response?.data?.success) {
						formik.resetForm()
						toast.success('New address added successfully')
						setIsShow(false)
					} else {
						toast.error(response.error.data.err_msg)
					}
				} else {
					const response = await editAddress({
						id: address.id,
						credentials: values,
					})
					if (response?.data?.success) {
						formik.resetForm()
						toast.success('Address updated successfully')
						setIsShow(false)
					} else {
						toast.error(response.error.data.err_msg)
					}
				}
			} catch (error) {
				console.error(error)
			}
		},
	})

	return (
		<div className='h-dvh w-full fixed bg-white/70 left-0 top-0 z-50 focus flex md:flex-col md:justify-center md:items-center flex-col-reverse'>
			<div
				className={`w-full ${
					isShow ? 'translate-y-0' : 'translate-y-full'
				} flex flex-col bg-white duration-500 md:w-[40%] md:h-[70%] overflow-y-auto scrollbar-hidden md:rounded-xl md:p-5 md:shadow`}
			>
				<div className='bg-[#FE2B3E] md:bg-white w-full flex justify-between items-center p-4 rounded-tl-xl rounded-tr-xl'>
					<h1 className='text-3xl capitalize text-white md:text-black'>
						shipping address
					</h1>
					<button onClick={() => setIsShow(false)}>
						<img
							src='/svgs/tag-cross-black.svg'
							className='text-white'
							alt='close'
						/>
					</button>
				</div>
				<form
					onSubmit={formik.handleSubmit}
					className='flex flex-col p-4 gap-2'
				>
					<div className='flex flex-col'>
						<label htmlFor='name'>fullname</label>
						<input
							type='text'
							value={formik.values.name}
							name='name'
							onChange={formik.handleChange}
							className='p-2 shadow shadow-black rounded'
							placeholder='Enter your name'
						/>
						<p className='text-red-600 text-xs'>{formik.errors.name}</p>
					</div>
					<div className='flex flex-col'>
						<label htmlFor='address'>address</label>
						<input
							type='text'
							name='address'
							value={formik.values.address}
							onChange={formik.handleChange}
							className='p-2 shadow shadow-black rounded'
							placeholder='Enter your address'
						/>
						<p className='text-red-600 text-xs'>{formik.errors.address}</p>
					</div>
					<div className='flex flex-col'>
						<label htmlFor='city'>city/town</label>
						<input
							type='text'
							name='city'
							value={formik.values.city}
							onChange={formik.handleChange}
							className='p-2 shadow shadow-black rounded'
							placeholder='Enter your name'
						/>
						<p className='text-red-600 text-xs'>{formik.errors.city}</p>
					</div>
					<div className='flex flex-col'>
						<label htmlFor='pincode'>pincode</label>
						<input
							type='text'
							name='pin_code'
							value={formik.values.pin_code}
							onChange={formik.handleChange}
							className='p-2 shadow shadow-black rounded'
							placeholder='Enter your name'
						/>
						<p className='text-red-600 text-xs'>{formik.errors.pin_code}</p>
					</div>
					<div className='flex flex-col'>
						<label htmlFor='district'>district</label>
						<input
							type='text'
							name='district'
							value={formik.values.district}
							onChange={formik.handleChange}
							className='p-2 shadow shadow-black rounded'
							placeholder='Enter your district name'
						/>
						<p className='text-red-600 text-xs'>{formik.errors.district}</p>
					</div>
					<div className='flex flex-col'>
						<label htmlFor='phone number'>phone number</label>
						<input
							type='text'
							name='contact'
							value={formik.values.contact}
							onChange={formik.handleChange}
							className='p-2 shadow shadow-black rounded'
							placeholder='Enter your number'
						/>
						<p className='text-red-600 text-xs'>{formik.errors.contact}</p>
					</div>
					<button
						type='submit'
						disabled={isLoading || editing}
						className='bg-[#FE2B3E] flex justify-center items-center rounded-xl text-white text-lg py-2'
					>
						{isLoading || editing ? (
							<CgSpinner className='animate-spin' />
						) : (
							'save'
						)}
					</button>
				</form>
			</div>
		</div>
	)
}

export default AddressForm
