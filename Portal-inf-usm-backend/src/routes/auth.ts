import { Router } from 'express';
import { AuthModel } from '@/models/auth';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        msg:"hello from backend!"
    });
});

export default router;