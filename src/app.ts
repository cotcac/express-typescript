import express, {Application, Request, Response, NextFunction} from 'express';
const app: Application = express();
import {sayHello, delay1,Person} from './my_modules/greeting';
// Home
app.get('/', (req:Request, res:Response, next: NextFunction)=>{
    res.send('hello world ' + sayHello());
})
// Async/await
app.get('/delay',async (req:Request, res:Response)=>{
    await delay1().then(r=>{
        res.send(r);
    }).catch(e=>{
        res.status(500).send('500 Error!')
    })
})
// class
app.get('/person', (req:Request, res:Response)=>{
    const p = new Person('Kinny',true);
    res.send('Person: ' +p.display());
})
// class promise method
app.get('/delay2',async (req:Request, res:Response)=>{
    const p = new Person('Kinny',true);
    const delay2 = await p.delay2();
    res.send('Person: ' +delay2);
})

app.listen(3000,()=>console.log('Server running port 3000'))