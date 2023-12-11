import { useCopyToClipboard } from '../../hooks/use-copy-to-clipboard';
import Button from '../button';
import { UrlInfo, UrlStorageProps } from '../sections/Statistics/types';


const UrlStorage: React.FC<UrlStorageProps> = ({ state }) => {
  const { shortUrls, setShortUrls } = state

  const clearUrl = (id: string) => {
    const updatedUrls = shortUrls.filter((url) => url.id !== id)
    localStorage.removeItem('shortenedUrls')
    localStorage.setItem('shortenedUrls', JSON.stringify(updatedUrls))
    setShortUrls(updatedUrls)
  }

  const clearAll = () => {
    localStorage.removeItem('shortenedUrls')
    setShortUrls([])
  }

   // Mostrar solo los últimos 10 elementos
   const lastTenUrls = shortUrls.slice(-10);

  return (
    <section className="flex justify-center w-full mt-16 lg:mt-0 px-8">
      <div className="w-full flex flex-col gap-4 pt-8 2xl:w-3/4">
        {shortUrls?.length > 0 ? (
          <div className='w-full flex justify-end'>
            <Button action={() => clearAll()} title={"Delete all"} className='bg-transparent text-neutral-950 hover:bg-transparent active:bg-transparent hover:underline' />
          </div>
        ) : null}
        {lastTenUrls.length > 0 &&
          lastTenUrls.map((url) => (
            <ShortenedUrl
              key={url.id}
              url={url}
              clearUrl={() => clearUrl(url.id)}
            />
          ))}
      </div>
    </section>
  )
}

const ShortenedUrl: React.FC<{
  url: UrlInfo
  clearUrl: (id: string) => void
}> = ({ url, clearUrl }) => {
  const [copy] = useCopyToClipboard()

  return (
    <div
      key={url.id}
      className="flex w-full flex-col lg:flex-row items-center bg-neutral-white rounded-lg p-4"
    >
      <div className="w-full lg:w-4/6 border-b lg:border-b-0 overflow-hidden">
        <p className="break-words">{url.originalUrl}</p>
      </div>
      <div className="w-full mt-5 lg:mt-0 flex flex-col lg:flex-row lg:items-center justify-end gap-4 lg:w-2/6">
        <p className="text-primary-cyan-400 font-medium">{url.shortenedUrl}</p>
        <div className="flex gap-2">
          <Button
            action={() => copy(url.shortenedUrl)}
            title={'Copy'}
            className="w-full lg:w-fit rounded-md"
          />
          <Button
            action={() => clearUrl(url.id)}
            title={'Delete'}
            className="w-full lg:w-fit rounded-md bg-red-600 hover:bg-red-500 active:bg-red-700"
          />
        </div>
      </div>
    </div>
  )
}

export default UrlStorage