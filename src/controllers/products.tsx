import dbhandler from '../services/mysql2.service';

export class productsController{
    async selectAll(request: Request, response: any){
        try {
            const query = "SELECT * FROM products";
            const data = await dbhandler(query);

            response.status(200).json({results: data});

        } catch (error: any) {
            //response.status(500).json({error: error.message});
        }
        return response
    }
}