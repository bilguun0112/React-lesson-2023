import Grid from '@mui/material/Grid'
import { Box, createTheme, ThemeProvider } from '@mui/system'
// ! Arrow Function
const GridMUI = () => {
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 375,
                md: 769,
                lg: 1140,
                xl: 1440
            }
        }
    })

    return (
        <>
            <h1>Day- 60 MUI  Grid BOX - Custom THEME</h1>
            <main>
                <ThemeProvider theme={theme}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box sx={{
                                backgroundColor: "green", display: {
                                    xs: 'none',
                                    sm: 'none',
                                    md: 'block'
                                }
                            }}>
                                First Column
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box sx={{
                                backgroundColor: "lightblue", display: {
                                    xs: 'block',
                                    sm: 'block',
                                    md: 'none'
                                }
                            }}>
                                Second Column
                            </Box>
                        </Grid>
                    </Grid>

                </ThemeProvider>
            </main>
        </>
    )
}

export default GridMUI