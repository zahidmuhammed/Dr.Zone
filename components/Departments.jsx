import { GiMedicines, GiTooth, GiBrain } from 'react-icons/gi';

const Departments = () => {
	return (
		<div className="px-5 my-5 w-full">
			<div className="flex justify-between">
				<div className="flex flex-col cursor-pointer">
					<div className="bg-[#ebc1c6] flex justify-center items-center h-10 w-10 rounded-xl">
						<GiMedicines />
					</div>
					<div className="text-xs font-bold py-1">Medicine</div>
					<div className="text-xs text-[#9799a0]">10 Doctors</div>
				</div>
				<div className="flex flex-col cursor-pointer">
					<div className="bg-[#dedff3] flex justify-center items-center h-10 w-10 rounded-xl">
						<GiTooth />
					</div>
					<div className="text-xs font-bold py-1">Dentists</div>
					<div className="text-xs text-[#9799a0]">13 Doctors</div>
				</div>
				<div className="flex flex-col cursor-pointer">
					<div className="bg-[#f0f4cf] flex justify-center items-center h-10 w-10 rounded-xl">
						<GiBrain />
					</div>
					<div className="text-xs font-bold py-1">Ent</div>
					<div className="text-xs text-[#9799a0]">25 Doctors</div>
				</div>
			</div>
		</div>
	);
};

export default Departments;
