import { Box, Typography, ButtonGroup, Button } from '@mui/material'
import React from 'react'
import { format } from "date-fns"
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function Footer() {
    return (
        <Box padding={'20px'} sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }} bgcolor={'#141414'} color={'#fff'}>
            <Typography>© {format(new Date(), 'yyyy')} DD. All Right Reserved.</Typography>
            <ButtonGroup disableElevation variant='contained'>
                <Button sx={{ backgroundColor: '#141414' }}>
                    <TelegramIcon />
                </Button>
                <Button>
                    <GitHubIcon />
                </Button>
                <Button>
                    <YouTubeIcon />
                </Button>
            </ButtonGroup>
        </Box>
    )
}
