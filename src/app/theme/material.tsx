import { FC } from 'react';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { createTheme } from '@material-ui/core';
import catalogTheme from './theme';
const MaterialProvider: FC<any> = ({ ...props }) => {
    const theme = createTheme(catalogTheme)
    return (
        <ThemeProvider theme={theme}>
            {props.children}
        </ThemeProvider>
    )
}

export default MaterialProvider