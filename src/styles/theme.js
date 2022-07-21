import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    config:{
        initialColorMode: 'light',
        useSystemColorMode: false,
    },
    styles:{
        global: (props) => ({
            'html, body':{
                fontFamily:"'Nunito Sans', sans-serif",
                fontSize:"14px",
                bg: props.colorMode === 'light'? "lightBg": "darkBg"
            },
        })
    },
    colors:{
        elementDark:"#333E48",
        textDark:"#111517",
        darkBg:"#2B3945",
        lightBg:"#FAFAFA",
        textElemLight:"#FFFFFF",
        lightInput:"#858585",
        
        
    }
})

export default theme



