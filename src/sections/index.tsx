import Button from "../button";

const SectionHero = () => {

    return(
        <section className="w-full flex justify-center mt-8">
            <div className="w-full 2xl:w-3/4 p-6 lg:px-8 flex flex-col-reverse gap-8 xl:flex-row justify-between items-center">
                <article className="w-full flex items-center xl:w-1/2 xl:items-start flex-col gap-2">
                    <h2 className="text-6xl text-center xl:text-8xl xl:text-start font-semibold font-body">More than just <br />shorter links</h2>
                    <span className="mb-8 text-center xl:text-start text-2xl text-neutral-grayishViolet">Build your brand's recognition and get detailed insights on how your links are performing.</span>
                    <Button className={"py-2 px-16 rounded-3xl"} title="Get Started" />
                </article>
                <article className="w-full xl:w-1/2 flex flex-col">
                    <picture>
                        <img className="select-none" src="/public/images/illustration-working.svg" alt="Illustration of working at home office." />
                    </picture>
                </article>
            </div>
        </section>
    )
}

export default SectionHero;