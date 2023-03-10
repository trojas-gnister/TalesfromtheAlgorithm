import TypeIt from "typeit-react";
import {
    Container,
    Typography,
    Box,
    Paper,
} from '@mui/material'

const PinkStrong = ({ children }) => {
    return <strong style={{
        fontWeight: 600,
        letterSpacing: 1,
        fontFamily: "Eczar",
        fontSize: 40,
        color: '#F2A2E8',
        }}>{children}</strong>;
};


export default function About() {
    return(
        <div>
            <Paper elevation={24}
            sx={{
                maxWidth: '70vw',
                minHeight: '70vh',
                backgroundColor: '#120043',
                border: 1,
                borderColor: '#fff',
                position: 'relative',
                left: '15vw'
            }}>
            <Container maxWidth='sm'
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: 10,
                }}>
                        <Typography
                        sx={{
                            fontWeight: 600,
                            letterSpacing: 1,
                            fontFamily: "Eczar",
                            fontSize: 60,
                            paddingTop: 10,
                        }}>What is DreamAI?</Typography>
            </Container>

            <Container maxWidth='lg'
            sx={{
                bgColor: '#11153A',
                marginTop: 10,
            }}>
                <TypeIt
                    options={{
                        speed: 0.1,
                        waitUntilVisible: true,
                    }}>
                    <PinkStrong>" It's the story of five, passionate software developers that created an AI storytelling app.
                    </PinkStrong>
                    <Box sx={{height: 40,}}></Box>
                    <PinkStrong>
                        They envisioned an app that allows
                        the user to customize for the story they'd like to create. The AI would generate
                        the first few sentences of the story, then the user could response with the next
                        sentence.
                    </PinkStrong>
                    <Box sx={{height: 40,}}></Box>
                    <PinkStrong>This way, the AI and the user could go back and fourth -- 
                        always building on one another's ideas in fun, surprising ways. "</PinkStrong>
                        </TypeIt>
                    <Box sx={{height: 50,}}></Box>
            </Container>
            </Paper>
        </div>
    )
}
