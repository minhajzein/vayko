import { useFormik } from 'formik'
import * as Yup from 'yup'

//imports................................................................................................

function AddressForm() {
	const formik = useFormik({
		initialValues: {
			name: '',
			contact: '',
			city: '',
			pin_code: '',
			address: '',
			district: '',
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
			} catch (error) {
				console.error(error)
			}
		},
	})
	return (
		<form onSubmit={formik.handleSubmit} className='flex w-full flex-col gap-2'>
			<h1 className='text-center italic text-[#FF2A3E]'>
				Please provide a shipping address
			</h1>
			<div className='flex flex-col'>
				<label htmlFor='name'>Fullname</label>
				<input
					type='text'
					value={formik.values.name}
					name='name'
					onChange={formik.handleChange}
					className='p-2 border rounded'
					placeholder='Enter your name'
				/>
				<p className='text-red-600 text-xs'>{formik.errors.name}</p>
			</div>
			<div className='flex flex-col'>
				<label htmlFor='address'>Address</label>
				<input
					type='text'
					name='address'
					value={formik.values.address}
					onChange={formik.handleChange}
					className='p-2 border rounded'
					placeholder='Enter your address'
				/>
				<p className='text-red-600 text-xs'>{formik.errors.address}</p>
			</div>
			<div className='flex flex-col'>
				<label htmlFor='city'>City/Town</label>
				<input
					type='text'
					name='city'
					value={formik.values.city}
					onChange={formik.handleChange}
					className='p-2 border rounded'
					placeholder='Enter your name'
				/>
				<p className='text-red-600 text-xs'>{formik.errors.city}</p>
			</div>
			<div className='flex flex-col'>
				<label htmlFor='pincode'>Pincode</label>
				<input
					type='text'
					name='pin_code'
					value={formik.values.pin_code}
					onChange={formik.handleChange}
					className='p-2 border  rounded'
					placeholder='Enter your name'
				/>
				<p className='text-red-600 text-xs'>{formik.errors.pin_code}</p>
			</div>
			<div className='flex flex-col'>
				<label htmlFor='district'>District</label>
				<input
					type='text'
					name='district'
					value={formik.values.district}
					onChange={formik.handleChange}
					className='p-2 border  rounded'
					placeholder='Enter your district name'
				/>
				<p className='text-red-600 text-xs'>{formik.errors.district}</p>
			</div>
			<div className='flex flex-col'>
				<label htmlFor='phone number'>Phone Number</label>
				<input
					type='text'
					name='contact'
					value={formik.values.contact}
					onChange={formik.handleChange}
					className='p-2 border rounded'
					placeholder='Enter your number'
				/>
				<p className='text-red-600 text-xs'>{formik.errors.contact}</p>
			</div>
		</form>
	)
}

export default AddressForm
