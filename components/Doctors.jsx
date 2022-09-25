import Link from 'next/link';
import Image from 'next/image';
import { TbClock } from 'react-icons/tb';
import { doctorsData } from '../data/doctorsDB';

const Doctors = () => {
	return (
		<div className="px-5 my-3 w-full md:pb-5">
			<div className="flex justify-between py-2 ">
				<span className="text-xs font-bold">Popular Doctors</span>
				<span className="text-xs cursor-pointer">View All</span>
			</div>
			{doctorsData.map((item, index) => (
				<Link href={`doctor/${index + 1}`} key={index}>
					<div className="flex justify-between py-2 cursor-pointer">
						<div className={`bg-[#ccdfff] rounded-md flex`}>
							<Image
								src={item.image}
								height={40}
								width={40}
								alt="profile"
							/>
						</div>
						<div className="flex flex-col justify-center items-start w-1/2">
							<div className="text-xs font-bold text-text">
								{item.name}
							</div>
							<div className="text-xs text-[#9799a0]">
								{item.department}
							</div>
						</div>
						<div className="text-xs flex items-center">
							<span className="bg-[#f1f2f8] text-[#646875] flex items-center px-2 py-1 rounded-full">
								<TbClock className="inline-block mr-1" />{' '}
								{item.startTime}
							</span>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Doctors;
