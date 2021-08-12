import React from 'react'
import { motion } from 'framer-motion'

function Loading() {
  const loadingContainer = {
    start: { transition: { staggerChildren: 0.2 } },
    end: { transition: { staggerChildren: 0.2 } }
  }

  const loadingCircle = {
    start: {
      y: '0%'
    },
    end: {
      y: '100%'
    }
  }

  const loadingCircleTransition = {
    duration: 0.4,
    yoyo: Infinity,
    ease: 'easeInOut'
  }
  return (
    <motion.div
      className='absolute flex flex-row left-0 pl-10 pb-2 items-center justify-center gap-1'
      variants={loadingContainer}
      initial='start'
      animate='end'
    >
      <motion.div
        className='w-2 h-2 bg-white rounded-full'
        variants={loadingCircle}
        transition={loadingCircleTransition}
      ></motion.div>
      <motion.div
        className='w-2 h-2 bg-white rounded-full'
        variants={loadingCircle}
        transition={loadingCircleTransition}
      ></motion.div>
      <motion.div
        className='w-2 h-2 bg-white rounded-full'
        variants={loadingCircle}
        transition={loadingCircleTransition}
      ></motion.div>
    </motion.div>
  )
}

export default Loading
