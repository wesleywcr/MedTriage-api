const express = require('express')
const router = express.Router()

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get('/notes', async (req,res) =>{
  const notas = await prisma.note.findMany();
  return res.status(200).json(notas)

});
router.get('/notes/:id', async (req,res) =>{
  const { id } = req.params;
  const integerId = parseInt(id);

  const nota = await prisma.note.findUnique({
    where:{
      id: integerId
    }
  });
  return res.status(200).json(nota)

});

router.post('/notes', async(req,res)=>{
  const{name, 
    frequency,
    pressure,     
    temperature,   
    symptoms,       
    description,   
    classification } = req.body
  const note= await prisma.note.create({
    data:{
  name,
  frequency,
  pressure,     
  temperature,   
  symptoms,       
  description,   
  classification 
  },
});
return res.status(201).json(note);
})

router.put('/notes/:id',async(req,res)=>{
  const { id } = req.params;
  const integerId = parseInt(id);

  const{name, 
    frequency,
    pressure,     
    temperature,   
    symptoms,       
    description,   
    classification } = req.body

    const note = await prisma.note.update({
      where:{
        id:integerId,
      },
      data:{
        name,
  frequency,
  pressure,     
  temperature,   
  symptoms,       
  description,   
  classification 
      },
    });


    return res.status(200).json(note);
})

router.delete("/notes/:id", async (req, res) => {
  const { id } = req.params;

  const integerId = parseInt(id);

  if (!integerId) {
    return res.status(400).json("id é obrigatório");
  }
  const NoteAlreadyExist = await prisma.note.findUnique({
    where: { id: integerId },
  });

  if (!NoteAlreadyExist) {
    return res.status(404).json("Nota não existe");
  }

  await prisma.note.delete({ where: { id: integerId } });

  return res.status(200).send();
});


module.exports = router;