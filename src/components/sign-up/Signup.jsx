import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { CgSpinner } from 'react-icons/cg'
import {
	useGetOtpMutation,
	useSignupMutation,
	useVerifyOtpMutation,
} from '../../redux/apiSlices/authApiSlice'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../redux/slices/authSlice'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'

//imports........................................................................................

function Signup() {
	const [isShow, setIsShow] = useState(false)
	const [signup, { isLoading }] = useSignupMutation()
	const navigate = useNavigate()
	const dispatch = useDispatch()

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
					navigate('/')
				} else {
					toast.error(response.error.data.err_msg)
				}
			} catch (error) {
				console.error(error)
			}
		},
	})

	return (
		<div className='w-full md:h-dvh flex-col md:flex-row flex'>
			<div className='bg-[#FE2B3E] md:w-[50%] items-center gap-14 m-4 md:m-0  md:rounded-none rounded-xl overflow-hidden md:h-full flex flex-col md:p-10 p-2 justify-center relative'>
				<img
					src='/images/vayko-logo-rounded-2.png'
					className='w-[30%]'
					alt='logo'
				/>
				<h1 className='text-white font-skranji z-10 capitalize text-center text-sm font-bold md:text-2xl'>
					"vayko will change your life"
				</h1>
			</div>
			<div className='md:w-[50%] w-full md:h-full py-5 flex flex-col md:gap-5 gap-2 capitalize md:justify-center items-center'>
				<div className='flex flex-col gap-1'>
					<h1 className='md:text-xl text-center text-[#FE2B3E]'>sign up</h1>
					<p className='text-center text-sm'>sign up and get exciting price</p>
				</div>
				<form
					onSubmit={formik.handleSubmit}
					className='md:w-[40%] w-[90%] flex flex-col gap-4'
				>
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
						disabled={isLoading}
						className='bg-[#FE2B3E] flex justify-evenly p-1 cursor-pointer hover:scale-105 duration-300 shadow rounded capitalize text-white'
					>
						{isLoading ? <CgSpinner className='animate-spin' /> : 'sign up'}
					</button>
				</form>
				<p className='text-[#FE2B3E] text-xs md:text-sm'>
					Existing user?{' '}
					<span
						onClick={() => navigate('/login')}
						className='underline cursor-pointer'
					>
						Login
					</span>
				</p>
				<p className='text-blue-500 text-xs md:text-sm'>
					Back to{' '}
					<span
						onClick={() => navigate('/')}
						className='underline cursor-pointer'
					>
						home
					</span>
				</p>
			</div>
		</div>
	)
}

export default Signup
