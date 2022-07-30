import { styled } from '@twidge/config/stitches.config'

const Container = styled('div', {
    display: 'flex',
    variants: {
        padding: {
            sm: {
                padding: '4px',
            },
            md: {
                padding: '8px',
            },
            lg: {
                padding: '12px',
            },
            xl: {
                padding: '16px',
            },
            "2xl": {
                padding: '18px',
            },
            "3xl": {
                padding: '24px',
            },
            "4xl": {
                padding: '32px',
            }
        },
        flex: {
            col: {
                flexDirection: 'column',
            },
            row: {
                flexDirection: 'row',
            },
            reverseCol: {
                flexDirection: 'column-reverse',
            },
            reverseRow: {
                flexDirection: 'row-reverse',
            },
        },
        align: {
            center: {
                justifyContent: 'center',
            },
            end: {
                justifyContent: 'flex-end',
            },
            start: {
                justifyContent: 'flex-start',
            },
            stretch: {
                justifyContent: 'stretch',
            },
        },
        wrap: {
            noWrap: {
                flexWrap: 'nowrap',
            },
            wrap: {
                flexWrap: 'wrap',
            },
        },
    }
})

export default Container