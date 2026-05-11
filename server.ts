import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // In-memory registration storage (for demo purposes since Firebase was declined)
  const registrations: any[] = [];

  // API routes
  app.post("/api/register", (req, res) => {
    try {
      const { firstName, lastName, email, phone } = req.body;
      
      // Simple validation
      if (!firstName || !lastName || !email) {
        return res.status(400).json({ error: "Tous les champs obligatoires doivent être remplis." });
      }

      const newRegistration = {
        id: Date.now().toString(),
        firstName,
        lastName,
        email,
        phone,
        createdAt: new Date().toISOString(),
      };

      registrations.push(newRegistration);
      console.log("Nouvelle inscription :", newRegistration);

      res.status(201).json({ message: "Inscription réussie !", data: newRegistration });
    } catch (error) {
      console.error("Erreur d'inscription :", error);
      res.status(500).json({ error: "Une erreur interne est survenue." });
    }
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
  });
}

startServer();
