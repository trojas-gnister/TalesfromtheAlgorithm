import {
    Container,
    Typography,
} from '@mui/material'

export default function PowerHeading() {
    return (
        <div>

            {/* Header - Powered by magic runes ...  */}
            <Container
            sx={{
                width: 750,
                alignItems: 'center',
                marginBottom: 30,
            }}>
                <Typography align="center" variant="h4"
                sx={{
                    color: '#F2A2E8',
                    marginBottom: 1,
                    fontFamily: 'Eczar'
                }}>
                    Powered by magic runes, ancient spells
                </Typography>
                <Typography align="center" variant="h4"
                sx={{
                    fontFamily: 'Eczar'
                }}>
                    . . . and a little bit of AI
                </Typography>
            </Container>
        </div>
    )
}