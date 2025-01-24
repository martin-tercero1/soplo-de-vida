import Image from "next/image";

export function SmallPic({ image }) {
  return image ? (
    <div className="w-[97px] h-[97px] relative">
      <Image
        src={image}
        className="rounded-[8px]"
        fill
        alt="Imagen de mascota"
      />
    </div>
  ) : (
    <Image
      src="/shared/mascota.png"
      width={97}
      height={97}
      className="rounded-[8px]"
      alt="Logo de mascota"
    />
  );
}
