import * as express from 'express';
import {Location} from './models';

const app = express();


console.log(Location)

app.get('/', (request, response) => {
    response.send('hi');
});


app.listen(process.env.PORT || 3000, () => {
    console.log(`I'm running`);
});



