import Container from "../../primitives/containers"
import Logo from "../logo"
import useTauriHandler from '@twidge/utils/hooks/useTauriHandler'
import { useEffect } from 'react'
import Spaces, { Space } from '@twidge/utils/types/spaces'
import { styled } from "@twidge/config/stitches.config"
import * as FluentIcons from '@fluentui/react-icons'



const Body = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    marginTop: '12px',
    backgroundColor: '$backgroundColor',
    gap: '12px'
})

const SpaceComponent = ({ space, name }: {
    space: Space,
    name: string
}) => {
    const Icon = FluentIcons[name] as any;

    return (
        <div>
            <Icon />
        </div>
    )
}

const Sidebar = () => {
    const { send, sent, result } = useTauriHandler<Spaces>({ name: "get_spaces" })

    useEffect(() => {
        send()
    }, [])

    return (
        <Container css={{ width: '60px', minHeight: '100vh', backgroundColor: "$backgroundColor", borderRight: '1px solid $borderColor', paddingTop: '12px' }} flex={"col"} align={"center"} justify={"start"}>
            <Logo />
            <Body>
                {result && (
                    <>
                        {result.map(space => (
                            <div>
                                <SpaceComponent space={space} name={`${space.icon}`} />
                            </div>
                        ))}
                    </>
                )}
            </Body>

        </Container >
    )
}

export default Sidebar;