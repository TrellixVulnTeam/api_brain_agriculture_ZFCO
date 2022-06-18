import {Request, Response} from "express"
import { ServicoListarTotalFazendaEstado } from "../../services/Fazenda/ServicoListarTotalFazendaEstado"

class ControladorListarTotalHectarFazendaEstado {

  async handle(request: Request, response: Response){
    
    const { endereco_id } = request.body
    
    const servicoListarTotalFazendaEstado = new ServicoListarTotalFazendaEstado()

    const total_Fazenda_por_Estado = await servicoListarTotalFazendaEstado.execute({
      endereco_id
    })

    if(total_Fazenda_por_Estado instanceof Error)  { 
      return response.status(400).json(total_Fazenda_por_Estado.message)
    }

    return response.json({
      mensagem: "FAZENDAS por ESTADO",
      total_Fazenda_por_Estado
    }).status(201)
  }
}

export {ControladorListarTotalHectarFazendaEstado}