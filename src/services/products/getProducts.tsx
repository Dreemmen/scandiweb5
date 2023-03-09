import dbhander from '../mysql2.service';

export default async function dbhandler(req: Request, res: any) {
    try {
        const query = "SELECT * FROM products";
        const data = await dbhander(query);

        res.status(200).json({results: data});

    } catch (error) {
        //res.status(500).json({error: error.message});
    }
}