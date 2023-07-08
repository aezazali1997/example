import exrpess from 'express';

const app = exrpess();

app.get('/',(req,res)=>{
    res.status(200).send('App is working')
})
app.listen(3000,
    () => {
      console.log('app is listening on 3000')
    })