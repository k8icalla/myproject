const ph = {
    nom:(req, res)=>{
        res.render('index', { teamName: 'MinSU Badminton Team' });
        
    }
};

module.exports = ph;