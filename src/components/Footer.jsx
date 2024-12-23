import GetIcon from "./utils";

const Footer = () => {
	const links = [
		{
			icon: "MdEmail",
			href: "mailto:support@craftycreations.com",
			lib: "md",
		},
		{
			icon: "MdPhone",
			href: "tell:+1 123 456 7890",
			lib: "md",
		},
		{
			icon: "FaFacebookF",
			href: "https://www.facebook.com/",
			lib: "fa6",
		},
		{
			icon: "FaPlay",
			href: "https://www.youtube.com/",
			lib: "fa6",
		},
	];

	return (
		<div className="py-6 bg-zinc-900">
			<div className="container mx-auto flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
				<p className="text-white">
					&copy; 2023 CraftyCreations. All rights reserved.
				</p>
				<div className="flex gap-4 items-center">
					{links.map((link, index) => (
						<span
							key={index}
							className="w-8 h-8 rounded-full bg-white transition-transform hover:scale-125 cursor-pointer grid place-items-center"
							href={link.href}
							target="_blank"
						>
							<GetIcon
								lib={link.lib}
								name={link.icon}
								color="black"
								size={18}
							/>
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default Footer;
