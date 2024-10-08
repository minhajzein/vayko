import { useFormik } from 'formik'
import { AiOutlineCopyright } from 'react-icons/ai'
import { FaYoutube } from 'react-icons/fa'
import {
	FaSquareInstagram,
	FaSquareThreads,
	FaSquareXTwitter,
} from 'react-icons/fa6'
import { ImFacebook2 } from 'react-icons/im'
import { sendForm } from 'emailjs-com'
import { toast } from 'react-toastify'
import * as Yup from 'yup'
import { useRef, useState } from 'react'
import { CgSpinner } from 'react-icons/cg'

//imports................................................................................................

function ContactUs() {
	const formRef = useRef()
	const [loading, setLoading] = useState(false)
	const formik = useFormik({
		initialValues: { username: '', email: '', message: '' },
		validationSchema: Yup.object({
			username: Yup.string().required().min(4),
			email: Yup.string().email().required(),
			message: Yup.string().required().min(100),
		}),
		onSubmit: async () => {
			setLoading(true)
			try {
				const response = await sendForm(
					'service_daa5m5r',
					'template_qy3m768',
					formRef.current,
					'mOqE8Tm4SqLYwFaiY'
				)
				if (response.status === 200) {
					formik.resetForm()
					toast.success(
						'Thank you for contacting us, we will get back to you soon'
					)
					setLoading(false)
				}
			} catch (error) {
				console.log(error)
				setLoading(false)
			}
		},
	})

	return (
		<div className='md:mx-[80px] mx-4 grid md:grid-cols-2 md:mb-10 md:px-[80px] mb-28 rounded-xl border p-5 md:p-10'>
			<div className='flex flex-col gap-10'>
				<h1 className='capitalize text-3xl font-semibold'>location</h1>
				<p className='text-lg text-black/50 capitalize'>
					kannur, kerala, 670703
				</p>
				<div className='flex flex-col gap-4'>
					<h1 className='text-2xl font-bold capitalize'>follow us</h1>
					<div className='flex gap-3 text-xl'>
						<a
							href='https://www.youtube.com/@vaykoin'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaYoutube />
						</a>
						<a
							href='https://www.instagram.com/vayko.in/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaSquareInstagram />
						</a>
						<a
							href='https://www.facebook.com/vaykoin/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<ImFacebook2 />
						</a>
						<a
							href='https://x.com/Vaykoin'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaSquareXTwitter />
						</a>
						<a
							href='https://www.threads.net/@vayko.in'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaSquareThreads />
						</a>
					</div>
					<p className='flex text-xs items-center'>
						<AiOutlineCopyright />
						2024 Privacy Policy
					</p>
				</div>
			</div>
			<div className='flex flex-col gap-3'>
				<h1 className='capitalize text-3xl font-semibold'>contact us</h1>
				<form
					ref={formRef}
					onSubmit={formik.handleSubmit}
					className='flex flex-col gap-3'
				>
					<div className='flex flex-col'>
						<input
							type='text'
							id='username'
							name='username'
							value={formik.values.username}
							onChange={formik.handleChange}
							className='bg-slate-100 p-2 w-full outline-none'
							placeholder='Enter your name'
						/>
						<p className='text-red-600 text-xs capitalize'>
							{formik.errors.username}
						</p>
					</div>
					<div>
						<input
							type='text'
							id='email'
							name='email'
							value={formik.values.email}
							onChange={formik.handleChange}
							className='bg-slate-100 p-2 w-full'
							placeholder='Enter a valid email address'
						/>
						<p className='text-red-600 text-xs capitalize'>
							{formik.errors.email}
						</p>
					</div>
					<div>
						<textarea
							type='text'
							id='message'
							name='message'
							value={formik.values.message}
							onChange={formik.handleChange}
							className='bg-slate-100 p-2 w-full'
							placeholder='Enter your message'
						/>
						<p className='text-red-600 text-xs capitalize'>
							{formik.errors.message}
						</p>
					</div>

					<button
						type='submit'
						className='border border-[#FE2B3E] text-[#FE2B3E] py-2 md:w-[20%] justify-center px-6 flex'
					>
						{loading ? <CgSpinner className='animate-spin m-auto' /> : 'Submit'}
					</button>
				</form>
			</div>
		</div>
	)
}

export default ContactUs
