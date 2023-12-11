const Footer = () => {

    return(
        <footer className="w-full flex justify-center xl:pb-16 bg-neutral-veryDarkViolet">
            <div className="w-full 2xl:w-3/4 p-6 lg:px-8 xl:pt-16 flex flex-col items-center gap-8 xl:flex-row xl:items-start xl:justify-between">
                <article>
                    <h2 className="font-extrabold text-3xl text-neutral-white">Shortly</h2>
                </article>

                <section className="flex flex-col xl:flex-row gap-16">
                    <article className="flex flex-col text-neutral-gray text-center xl:text-start gap-2">
                        <h4 className="text-neutral-white font-semibold text-lg mb-2">Features</h4>
                        <span>Link Shortening</span>
                        <span>Branded Links</span>
                        <span>Analytics</span>
                    </article>
                    <article className="flex flex-col text-neutral-gray text-center xl:text-start gap-2">
                        <h4 className="text-neutral-white font-semibold text-lg mb-2">Resources</h4>
                        <span>Link Shortening</span>
                        <span>Branded Links</span>
                        <span>Analytics</span>
                    </article>
                    <article className="flex flex-col text-neutral-gray text-center xl:text-start gap-2">
                        <h4 className="text-neutral-white font-semibold text-lg mb-2">Company</h4>
                        <span>Link Shortening</span>
                        <span>Branded Links</span>
                        <span>Analytics</span>
                    </article>
                </section>

                <article className="flex gap-4">
                    <span className="icon-facebook text-3xl"></span>
                    <span className="icon-twitter text-3xl"></span>
                    <span className="icon-social text-3xl"></span>
                    <span className="icon-instagram text-3xl"></span>
                </article>
            </div>
        </footer>
    )
}

export default Footer;