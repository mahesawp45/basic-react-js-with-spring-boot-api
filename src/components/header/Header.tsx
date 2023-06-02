import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'



import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'



const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Watch List', href: '/', current: false },

]


function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

const Header = () => {
  return (
      <Disclosure as="nav" className="bg-gray-950 bg-opacity-80 backdrop-filter backdrop-blur-md shadow-lg fixed top-0 left-0 right-0 z-50">
          {({ open }) => (
              <>
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                      <div className="flex h-16 justify-between">
                          <div className="flex">
                              <div className="-ml-2 mr-2 flex items-center md:hidden">
                                  {/* Mobile menu button */}
                                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                      <span className="sr-only">Open main menu</span>
                                      {open ? (
                                          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                      ) : (
                                          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                      )}
                                  </Disclosure.Button>
                              </div>
                              <div className="flex flex-shrink-0 items-center">
                                  {/* <img
                                      
                                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                      alt="Your Company"
                                  /> */}
                                  <div className="block h-8 w-auto lg:hidden text-yellow-500 text-lg">
                                      <FontAwesomeIcon icon={faVideoSlash} /> Gold
                                  </div>
                                  
                                  <div className="hidden h-8 w-auto lg:block text-yellow-500 text-lg">
                                      <FontAwesomeIcon icon={faVideoSlash} /> Gold
                                  </div>

                                  {/* <img
                                      className="hidden h-8 w-auto lg:block"
                                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                      alt="Your Company"
                                  /> */}
                              </div>
                              <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                                  {navigation.map((item) => (
                                      <a
                                          key={item.name}
                                          href={item.href}
                                          className={classNames(
                                              item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                              'rounded-md px-3 py-2 text-sm font-medium'
                                          )}
                                          aria-current={item.current ? 'page' : undefined}
                                      >
                                          {item.name}
                                      </a>
                                  ))}
                              </div>
                          </div>
                          <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                  <button
                                      type="button"
                                      className="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                  >
                                      Login
                                      
                                  </button>
                              </div>
                              <div className="flex-shrink-0">
                                  <button
                                      type="button"
                                      className="relative inline-flex items-center gap-x-1.5 border border-gray-200 text-gray-200 hover:text-white hover:border-none text-sm font-semibold px-3 py-2 rounded-md shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                  >
                                      Register
                                      
                                  </button>
                              </div>
                              
                          </div>
                      </div>
                  </div>

                  <Disclosure.Panel className="md:hidden">
                      <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                          {navigation.map((item) => (
                              <Disclosure.Button
                                  key={item.name}
                                  as="a"
                                  href={item.href}
                                  className={classNames(
                                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                      'block rounded-md px-3 py-2 text-base font-medium'
                                  )}
                                  aria-current={item.current ? 'page' : undefined}
                              >
                                  {item.name}
                              </Disclosure.Button>
                          ))}
                      </div>
                  </Disclosure.Panel>
              </>
          )}
      </Disclosure>
  )
}

export default Header