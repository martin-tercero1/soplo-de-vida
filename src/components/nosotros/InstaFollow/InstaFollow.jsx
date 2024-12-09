import Image from "next/image";

export const InstaFollow = () => {
  return (
    <section className="w-screen p-2 bg-light-yellow flex flex-col gap-2 items-center mt-3 laptop:py-[50px]">
      <span className="font-semibold text-sm leading-5 text-center laptop:text-md laptop:font-bold laptop:leading-8">
        ¡Seguinos en Instagram!
      </span>
        <a href="https://www.instagram.com/soplodevida_/?hl=es" target="_blank" className="flex gap-[4px] items-center">
          <div className="relative w-3 h-3 bg-primary rounded-[4px]">
            <Image
              className="p-[4px]"
              src="/icons/ig-logo.svg"
              alt="Instagram logo"
              fill
            />
          </div>
          <span className="text-sm laptop:font-bold laptop:text-[20px]">@soplodevida</span>
        </a>
    </section>
  );
};
