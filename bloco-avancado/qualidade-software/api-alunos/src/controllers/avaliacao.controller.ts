import { Request, Response } from "express";
import { AvaliacaoService } from "../services";

export class AvaliacaoController {
  public async cadastrar(req: Request, res: Response) {
    try {
      const { modulo, nota, idAluno } = req.body;
      const aluno = req.authUser;

      const service = new AvaliacaoService();
      const response = await service.criar({ modulo, nota, idAluno: aluno.id });

      return res.status(response.code).json(response);
    } catch (error: any) {
      return res.status(500).json({
        code: 500,
        ok: false,
        mensagem: error.toString(),
      });
    }
  }

  public async listar(req: Request, res: Response) {
    try {
      const { aluno } = req.query;
      const service = new AvaliacaoService();
      const response = await service.listarTodos(aluno as string | undefined);

      return res.status(response.code).json(response);
    } catch (error: any) {
      return res.status(500).json({
        code: 500,
        ok: false,
        mensagem: error.toString(),
      });
    }
  }

  public async listarPorID(req: Request, res: Response) {
    try {
      const aluno = req.authUser;
      const { id } = req.params;

      const service = new AvaliacaoService();
      const response = await service.listarPorID({
        idAluno: aluno.id,
        idAvaliacao: id,
      });

      return res.status(response.code).json(response);
    } catch (error: any) {
      return res.status(500).json({
        code: 500,
        ok: false,
        mensagem: error.toString(),
      });
    }
  }

  public async atualizar(req: Request, res: Response) {
    try {
      const { modulo, nota } = req.body;
      const aluno = req.authUser;
      const { id } = req.params;

      const service = new AvaliacaoService();
      const response = await service.atualizar({
        idAluno: aluno.id,
        idAvaliacao: id,
        modulo,
        nota,
      });

      return res.status(response.code).json(response);
    } catch (error: any) {
      return res.status(500).json({
        code: 500,
        ok: false,
        mensagem: error.toString(),
      });
    }
  }

  public async deletar(req: Request, res: Response) {
    try {
      const aluno = req.authUser;
      const { id } = req.params;

      const service = new AvaliacaoService();
      const response = await service.deletar({
        idAluno: aluno.id,
        idAvaliacao: id,
      });

      return res.status(response.code).json(response);
    } catch (error: any) {
      return res.status(500).json({
        code: 500,
        ok: false,
        mensagem: error.toString(),
      });
    }
  }
}
