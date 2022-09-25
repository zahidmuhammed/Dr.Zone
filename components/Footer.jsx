import { RiHome6Fill } from 'react-icons/ri';
import { HiBell } from 'react-icons/hi';
import { AiFillMessage } from 'react-icons/ai';
import { FaUser } from 'react-icons/fa';

const Footer = () => {
	return (
		<div className="flex justify-around h-16 bg-white md:h-10 items-center fixed md:static bottom-0 left-0 right-0">
			<div className="text-[#828a90] hover:text-black cursor-pointer hover:transition hover:duration-400">
				<RiHome6Fill />
			</div>
			<div className="text-[#828a90] hover:text-black cursor-pointer hover:transition hover:duration-400">
				<HiBell />
			</div>
			<div className="text-[#828a90] hover:text-black cursor-pointer hover:transition hover:duration-400">
				<AiFillMessage />
			</div>
			<div className="text-[#828a90] hover:text-black cursor-pointer hover:transition hover:duration-400">
				<FaUser />
			</div>
		</div>
	);
};

export default Footer;
