import { PrismaClient } from '@prisma/client'
import { Router } from 'express'

const prisma = new PrismaClient()
const router = Router()

router.get("/", async (req, res) => {
    try {
        const viagens = await prisma.viagem.findMany({
            orderBy: {id: 'desc'},
        })
        res.status(200).json(viagens)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

router.post("/", async (req, res) => {
    const {destino, transporte, duracao, preco = null} = req.body

    if (!destino || !transporte || !duracao || !preco) {
        res.status(400).json({erro: "Informe todos os dados"})
        return
    }

    try {
        const viagem = await prisma.viagem.create({
            data: {destino, transporte, duracao, preco}
        })
        res.status(201).json(viagem)
    } catch (error) {
        res.status(400).json({ erro: error })
    }
 
})

router.put("/:id", async (req, res) => {
    const { id } = req.params //recebe id como parametro
    const { destino, transporte, duracao, preco } = req.body //recebe as variaveis no corpo de requisicao

    if(!destino || !transporte || !duracao || !preco) {
        res.status(400).json({ erro: "Informe todos os dados"})
        return  
    }

    try {
        const viagem = await prisma.viagem.update({
            where: { id: Number(id)},
            data: { destino, transporte, duracao, preco}
        })
        res.status(200).json(viagem)
    } catch (error) {
        res.status(400).json({ erro: error})
    }
    
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params

    //realiza a exclusao
    try {
        const viagem = await prisma.viagem.delete({
            where: { id: Number(id) }
        })
        res.status(200).json(viagem)
    } catch (error) {
        res.status(400).json({ erro: error })
    }
})

export default router