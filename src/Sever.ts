import {app} from './server/app';

app.listen(process.env.PORT, ()=> {
    console.log("conectou!!!!!!!");
})