import express from 'express';

const port = process.env.PORT || 5000;

const doorState = ['open', 'close'] as const;
type DoorState = typeof doorState[number];



let door:DoorState = "open";


const app = express();

app.get('/', (req, res) => {
    res.json({
        door
    })
})

app.post('/:state', (req, res) => {
    
    const state = req.params.state as DoorState;

    door = doorState.includes(state) ? state : door;

    res.json({
        door
    })
})

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
})