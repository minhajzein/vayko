import React from 'react'

//imports........................................................................................

function Pagination({ isSuccess, links, lastPage, setPage, page }) {
	return (
		isSuccess && (
			<div className='w-full border p-2 rounded-md flex gap-2 justify-center items-end'>
				<button
					onClick={() => setPage(Number(links[1].label) - 1)}
					className='size-8'
					disabled={links[0].url ? false : true}
				>
					<img src='/svgs/arrow-square-left.svg' alt='' />
				</button>
				{lastPage === Number(links[page].label) &&
					Number(links[1].label) !== 1 && (
						<div className='flex items-end gap-2'>
							<div
								onClick={() => setPage(1)}
								className='size-8 border-2 border-black/70 cursor-pointer rounded-xl items-center justify-center flex'
							>
								{1}
							</div>
							...
						</div>
					)}
				<div className='size-8 border-2 border-black/70 rounded-xl items-center justify-center flex'>
					{links[1].label}
				</div>
				{lastPage !== Number(links[page].label) && (
					<div className='flex items-end gap-2'>
						...
						<div
							onClick={() => setPage(lastPage)}
							className='size-8 border-2 border-black/70 cursor-pointer rounded-xl items-center justify-center flex'
						>
							{lastPage}
						</div>
					</div>
				)}
				<button
					onClick={() => setPage(page + 1)}
					className='size-8'
					disabled={links[page + 1].url ? false : true}
				>
					<img src='/svgs/arrow-square-right.svg' alt='' />
				</button>
			</div>
		)
	)
}

export default Pagination
