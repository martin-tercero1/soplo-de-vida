import {Button}  from "@/components/shared/Button";

export default function CallToAction(){
    return(
        <>
            <section id="calltoaction"  className="p-4 flex flex-col gap-1 bg-secondary">
                <h2 className="text-md  text-black font-semibold">¿Querés sumarte como Aliado?</h2>
                <p className="text-base  text-black font-semibold">Buscamos empresas que quieran colaborar en el refugio</p>
                <Button
                    size="large"
                    variant="primary"
                    customStyles={["w-auto","outline-transparent", "font-semibold", "mobile:text-base"]}
                    text="Quiero Aliarme"
                    link="https://goo.gl/forms/vRAFc3yV8MWCZ1yJ2"
                ></Button>
            </section>
        </>
    );
}