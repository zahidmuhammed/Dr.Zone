import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
	return (
		<div className="px-5 my-3 w-full">
			<div className="border rounded-xl py-3 flex px-3">
				<div className="">
					<FiSearch color="#434d60" />
				</div>
				<div className="px-3 text-xs flex items-center text-[#9799a4]">
					<input
						placeholder="Search for doctor"
						className="appearance-none border-0 outline-none"
					></input>
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
