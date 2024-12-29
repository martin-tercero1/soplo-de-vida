import { Button } from "@/components/shared/Button";
import Image from "next/image";

export const HelpUsCards = ({ imageUrl, title, text, buttonText }) => {
    return <div className="w-[614px] h-[250px] bg-white flex flex-row rounded-lg items-center shadow-md">
        <Image
            src={imageUrl}
            alt={'help-us-photo'}
            height={200}
            width={200}
            className={`md:h-[200px] md:w-[200px] rounded-lg m-1`}
        ></Image>
        <div className="w-fit h-[200px] m-1 flex justify-between flex-col items-start shrink-0">
            <div className="flex flex-col jusitfy-between items-start shrink-0">
                <h3 className="font-bold text-[#404552] text-[18px]">{title}</h3>
                <p className="text-gray-600 font-small mx-0 my-1 text-base w-[358px]">{text}</p>
            </div>
            <Button variant="primary" size="medium" text={buttonText} customStyles={["min-w-28 min-w-fit px-1"]} />
        </div>
    </div>;
};
