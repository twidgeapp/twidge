import { useState } from "react"

import { motion } from "framer-motion"
import { IconChevronRight } from "@tabler/icons"

const firstLineWords = ["Welcome", "to", "the", "future"]
const secondLineWords = ["of", "productivity."]

const Span = ({
    children,
    delay,
    className
}: any) => (
    <motion.span
        initial={{
            opacity: 0,
            y: 150,
            rotate: 10
        }}
        animate={{
            opacity: 1,
            y: 0,
            rotate: 0
        }}
        transition={{
            delay: delay,
            damping: 100,
            stiffness: 100
        }}
        className={`text-5xl font-bold ${className}`}>{children}</motion.span>
)



const WelcomePage = () => {
    const [hovering, setHovering] = useState(false)

    return (
        <div className="w-full h-full flex flex-col items-center justify-center absolute z-50">
            <motion.img src={"/logo.svg"} className="mb-2" width={48}
                initial={{
                    opacity: 0,
                    y: 150,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    damping: 100,
                    stiffness: 100
                }}
            />
            <p className="flex gap-2">
                {firstLineWords.map((word, index) => (
                    <Span delay={index * 0.2 + 1}>{word}</Span>
                ))}
            </p>
            <p className="flex gap-2 mt-1">
                {secondLineWords.map((word, index) => (
                    <Span delay={firstLineWords.length * 0.2 + index * 0.2 + 1} className={`${word == "productivity." ? "shimmer" : ""}`}>{word}</Span>
                ))}
            </p>
            <motion.button
                initial={{
                    opacity: 0,
                    y: 150,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    delay: 2.5,
                    damping: 100,
                    stiffness: 100
                }}
                onMouseEnter={() => {
                    setHovering(true)
                }} onMouseLeave={() => {
                    setHovering(false)
                }} className="flex px-2 py-1 mt-3 gap-1 text-lg font-bold items-center select-none">
                Get Started
                <IconChevronRight stroke={4} size={18} className={`transition-all duration-300 ${hovering && "ml-1"}`} />
            </motion.button>
        </div>
    )
}

export default WelcomePage