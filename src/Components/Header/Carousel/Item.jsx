import { Paper, Button } from '@mui/material'
import CarouselItems from './CarouselItem.mjs'

export default function Item(item) {
    return (
        <Paper>
            <img alt='' src={item.image} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}