import Container from "../../primitives/containers"
import Logo from "../logo"

const Sidebar = () => {
    return (
        <Container css={{ width: '60px', minHeight: '100vh', backgroundColor: "$backgroundColor", borderRight: '1px solid $borderColor', paddingTop: '12px' }} flex={"col"} align={"center"} justify={"start"}>
            <Logo />
        </Container>
    )
}

export default Sidebar;