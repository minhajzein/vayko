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
import { MdVerified } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../redux/slices/authSlice'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'

//imports........................................................................................

function Signup() {
	const [generated, setGenerated] = useState(false)
	const [isShow, setIsShow] = useState(false)
	const [otp, setOtp] = useState('')
	const [verified, setVerified] = useState(false)
	const [getOtp, { isLoading: otpLoading }] = useGetOtpMutation()
	const [verify, { isLoading: verifying }] = useVerifyOtpMutation()
	const [signup, { isLoading }] = useSignupMutation()
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const generateOtp = async () => {
		try {
			const { data } = await getOtp({ contact: formik.values.mobile })
			if (data?.success) {
				toast.success('OTP sent successfully')
				setGenerated(true)
			} else {
				toast.error(
					'Otp generation failed, please check your number or try again later'
				)
			}
		} catch (error) {
			console.error(error)
			toast.error(error.message)
		}
	}

	const verifyOtp = async () => {
		try {
			if (otp === '' || otp.length < 6 || otp.length > 6)
				return toast.error('Invalid otp')
			const response = await verify({
				contact: formik.values.mobile,
				otp: otp,
			})
			if (response?.data?.success) {
				setVerified(true)
			} else {
				toast.error(response?.error.message)
			}
		} catch (error) {
			console.error(error)
			toast.error(error.message)
		}
	}

	const formik = useFormik({
		initialValues: {
			username: '',
			email: '',
			mobile: '',
			password: '',
			confirmPassword: '',
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
				.matches(/^[6789]\d{9}$/, 'please enter a valid mobile number'),
			password: Yup.string()
				.required()
				.matches(
					/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
					'password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character'
				),
			confirmPassword: Yup.string()
				.required('please confirm your password')
				.oneOf([Yup.ref('password')], 'entered password is not same'),
		}),

		onSubmit: async values => {
			try {
				if (!verified) toast.error('please verify your phone number')
				const response = await signup({
					name: values.username,
					contact: values.mobile,
					password: values.password,
					email: values.email,
					is_verified: verified,
				})
				if (response?.data?.success) {
					dispatch(
						setCredentials({
							token: response.data.token,
							user: response.data.user,
						})
					)
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
		<div className='w-full h-dvh flex-col md:flex-row flex'>
			<div className='bg-[#FE2B3E] md:w-[50%]  m-4 md:m-0 md:rounded-none rounded-xl h-[80%] overflow-hidden md:h-full flex md:p-28 p-10 items-end relative'>
				<div className='absolute -top-10 md:-top-36 left-0 w-full h-full'>
					<img
						src='/images/sign-up/lens-flare.png'
						className='absolute top-1/2 left-1/2 w-[350%] object-cover -translate-x-1/2 -translate-y-1/2'
						alt='lenz-flare'
					/>
					<img
						src='/images/vayko-logo-rounded-2.png'
						className='absolute w-[30%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
						alt='logo'
					/>
				</div>
				<h1 className='text-white z-10 capitalize text-center text-3xl font-bold md:text-7xl'>
					vayko will change your life
				</h1>
			</div>
			<div className='md:w-[50%] w-full h-full flex flex-col md:gap-5 gap-2 capitalize md:justify-center items-center'>
				<div className='flex flex-col gap-1'>
					<h1 className='text-3xl text-center text-[#FE2B3E]'>sign up</h1>
					<p className='text-center'>sign up and get exciting price</p>
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
								placeholder='Enter your mobile phone number'
								className='bg-[#FAFAFA] w-full shadow py-1 px-2 rounded outline-[#CCCCCC]'
							/>
							{!formik.errors.mobile &&
								!generated &&
								formik.values.mobile !== '' && (
									<button
										onClick={generateOtp}
										type='button'
										disabled={generated || otpLoading}
										className='w-full h-full flex justify-center items-center rounded bg-[#FE2B3E] text-white hover:bg-black'
									>
										{otpLoading ? (
											<CgSpinner className='animate-spin' />
										) : (
											'get otp'
										)}
									</button>
								)}
							{verified && (
								<MdVerified className='absolute right-2 top-1/2 -translate-y-1/2 text-green-600 text-xl' />
							)}
						</div>
						<p className='text-xs text-red-600'>{formik.errors.mobile}</p>
					</div>
					{generated && !verified && (
						<div className='w-full flex gap-2'>
							<input
								type='number'
								value={otp}
								onChange={e => setOtp(e.target.value)}
								placeholder='Enter OTP'
								className='bg-[#FAFAFA] w-full shadow py-1 px-2 rounded outline-[#CCCCCC]'
							/>
							<button
								onClick={verifyOtp}
								type='button'
								disabled={verifying}
								className='w-full flex justify-center items-center rounded bg-[#FE2B3E] text-white hover:bg-black'
							>
								{verifying ? (
									<CgSpinner className='animate-spin' />
								) : (
									'verify otp'
								)}
							</button>
						</div>
					)}
					<div className='w-full flex flex-col'>
						<div className='relative w-full'>
							<input
								type={isShow ? 'text' : 'password'}
								name='password'
								value={formik.values.password}
								onChange={formik.handleChange}
								placeholder='Enter password'
								className='bg-[#FAFAFA] w-full shadow py-1 px-2 rounded outline-[#CCCCCC]'
							/>
							{isShow ? (
								<BsFillEyeSlashFill
									onClick={() => setIsShow(false)}
									className='absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer'
								/>
							) : (
								<BsFillEyeFill
									onClick={() => setIsShow(true)}
									className='absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer'
								/>
							)}
						</div>
						<p className='text-xs text-red-600'>{formik.errors.password}</p>
					</div>
					<div className='w-full flex flex-col'>
						<input
							type='password'
							name='confirmPassword'
							value={formik.values.confirmPassword}
							onChange={formik.handleChange}
							placeholder='confirm your password'
							className='bg-[#FAFAFA] shadow py-1 px-2 rounded outline-[#CCCCCC]'
						/>
						<p className='text-xs text-red-600'>
							{formik.errors.confirmPassword}
						</p>
					</div>
					<button
						type='submit'
						disabled={isLoading}
						className='bg-[#FE2B3E] flex justify-evenly p-1 cursor-pointer hover:scale-105 duration-300 shadow rounded capitalize text-white'
					>
						{isLoading ? <CgSpinner className='animate-spin' /> : 'sign up'}
					</button>
				</form>
				<p className='text-[#FE2B3E]'>
					Existing user?{' '}
					<span
						onClick={() => navigate('/login')}
						className='underline cursor-pointer'
					>
						Login
					</span>
				</p>
				<p className='text-blue-500'>
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
