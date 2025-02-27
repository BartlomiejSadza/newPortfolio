import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className='w-full pb-10 mb-[100px] md:mb-5' id='contact'>
			<div className='w-full absolute left-0 -bottom-0'>
				<img
					src='/footer-grid.svg'
					alt='grid'
					className='w-full h-full opacity-70'
				/>
			</div>

			<div className='flex flex-col items-center'>
				<h1 className='heading lg:max-w-[45vw]'>
					Ready to take <span className='text-purple'>your</span> digital
					presence to the <span className='text-purple'>next</span> level?
				</h1>
				<p className='text-white-200 md:mt-10 my-5 text-center'>
					Reach out me today and let&apos;s discuss how I can help you achieve
					your goals!
				</p>
				<a href='mailto:bartlomiej.sadza@icloud.com'>
					<MagicButton
						title="Let's get in touch"
						icon={<FaLocationArrow />}
						position='left'
					/>
				</a>
			</div>
			<div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
				<p className='md:text-base text-sm md:font-normal font-light '>
					Copyright © 2025 Barlomiej Sadza
				</p>
				<div className='flex items-center md:gap-3 gap-6'>
					{socialMedia.map((profile) => (
						<Link
							key={profile.id}
							href={profile.url}
							target='_blank'
							className='w-10 h-10 mt-5 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
							<img
								src={profile.img}
								alt={`${profile.id}`}
								width={20}
								height={20}
							/>
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
