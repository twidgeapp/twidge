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
            }} className="text-white w-full h-full bg-bg--accent font-nunito">
            <Blob />
            {page == "welcome" && <WelcomePage />}
        </motion.div>
    )
}

export default SetupIndex