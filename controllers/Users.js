const listarUsuarios = async (req,res = response) =>{
    const usuarios = await Usuario.find().populate('tareas','title')

    try{
        res.status(200).json({
            ok:true,
            usuarios
        })
    }catch(e){
        console.log(e)
        res.status(500).json({
            ok: false,
            msg: 'Internal Error'
        })
    }
}
module.exports = {
    listarUsuarios
}