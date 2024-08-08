import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
	useLoginMutation,
	useVerifyLoginMutation,
} from '../../redux/apiSlices/authApiSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
import { useState } from 'react'
import { CgSpinner } from 'react-icons/cg'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../../redux/slices/authSlice'
import { data } from 'autoprefixer'

//imports................................................................................................

function Login() {
	const [generated, setGenerated] = useState(false)
	const [login, { isLoading }] = useLoginMutation()
	const [verfyLogin, { isLoading: verifying }] = useVerifyLoginMutation()
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const formik = useFormik({
		initialValues: {
			mobile: '',
			otp: '',
		},
		validationSchema: Yup.object({
			mobile: Yup.string()
				.required()
				.matches(/^[6789]\d{9}$/, 'please enter a valid mobile number'),
			otp: Yup.string().min(6).max(6).required(),
		}),
		onSubmit: async values => {
			try {
				const response = await verfyLogin({
					contact: values.mobile,
					otp: values.otp,
				})
				console.log(response)

				if (response.data) {
					dispatch(
						setCredentials({
							user: response.data.user,
							token: response.data.token,
						})
					)
					localStorage.setItem(
						'vayko-token',
						JSON.stringify(response.data.token)
					)
					localStorage.setItem('vayko-user', JSON.stringify(response.data.user))
					navigate('/')
				} else {
					toast.error(response?.error?.data.err_msg)
				}
			} catch (error) {
				error ?? toast.error('please check your connectivity')
			}
		},
	})
	const generateOtp = async () => {
		if (formik.errors.mobile) return toast.error('Enter a valid mobile number')
		const response = await login({
			contact: formik.values.mobile,
		})
		if (response?.data?.success) {
			toast.success('An OTP has been sent to your mobile number')
			setGenerated(true)
		} else {
			toast.error(response.error.data.err_msg)
		}
	}
	return (
		<div className='w-full flex flex-col md:flex-row h-dvh'>
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
			<div className='md:w-[50%] w-full h-[50%] md:h-full justify-evenly flex flex-col capitalize md:gap-5 gap-2 md:justify-center items-center'>
				<div className='flex flex-col gap-1'>
					<h1 className='md:text-3xl text-lg text-center text-[#FE2B3E]'>
						login
					</h1>
					<p className='text-center text-xs md:text-sm'>
						login and get exciting prices
					</p>
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
					{generated ? (
						<>
							<div className='w-full flex flex-col'>
								<input
									type='text'
									name='otp'
									value={formik.values.otp}
									onChange={formik.handleChange}
									placeholder='Enter otp'
									className='bg-[#FAFAFA] w-full shadow py-1 px-2 rounded outline-[#CCCCCC]'
								/>
								<p className='text-xs text-red-600'>{formik.errors.otp}</p>
							</div>
							<button
								type='submit'
								disabled={verifying}
								className='bg-[#FE2B3E] flex justify-evenly p-1 cursor-pointer hover:scale-105 duration-300 shadow rounded capitalize text-white'
							>
								{verifying ? <CgSpinner className='animate-spin' /> : 'login'}
							</button>
						</>
					) : (
						<button
							type='button'
							onClick={generateOtp}
							className='bg-[#FE2B3E] flex justify-evenly p-1 cursor-pointer hover:scale-105 duration-300 shadow rounded capitalize text-white'
						>
							{isLoading ? <CgSpinner className='animate-spin' /> : 'get OTP'}
						</button>
					)}
				</form>
				<p className='text-[#FE2B3E] text-xs md:text-sm'>
					Don't have an account?{' '}
					<span
						onClick={() => navigate('/sign-up')}
						className='underline cursor-pointer'
					>
						Sign Up
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

export default Login
