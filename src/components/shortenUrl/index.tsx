import { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '../button'
import { UrlInfo } from '../sections/Statistics/types'
import UrlStorage from './storageUrl'

const ShortenUrl = () => {
  const [inputUrl, setInputUrl] = useState('')
  const [shortUrls, setShortUrls] = useState<UrlInfo[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    const storedUrlsString = localStorage.getItem('shortenedUrls')
    const storedUrls = storedUrlsString ? JSON.parse(storedUrlsString) : []
    setShortUrls(storedUrls)
  }, [])

  const isValidUrl = (url: string) => {
    const urlRegex =
      /^(http|https):\/\/([\w-]+(\.[\w-]+)+([\w-.,@?^=%&:/~+#]*[\w-@?^=%&/~+#])?)/
    return urlRegex.test(url)
  }

  const shortenUrl = async () => {
    if (!isValidUrl(inputUrl)) {
      setError('Please enter a valid URL.')
      return
    }

    const encodedParams = new URLSearchParams()
    encodedParams.set('url', inputUrl)

    const options = {
      method: 'POST',
      url: 'https://shorturl9.p.rapidapi.com/functions/api.php',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'fa265b6a60msh61ec3793ee140a0p19cc55jsn953339525fad',
        'X-RapidAPI-Host': 'shorturl9.p.rapidapi.com',
      },
      data: encodedParams,
    }

    try {
      const response = await axios.request(options)

      if (
        response.data &&
        response.data.status === 'success' &&
        response.data.url
      ) {
        setInputUrl('')
        setError('')

        const storedUrlsString = localStorage.getItem('shortenedUrls')
        const storedUrls = storedUrlsString ? JSON.parse(storedUrlsString) : []

        const newUrl = {
          originalUrl: inputUrl,
          shortenedUrl: response.data.url,
          id: self.crypto.randomUUID(),
        }

        const updatedUrls = [...storedUrls, newUrl]
        setShortUrls(updatedUrls)
        localStorage.setItem('shortenedUrls', JSON.stringify(updatedUrls))
      } else {
        setError('Error while shortening URL.')
      }
    } catch (error) {
      console.error(error)
      setError('Request error.')
    }
  }

  return (
    <>
      <section className="flex justify-center absolute top-0 -translate-y-1/2 w-full px-8">
        <article className="w-full flex flex-col gap-4 p-6 xl:p-12 xl:flex-row xl:gap-8 bg-primary-darkViolet bg-shorten-mobile bg-left-bottom md:bg-shorten-desktop md:bg-center bg-no-repeat bg-cover rounded-xl 2xl:w-3/4">
          <div className="w-full flex flex-col gap-2">
            <input
              className="w-full p-3 rounded-md focus-visible:outline-none"
              type="text"
              placeholder="Shorten a link here..."
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  shortenUrl()
                }
              }}
            />
            {error && <p className="text-red-500">{error}</p>}
          </div>
          <Button
            title="Shorten it!"
            className="w-full h-fit xl:w-40 text-xl py-3 rounded-lg"
            action={shortenUrl}
          />
        </article>
      </section>
      <UrlStorage state={{ shortUrls, setShortUrls }} />
    </>
  )
}

export default ShortenUrl
