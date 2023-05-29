'use client'

import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ClipLoader } from 'react-spinners'

const LoadingModal = () => {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center">
      <ClipLoader size={50} color="rgb(53, 162, 235)" />
    </div>
  )
}

export default LoadingModal
