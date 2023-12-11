import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Button from '../button'

const navigation = [
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Resources', href: '#' },
  ]

const Header = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return(
        <header className="relative w-full 2xl:w-3/4 lg:left-1/2 lg:-translate-x-1/2 inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex items-center mr-8">
            <a href="#">
              <h1 className="font-extrabold text-2xl">Shortly</h1>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="hover:font-bold text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden gap-8 lg:flex lg:flex-1 lg:items-center lg:justify-end">
            <a href="#" className="text-sm font-semibold leading-6 text-gray-900 select-none">
              Login
            </a>
            <Button title='Sign Up' />
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <h1 aria-hidden="true" className="font-extrabold text-2xl">Shortly</h1>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="hover:font-bold -mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="pt-4 flex gap-4 w-full">
                  <a href="#" className="text-sm font-semibold leading-6 text-gray-900 select-none">
                    Login
                  </a>
                  <Button title='Sign Up' />
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    )
}

export default Header