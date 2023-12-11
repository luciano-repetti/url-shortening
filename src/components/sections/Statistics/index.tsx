import { Fragment } from 'react'
import ShortenUrl from '../../shortenUrl'

const SectionStatics = () => {
  return (
    <section className="w-full flex flex-col justify-center xl:mt-16 xl:py-16 bg-neutral-grayLight relative">
      <ShortenUrl />
      <article className="w-full pt-24 xl:pt-16 flex flex-col items-center gap-4">
        <h2 className="text-6xl text-center xl:text-4xl xl:text-start font-semibold font-body">
          Advanced Statistics
        </h2>
        <span className="mb-8 text-center text-xl text-neutral-grayishViolet">
          Track how your links arc performing across the web with{' '}
          <br className="hidden xl:inline" />
          our advanced statistics dashboard.
        </span>
      </article>
      <section className="w-full flex justify-center px-8 py-16">
        <AllCharacteristics />
      </section>
    </section>
  )
}

export default SectionStatics

const Characteristic = ({
  icon,
  title,
  description,
  styles,
}: {
  icon: string
  title: string
  description: string
  styles?: React.CSSProperties
}) => {
  return (
    <article
      style={styles}
      className={`flex-1 h-fit rounded-lg relative p-8 pb-16 pt-16 flex flex-col bg-neutral-50`}
    >
      <div className="p-4 rounded-full bg-primary-darkViolet absolute left-1/2 -translate-x-1/2 xl:left-16 top-0 -translate-y-1/2">
        <img src={icon} alt="" />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-xl">{title}</h3>
        <span>{description}</span>
      </div>
    </article>
  )
}

const AllCharacteristics = () => {
  const characteristics = [
    {
      icon: '/icons/icon-brand-recognition.svg',
      title: 'Brand Recognition',
      description:
        'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
    },
    {
      icon: '/icons/icon-detailed-records.svg',
      title: 'Detailed Records',
      description:
        'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    },
    {
      icon: '/icons/icon-fully-customizable.svg',
      title: 'Fully Customizable',
      description:
        'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    },
  ]

  return (
    <article className="w-full 2xl:w-3/4 flex flex-col xl:flex-row">
      {characteristics.map(({ icon, title, description }, index) => {
        return (
          <Fragment key={index}>
            <div className='hidden xl:block'>
              <Characteristic
                icon={icon}
                title={title}
                description={description}
                styles={{marginTop: `${40*index}px`}}
              />
            </div>
            <div className='xl:hidden'>
              <Characteristic
                icon={icon}
                title={title}
                description={description}
                styles={{marginTop: '35px'}}
              />
            </div>
            {index !== characteristics.length - 1 && (
              <Stick id={index} />
            )}
          </Fragment>
        )
      })}
    </article>
  )
}

const Stick = ({ id }: { id: number }) => {
  return (
    <>
      <div
        style={{ marginTop: `${100 * (id + 1)}px` }}
        className="hidden xl:block xl:w-12 xl:h-2 bg-primary-cyan-400"
      ></div>
      <div className='flex justify-center xl:hidden'>
        <div
          className="w-2 h-8 bg-primary-cyan-400"
        ></div>
      </div>
    </>

  );
};