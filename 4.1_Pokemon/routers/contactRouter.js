import Router from 'express'

const router = Router();

const contactMessages = {
    id: null,
    message: ""
}

router.post('/api/contact', (req, res) => {
    
    console.log(req.body);
    res.send(req.body);
} )

export default router;

