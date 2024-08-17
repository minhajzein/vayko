import { useFormik } from 'formik'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { useSignupMutation } from '../../redux/apiSlices/authApiSlice'
import { toast } from 'react-toastify'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
import { CgSpinner } from 'react-icons/cg'
import { setCredentials } from '../../redux/slices/authSlice'
import { useAddToCartMutation } from '../../redux/apiSlices/cartApiSlice'
import { useNavigate } from 'react-router-dom'

//imports................................................................

function SignupForm() {
	const [isShow, setIsShow] = useState(false)
	const navigate = useNavigate()
	const [signup, { isLoading }] = useSignupMutation()
	const dispatch = useDispatch()
	const cart = useSelector(state => state.cart.cart)
	const [addToCart, { isLoading: adding }] = useAddToCartMutation()

	const formik = useFormik({
		initialValues: {
			username: '',
			email: '',
			mobile: '',
			password: '',
		},
		validationSchema: Yup.object({
			username: Yup.string().required(),
			email: Yup.string()
				.required()
				.matches(
					/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
					'please enter a valid email address'
				),
			mobile: Yup.string()
				.required()
				.matches(/^[6789]\d{9}$/, 'please enter a valid password number'),
			password: Yup.string()
				.min(8, 'password should be atleast 8 character')
				.matches(
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
					'password should contain an uppercase,a lowercase, a number and a special character'
				)
				.required('password is required'),
			confirm: Yup.string()
				.required('please confirm your password')
				.oneOf([Yup.ref('password')], 'password must be same'),
		}),

		onSubmit: async values => {
			try {
				const response = await signup({
					name: values.username,
					contact: values.mobile,
					password: values.password,
					email: values.email,
					is_verified: true,
				})
				console.log(response)

				if (response?.data?.success) {
					dispatch(
						setCredentials({
							token: response.data.token,
							user: response.data.user,
						})
					)
					localStorage.setItem(
						'vayko-token',
						JSON.stringify(response.data.token)
					)
					localStorage.setItem('vayko-user', JSON.stringify(response.data.user))
					cart.forEach(
						async x =>
							await addToCart({
								userId: response.data.user.id,
								credentials: {
									slug: x.slug,
									quantity: x.quantity,
									variant_id: x.variants.length === 0 ? null : x.variants[0].id,
								},
							})
					)
					navigate('/cart')
				} else {
					toast.error(response.error.data.err_msg)
				}
			} catch (error) {
				console.error(error)
			}
		},
	})
	return (
		<form
			onSubmit={formik.handleSubmit}
			className='md:w-[40%] w-full flex flex-col gap-4'
		>
			<h1 className='capitalize text-center italic text-[#FF2A3E]'>
				sign up and win a TVS Ntorq
			</h1>
			<div className='w-full flex flex-col'>
				<input
					type='text'
					name='username'
					value={formik.values.username}
					onChange={formik.handleChange}
					placeholder='Enter your name'
					className='bg-[#FAFAFA] shadow py-1 px-2 rounded outline-[#CCCCCC]'
				/>
				<p className='text-xs text-red-600'>{formik.errors.username}</p>
			</div>
			<div className='w-full flex flex-col'>
				<input
					type='text'
					name='email'
					value={formik.values.email}
					onChange={formik.handleChange}
					placeholder='Enter your email address'
					className='bg-[#FAFAFA] shadow py-1 px-2 rounded outline-[#CCCCCC]'
				/>
				<p className='text-xs text-red-600'>{formik.errors.email}</p>
			</div>
			<div className='w-full flex flex-col'>
				<div className='flex gap-2 relative justify-between items-center'>
					<input
						type='text'
						name='mobile'
						value={formik.values.mobile}
						onChange={formik.handleChange}
						placeholder='Enter your phone number'
						className='bg-[#FAFAFA] w-full shadow py-1 px-2 rounded outline-[#CCCCCC]'
					/>
				</div>
				<p className='text-xs text-red-600'>{formik.errors.mobile}</p>
			</div>
			<div className='w-full flex flex-col'>
				<div className='relative'>
					<input
						type={isShow ? 'text' : 'password'}
						name='password'
						value={formik.values.password}
						onChange={formik.handleChange}
						placeholder='Enter password'
						className='bg-[#FAFAFA] w-full shadow py-1 px-2 rounded outline-[#CCCCCC]'
					/>
					<button
						onClick={() => setIsShow(!isShow)}
						type='button'
						className='absolute top-1/2 right-2 -translate-y-1/2'
					>
						{isShow ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
					</button>
				</div>
				<p className='text-xs text-red-600'>{formik.errors.password}</p>
			</div>
			<div className='w-full flex flex-col'>
				<div className='flex gap-2 relative justify-between items-center'>
					<input
						type='password'
						name='confirm'
						value={formik.values.confirm}
						onChange={formik.handleChange}
						placeholder='Confirm your password'
						className='bg-[#FAFAFA] w-full shadow py-1 px-2 rounded outline-[#CCCCCC]'
					/>
				</div>
				<p className='text-xs text-red-600'>{formik.errors.confirm}</p>
			</div>
			<button
				type='submit'
				disabled={isLoading || adding}
				className='bg-[#FE2B3E] flex justify-evenly p-1 cursor-pointer hover:scale-105 duration-300 shadow rounded capitalize text-white'
			>
				{isLoading || adding ? (
					<CgSpinner className='animate-spin' />
				) : (
					'continue'
				)}
			</button>
		</form>
	)
}

export default SignupForm
