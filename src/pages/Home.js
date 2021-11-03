import React from 'react'
import Header from '../components/Header'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <div>
            <motion.div 
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        >
            <Header/>
            </motion.div>
        </div>
    )
}

export default Home
