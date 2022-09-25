import Link from 'next/link';
import { useRouter } from 'next/router';
import { BiShareAlt, BiArrowBack } from 'react-icons/bi';
import { TbClock } from 'react-icons/tb';
import { MdOutlineCleanHands, MdOutlineStar } from 'react-icons/md';
import { doctorsData } from '../../data/doctorsDB';
import WindowWrapper from '../../layout/WindowWrapper';
import Image from 'next/image';

const ViewDoctor = () => {
	const route = useRouter();

	if (route.isFallback) {
		return (
			<div className="h-screen w-full flex justify-center items-center">
				Loading...
			</div>
		);
	}

	const { id } = route.query;
	const doctor = doctorsData[id - 1];

	return (
		<WindowWrapper>
			<div className="border drop-shadow-xl md:rounded-3xl h-screen w-full md:h-max md:w-80 bg-white py-4 px-5">
				<div className="flex justify-between pt-4">
					<Link href="/">
						<div className="flex items-center text-text cursor-pointer">
							<BiArrowBack className="inline-block" />
							<span className="px-2">Back</span>
						</div>
					</Link>
					<div className="flex items-center cursor-pointer text-text">
						<BiShareAlt />
					</div>
				</div>
				<div className="flex flex-col justify-center items-center py-3">
					<div
						className={`${doctor?.avatarbg} w-max mx-auto flex rounded-xl`}
					>
						<Image
							src={doctor?.image}
							height={80}
							width={80}
							alt="profile"
						/>
					</div>
					<div className="text-md font-bold text-text">
						{doctor?.name}
					</div>
					<div className="text-sm text-[#9799a0]">
						{doctor?.department}
					</div>
				</div>
				<div>
					<div className="text-sm font-semibold pb-2 text-text">
						About Doctor
					</div>
					<div className="text-xs text-[#5c5d62] pb-2 md:pb-1">
						{doctor?.about}{' '}
						<span className="underline cursor-pointer text-text">
							Read More
						</span>
					</div>
					<div className="text-xs font-semibold flex items-center py-2">
						<TbClock
							color="#75a7c6"
							size={18}
							className="inline-block ml-1 mr-2"
						/>
						{doctor?.startTime} AM To {doctor?.endTime} PM{' '}
						<span className="pl-1 font-normal text-[#5c5d62]">
							(Everyday)
						</span>
					</div>
					<div className="text-xs flex items-center font-semibold">
						<MdOutlineCleanHands
							color="#83b497"
							size={18}
							className="inline-block ml-1 mr-2"
						/>
						{doctor?.experience} Years{' '}
						<span className="pl-1 font-normal text-[#5c5d62]">
							{' '}
							Of Experience
						</span>
					</div>
				</div>
				<div className="w-full">
					<div className="flex justify-between text-xs mt-6">
						<span className="flex items-center text-text ">
							<span className="font-bold ">Reviews</span>{' '}
							<span className="flex px-2">
								<MdOutlineStar
									color="#ed9c56"
									className="inline-block"
								/>
							</span>{' '}
							4.9 (1.2k)
						</span>
						<span className="font-bold cursor-pointer text-text">
							View All
						</span>
					</div>
					<div className="text-xs my-5 md:my-3 flex flex-row overflow-x-scroll hide-scroll-bar">
						<div className="border drop-shadow-sm rounded-xl p-3 mr-3">
							<div className="flex justify-between items-center">
								<div className="w-12 bg-[#eececb] rounded-md flex">
									<Image
										src="https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat2&accessoriesType=Kurt&hatColor=Red&facialHairType=BeardLight&facialHairColor=Brown&clotheType=GraphicShirt&clotheColor=Black&graphicType=SkullOutline&eyeType=Close&eyebrowType=AngryNatural&mouthType=Grimace&skinColor=Brown"
										height={50}
										width={50}
										alt="profile"
									/>
								</div>
								<div className="flex flex-col w-32 md:w-28 pl-2">
									<div className="text-text font-semibold">
										Rober Jhonson
									</div>
									<div className="text-[#5c5d62]">
										2 Day Ago
									</div>
								</div>
								<div className="w-16 md:w-10 py-1 flex items-center bg-[#f6f0e9] justify-center rounded-full">
									<MdOutlineStar
										color="#ed9c56"
										className="inline-block"
									/>
									4.9
								</div>
							</div>
							<div className="pt-2 text-[#5c5d62]">
								{doctor?.name.substring(3)} is a very good
								doctor , I am very happy to meet him . Thank you
							</div>
						</div>
						<div className=" border drop-shadow-sm rounded-xl p-3 ">
							<div className="flex justify-between items-center">
								<div className="w-12  bg-[#eececb] rounded-md flex">
									<Image
										src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Wayfarers&hairColor=SilverGray&facialHairType=BeardLight&facialHairColor=Brown&clotheType=BlazerSweater&eyeType=Side&eyebrowType=Angry&mouthType=Disbelief&skinColor=Light"
										height={50}
										width={50}
										alt="profile"
									/>
								</div>
								<div className="flex flex-col w-32 md:w-28 pl-2">
									<div className="text-text font-semibold">
										Zayn Malik
									</div>
									<div className="text-[#5c5d62]">
										3 Day Ago
									</div>
								</div>
								<div className="w-16 md:w-10 py-1 flex items-center bg-[#f6f0e9] justify-center rounded-full">
									<MdOutlineStar
										color="#ed9c56"
										className="inline-block"
									/>
									4.7
								</div>
							</div>
							<div className="pt-2 text-[#5c5d62]">
								{doctor?.name.substring(3)} is best in{' '}
								{doctor?.department}, I am very happy to meet
								him . Thank you
							</div>
						</div>
					</div>
					<div className="text-sm fixed bottom-0 left-5 right-5 md:static">
						<div className="bg-[#b4d9e3] hover:bg-cyan-500 hover:transition hover:duration-300 hover:text-white text-text font-bold flex justify-center rounded-full py-3 my-4 md:my-0 w-full cursor-pointer">
							Book Appointment
						</div>
					</div>
				</div>
			</div>
		</WindowWrapper>
	);
};

export default ViewDoctor;

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { id: '1' } },
			{ params: { id: '2' } },
			{ params: { id: '3' } },
			{ params: { id: '4' } },
		],
		fallback: false, // can also be true or 'blocking'
	};
}

export async function getStaticProps() {
	return {
		props: { doctorsData },
	};
}
