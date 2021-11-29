const router = require ('express').Router();

const apiRouterProyectos = require('./api/proyectos');

router.use('/proyectos', apiRouterProyectos);

router.get('/token', (req, res) => {
    let payload = {
        usuario: 'Juanan',
        createdAt: moment().unix(),
        expiredAt: moment().add(5, 'days').unix()
    };

    const token = jwt.encode(payload, process.env.SECRET_KEY);
    console.log(token);
    res.json({ token });
});

module.exports = router;