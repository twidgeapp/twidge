import { motion } from "framer-motion"

const transition: any = {
    duration: 15,
    repeat: Infinity,
    repeatType: "reverse",
    ease: "easeInOut"
};

const Blob = () => {
    return (
        <>
            <motion.img
                animate={{
                    x: [100, 200, 40, 100, 200],
                    y: [100, 100, 50, 100, 200],
                    width: [600, 900, 1000, 1500, 2000],
                }}
                transition={transition}
                src="/setup/blobs/blue.png" className="absolute -top-44 -left-36 w-1/2 pointer-events-none select-none" />
            <motion.img
                animate={{
                    x: [0, 200, 40, 100, 200],
                    y: [0, 100, 50, 100, 200],
                }}
                transition={transition}
                src="/setup/blobs/dark-orange.png" className="absolute -bottom-44 -left-60 w-3/4 pointer-events-none select-none" />
            <motion.img
                animate={{
                    x: [-300, -300, -400, -100, -200],
                    y: [0, 100, 50, 100, 200],
                    width: [1000, 1200, 1000, 1200, 1000],
                }}
                transition={transition}
                src="/setup/blobs/light-purple.png" className="absolute -top-44 -right-36 w-1/2 pointer-events-none select-none" />
            <motion.img
                animate={{
                    x: [-150, -200, -40, -100, -200],
                    y: [0, -500, -100, 100, -200],
                    width: [1000, 1500, 1000, 800, 800],
                }}
                transition={transition}
                src="/setup/blobs/orange.png" className="absolute -bottom-44 -right-56 w-3/4 pointer-events-none select-none" />
            <motion.img
                animate={{
                    x: [0, 200, 40, 100, 200],
                    y: [0, 100, -100, 100, 2500],
                }}
                transition={transition}
                src="/setup/blobs/purple.png" className="absolute  w-full pointer-events-none select-none" style={{
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)"
                }} />

        </>
    )
}

export default Blob