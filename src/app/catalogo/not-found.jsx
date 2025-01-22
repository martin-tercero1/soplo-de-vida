import Image from "next/image";
import { Button } from "@/components/shared/Button";

export default function NotFound() {
  return (
    <section>
      <div className="flex items-center">
        <Image
          width={131}
          height={131}
          src="/pet/not-found/not-found-mobile.png"
          alt="Imagen de mascota no encontrada"
        />
        <p >No encontramos al soplito que estás buscando</p>
      </div>
      <p>Completá el formulario para adoptar el animal que estás buscando</p>
      <Button variant="primary" text="Formulario de adopción" />
    </section>
  );
}
