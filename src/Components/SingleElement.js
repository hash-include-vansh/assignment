import React from "react";
import ProfilePic from "../Assets/profile.svg";

function SingleElement({data}) {
	return (
		<div className=' h-20 flex bg-slate-50 p-3 items-center'>
			<img src={ProfilePic} className='h-4/5 w-auto rounded-full' alt='sdfs' />
			<div className='flex flex-col grow pl-3 justify-center'>
				<h1 className='text-lg font-semibold'>{data.name}</h1>
				<h1 className='text-sm text-neutral-500 font-medium'>{data.email}</h1>
			</div>
			<div className='w-1/2 flex'>
				<div className=' w-1/4 flex items-center justify-center'>
					<h1 className='text-green-700 h-fit p-1 bg-green-100 font-bold text-sm px-2 rounded-xl'>
						● {data.status}
					</h1>
				</div>

				<div className='w-1/4 flex items-center justify-center'>
					<h1 className='text-sm text-neutral-500 font-medium'>{data.role}</h1>
				</div>
				<div className='w-1/4 flex items-center justify-center'>
					<h1 className='text-sm text-neutral-500 font-medium'>Jun 20, 2022</h1>
				</div>
				<div className=' flex w-1/4 flex items-center justify-center'>
					<button class='fa-solid text-neutral-500 fa-trash-can m-3'></button>
					<button class='fa-solid text-neutral-500 fa-pencil m-3'></button>
				</div>
			</div>
		</div>
	);
}

export default SingleElement;
