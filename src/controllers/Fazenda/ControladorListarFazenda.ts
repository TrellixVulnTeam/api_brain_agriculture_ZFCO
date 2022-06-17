import {Request, Response} from "express"
import { ServicoListarFazenda } from "../../services/Fazenda/ServicoListarFazenda"

class ControladorListarFazenda {

  async handle(request: Request, response: Response){
    
    try {
      const servicoListarFazenda = new ServicoListarFazenda()
      const fazenda = await servicoListarFazenda.execute()


      if(fazenda instanceof Error) {
        return response.status(400).json(fazenda.message)
      }

      return response.json({
        "Lista de Endereços ": {
          fazenda
        }
      })
  
    } catch (error) {
        return error    
    }
  }
}

export {ControladorListarFazenda}