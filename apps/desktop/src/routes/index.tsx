import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { rspc } from "../rspc.query"

const IndexRoute = () => {
    const migrations = rspc.useQuery(["migrations.run"])
    const firstRun = rspc.useQuery(["config.get", {
        key: "first_start"
    }])
    const navigate = useNavigate();


    if (firstRun.data === "true") {
        navigate("/setup")
    } else {
        navigate("/home")
    }

    return (
        <div className="w-screen h-screen bg-bg-accent/50 grid place-items-center">
            <motion.img
                className="animate-pulse"
                src='/logo.svg'
                width={150}
                initial={{
                    opacity: 0,
                    y: -100
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 2,
                    delay: 0.5,
                    bounce: 0.25,
                }}
            />
        </div>
    )
}

export default IndexRoute