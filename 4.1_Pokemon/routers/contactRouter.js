import Router from 'express'
import { sendAutoMail } from '../util/sendmail.js';
const router = Router();

const contactMessages = {
    id: null,
    message: "",
    email: ""
}

router.post('/api/contact', async (req, res) => {
    console.log(req.body);

    const msg = await sendAutoMail({email:req.body.email, name:req.body.name})
    res.send(msg);
})

export default router;
