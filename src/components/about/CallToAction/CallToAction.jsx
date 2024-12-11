import {Button}  from "@/components/shared/Button";

export default function CallToAction(){
    return(
        <>
            <section id="calltoaction"  className="mobile:p-4 desktop:px-4 desktop:py-5 desktop:m-5 desktop:rounded-xl flex mobile:flex-col desktop:flex-row gap-1 items-center justify-evenly bg-secondary mb-4">
                <div>
                    <h2 className="mobile:text-md tablet:text-xl tablet:font-bold  text-center  text-black font-semibold">¿Querés sumarte como Aliado?</h2>
                    <p className="text-basetext-black text-center font-semibold">Buscamos empresas que quieran colaborar en el refugio</p>
                </div>
                <div className="">
                    <Button
                        size="large"
                        variant="primary"
                        customStyles={["mobile:w-auto  desktop:w-[300px]","outline-transparent", "font-semibold", "mobile:text-base"]}
                        text="Quiero Aliarme"
                        link="https://goo.gl/forms/vRAFc3yV8MWCZ1yJ2"
                    ></Button>
                </div>           
            </section>
        </>
    );
}