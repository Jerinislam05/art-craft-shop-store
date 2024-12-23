import * as md from "react-icons/md";
import * as fa6 from "react-icons/fa6";

const libs = {
	md,
	fa6,
};

const GetIcon = ({ lib, name, color = "black", size = 24 }) => {
	const lib_ = libs[lib];
	if (!lib_) throw Error(`lib ${lib} - Not found`);
	const Icon = lib_[name];
	if (!Icon) throw Error(`Icon ${lib} ${name} - Not found`);
	return <Icon color={color} size={size} />;
};
export default GetIcon;
