import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserRoutes from './routes/UserRoutes'
import { Provider } from 'react-redux'
import store from './redux/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import PersistLogin from './components/Persist/PersistLogin'

//imports.................................................................

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter future={{ v7_startTransition: true }}>
				<Routes>
					<Route element={<PersistLogin />}>
						<Route path='/*' element={<UserRoutes />} />
					</Route>
				</Routes>
			</BrowserRouter>
			<ToastContainer position='top-center' theme='colored' />
		</Provider>
	)
}

export default App
