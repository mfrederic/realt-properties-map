import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import SettingsIcon from '@mui/icons-material/Settings';
import { SettingsContent } from './SettingsContent';
import { RealtLogo } from '../../components/RealtLogo';

export function SettingsPanel({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[1002]" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex w-screen sm:w-fit sm:max-w-full sm:pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen sm:max-w-md">
                  <div className="flex h-full flex-col bg-white pt-4 shadow-xl">
                    <div className="px-4">
                      <div className="mb-4 flex text-center items-center justify-center">
                        <RealtLogo className="w-1/3" />
                        <div className="inline-block flex flex-col">
                          <h1 className="font-bold text-[1.375rem]">RealT Properties Map</h1>
                          <p className="text-xs">Not an official <a
                            href="https://realt.co/"
                            target="_blank"
                            rel="noreferrer">RealT</a> website</p>
                        </div>
                      </div>
                      <Dialog.Title className="grid grid-cols-12 text-base font-semibold leading-6 text-gray-900">
                        <SettingsIcon className="mr-4 col-span-1" />
                        <span className="col-span-6">Settings</span>
                        <Transition.Child
                          as={Fragment}
                          enter="ease-in-out duration-500"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="ease-in-out duration-500"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <div className="z-[1002] border-t sm:border-none sm:z-auto fixed sm:relative left-0 bottom-0 right-0 bg-slate-200 sm:bg-inherit sm:flex sm:col-span-5 sm:flex sm:align-center sm:justify-end">
                            <button
                              type="button"
                              className="w-full sm:w-fit p-4 sm:p-0 flex align-center justify-center sm:justify-end rounded-md text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-black"
                              title="Close panel"
                              onClick={() => setOpen(false)}
                            >
                              <span>Close panel</span>
                              <XMarkIcon className="ml-2 h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </Transition.Child>
                      </Dialog.Title>
                    </div>
                    <SettingsContent className="overflow-y-scroll pb-[60px] sm:pb-0" />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}