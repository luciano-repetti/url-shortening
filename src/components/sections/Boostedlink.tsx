import Button from "../button";

const SectionBoostedLink = () => {

    return(
        <section className="w-full flex items-center flex-col gap-6 py-16 bg-primary-darkViolet bg-boost-mobile md:bg-boost-desktop bg-no-repeat bg-cover">
            <h2 className="text-neutral-white text-3xl text-center xl:text-4xl xl:text-start font-body font-semibold">Boost your links today</h2>
            <Button title="Get started" className="py-3 px-10 rounded-full font-semibold" />
        </section>
    )
}

export default SectionBoostedLink;