import { IoCalendar } from 'react-icons/io5';

const Header = () => {
	let hrs = new Date().getHours();
	let greet;

	if (hrs < 12) greet = 'Good Morning';
	else if (hrs >= 12 && hrs <= 17) greet = 'Good Afternoon';
	else if (hrs >= 17 && hrs <= 24) greet = 'Good Evening';

	return (
		<div className="flex justify-between pt-4">
			<div className="px-5">
				<div className="text-xs text-[#9799a0]">{greet}</div>
				<div className="text-sm font-semibold text-text">
					Get Doctor Appointment
				</div>
			</div>
			<div className="px-5 flex items-center ">
				<IoCalendar color="#434d60" className="cursor-pointer" />
			</div>
		</div>
	);
};

export default Header;
