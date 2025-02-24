import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
	return (
		<div className='py-20' id='testimonials'>
			<h1 className='heading'>
				Kind <span className='text-purple'>feedback</span>
			</h1>
			<div className='flex flex-col items-center max-lg:mt-10'>
				<InfiniteMovingCards
					items={testimonials}
					speed='slow'
					direction='right'
				/>

				<div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
					{companies.map(({ id, img, name, nameImg }) => (
						<div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
							<img src={img} alt={name} className='md:w-10 w-5' />
							<img
								src={nameImg}
								alt={name}
								className={`md:w-16 ${id === 2 && "md:w-32 w-16"} w-10`}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Clients;
