import { Button } from "@/components/shared/Button";
import { useMediaQuery } from "@uidotdev/usehooks";
import Image from "next/image";

export const HelpUsCards = ({ imageUrl, title, text, buttonText, togglePopup, link }) => {
    const isSmallDevice = useMediaQuery(
        "only screen and (min-width : 320px) and (max-width : 743px)"
    );

    return (
      <div className="mobile:w-[100%] tablet:w-[48%] max-w-[614px] h-[auto] mobile:max-w-[280px] tablet:max-w-[100%] bg-white flex mobile:flex-col tablet:flex-row rounded-lg items-center shadow-md p-1 gap-1">
        {isSmallDevice ? (
          <div className="flex flex-row gap-1 items-start justify-between">
            <Image
              src={imageUrl}
              alt={"help-us-photo"}
              height={200}
              width={200}
              className={`rounded-lg max-w-[38%] self-start`}
            ></Image>
            <div className="w-fit h-[100%] flex flex-1 flex-col items-start shrink-0">
              <h3 className="font-bold text-[#404552] text-[18px]">{title}</h3>
              <p className="text-gray-600 desktop:text-base laptop:text-sm tablet:text-sm">
                {text}
              </p>
            </div>
          </div>
        ) : (
          <Image
            src={imageUrl}
            alt={"help-us-photo"}
            height={200}
            width={200}
            className={`rounded-lg max-w-[38%] min-w-[115px] self-start`}
          ></Image>
        )}
        {isSmallDevice ? (
          <Button
            variant="primary"
            size="medium"
            text={buttonText}
            onClick={togglePopup}
            customStyles={["w-[100%]"]}
            link={link}
          />
        ) : (
          <div className="w-fit h-[100%] flex flex-1 justify-between flex-col items-start shrink-0">
            <div className="flex flex-col jusitfy-between items-start shrink-0">
              <h3 className="font-bold text-[#404552] text-[18px]">{title}</h3>
              <p className="text-gray-600 desktop:text-base laptop:text-sm tablet:text-sm">
                {text}
              </p>
            </div>
            <Button
              variant="primary"
              size="medium"
              text={buttonText}
              onClick={togglePopup}
              customStyles={[
                "min-w-fit px-1 sm:w-[100%] md:w-[100%] lg:w-[35%]",
              ]}
              link={link}
            />
          </div>
        )}
      </div>
    );
};
