import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve CV file for download
  app.get("/api/download-cv", (req, res) => {
    const cvPath = path.join(__dirname, "../attached_assets/CV à jour + Dossier+Technique+-+MA+-+Scheduler++5+ans_1761774182806.pdf");
    res.download(cvPath, "Mohammed_Daghma_CV.pdf", (err) => {
      if (err) {
        console.error("Error downloading CV:", err);
        res.status(500).json({ error: "Failed to download CV" });
      }
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
