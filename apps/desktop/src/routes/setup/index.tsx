import { motion } from "framer-motion"
import { useState } from "react"
import Blob from "./blobs"
import WelcomePage from "./welcome"

const SetupIndex = () => {
    const [page, setPage] = useState<"welcome" | "colors" | "done">("welcome");
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1
            }} className="text-white w-full h-full font-nunito bg-bg-accent/20 backdrop-blur-xl">
            <Blob />
            {page == "welcome" && <WelcomePage />}
        </motion.div>
    )
}

export default SetupIndex