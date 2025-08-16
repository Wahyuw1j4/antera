import Villa from "../model/villa.js";
import { z } from "zod";

const generateId = (() => {
    let villaIncrement = 1;
    return () => {
        const now = new Date();
        const yy = String(now.getFullYear()).slice(-2);
        const mm = String(now.getMonth() + 1).padStart(2, '0');
        const dd = String(now.getDate()).padStart(2, '0');
        const iiii = String(villaIncrement++).padStart(4, '0');
        return `villa-${yy}${mm}${dd}${iiii}`;
    };
})();

class VillaController {
    getAllVillas = async (req, res) => {
        const villas = await Villa.findAll();
        res.json({
            status: "success",
            data: villas
        });
    };

    getVillaById = async (req, res) => {
        const { id } = req.params;
        const villa = await Villa.findOne({
            where: { id },
        });
        res.status(200).json({
            status: "success",
            data: villa
        });
    };

    createVilla = async (req, res) => {
        const villaSchema = z.object({
            name: z.string().min(1, "Name is required"),
            harga: z.coerce.number().positive("Harga must be a positive number"),
            lokasi: z.string().min(1, "Lokasi is required"),
        });

        console.log("ini body", req.body);

        const parseResult = villaSchema.safeParse(req.body);
        if (!parseResult.success) {
            return res.status(400).json({ errors: parseResult.error.errors });
        }

        const { name, harga, lokasi } = parseResult.data;

        try {
            const id = generateId();
            console.log("Generated ID:", id);
            const newVilla = await Villa.create({
                id,
                name,
                harga,
                lokasi,
            });

            return res.status(201).json({
                status: "success",
                data: newVilla
            });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal server error" });
        }
    };

    inputRoi = async (req, res) => {
        try {
            const {hargaVilla, okupasi, tarifHarian } = req.body;

            if (!hargaVilla || !okupasi || !tarifHarian) {
                return res.status(400).json({ error: "Semua field wajib diisi" });
            }

            // Hitung
            const pendapatanKotor = tarifHarian * 365 * (okupasi / 100);
            const biayaOperasional = pendapatanKotor * 0.1;
            const pendapatanBersih = pendapatanKotor - biayaOperasional;
            const roi = (pendapatanBersih / hargaVilla) * 100;

            return res.status(201).json({
                status: "success",
                data: {
                    pendapatanKotor,
                    biayaOperasional,
                    pendapatanBersih,
                    roi: Math.round(roi)
                }
            });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: "Terjadi kesalahan server" });
        }
    };
}

export default new VillaController();
