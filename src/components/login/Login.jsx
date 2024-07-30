import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useLoginMutation } from '../../redux/apiSlices/authApiSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
import { useState } from 'react'
import { CgSpinner } from 'react-icons/cg'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../redux/slices/authSlice'

//imports................................................................................................

function Login() {
	const [isShow, setIsShow] = useState(false)
	const [login, { isLoading }] = useLoginMutation()
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const formik = useFormik({
		initialValues: {
			mobile: '',
			password: '',
		},
		validationSchema: Yup.object({
			mobile: Yup.string()
				.required()
				.matches(/^[6789]\d{9}$/, 'please enter a valid mobile number'),
			password: Yup.string().required(),
		}),
		onSubmit: async values => {
			try {
				const response = await login({
					contact: values.mobile,
					password: values.password,
				})
				if (response.data) {
					dispatch(
						setCredentials({
							user: response.data.user,
							token: response.data.token,
						})
					)
					navigate('/')
				} else {
					toast.error(response?.error?.data.err_msg)
				}
			} catch (error) {
				error ?? toast.error('please check your connectivity')
			}
		},
	})

	return (
		<div className='w-full flex flex-col md:flex-row h-dvh'>
			<div className='bg-[#FE2B3E] md:w-[50%] h-[65%] overflow-hidden m-4 md:m-0 md:rounded-none rounded-xl md:py-40 p-10 flex-col md:h-full flex justify-end items-center relative'>
				<div className='absolute md:-top-36 left-0 w-full h-full'>
					<img
						src='/images/sign-up/lens-flare.png'
						className='absolute top-1/2 left-1/2 w-[350%]  object-cover -translate-x-1/2 -translate-y-1/2'
						alt='lenz-flare'
					/>
					<img
						src='/images/vayko-logo-rounded-2.png'
						className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
						alt='logo'
					/>
				</div>
				<h1 className='text-white z-10 capitalize text-center font-rubic text-3xl font-bold md:text-5xl'>
					"vayko will change <br />
					your life"
				</h1>
			</div>
			<div className='md:w-[50%] w-full h-[35%] md:h-full flex flex-col capitalize md:gap-5 gap-2 md:justify-center items-center'>
				<div className='flex flex-col gap-1'>
					<h1 className='text-3xl text-center text-[#FE2B3E]'>login</h1>
					<p className='text-center'>login and get exciting prices</p>
				</div>
				<form
					onSubmit={formik.handleSubmit}
					className='md:w-[40%] w-[90%] flex flex-col gap-4'
				>
					<div className='w-full flex flex-col'>
						<input
							type='text'
							name='mobile'
							value={formik.values.mobile}
							onChange={formik.handleChange}
							placeholder='Enter your mobile number'
							className='bg-[#FAFAFA] shadow py-1 px-2 rounded outline-[#CCCCCC]'
						/>
						<p className='text-xs text-red-600'>{formik.errors.mobile}</p>
					</div>
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
					<button
						type='submit'
						disabled={isLoading}
						className='bg-[#FE2B3E] flex justify-evenly p-1 cursor-pointer hover:scale-105 duration-300 shadow rounded capitalize text-white'
					>
						{isLoading ? <CgSpinner className='animate-spin' /> : 'login'}
					</button>
				</form>
				<p className='text-[#FE2B3E]'>
					Don't have an account?{' '}
					<span
						onClick={() => navigate('/sign-up')}
						className='underline cursor-pointer'
					>
						Sign Up
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

export default Login
