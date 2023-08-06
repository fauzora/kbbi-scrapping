import { Request, Response } from "express";
import { SearchWord } from "../utils/cariKata";

export default class KbbiController {
  static async search(req: Request, res: Response) {
    try {
      const { kata } = req.query;
      const result = await SearchWord(<string>kata);

      res
        .status(200)
        .defaultResponse(
          true,
          result.length == 0 ? "data not found" : "success",
          {
            data: result,
            total_data: result.length,
          }
        );
    } catch (error: any) {
      res.status(500).defaultResponse(false, error.message, []);
    }
  }
}
