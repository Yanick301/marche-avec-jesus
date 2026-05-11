import express from "express";
import path from "path";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// In-memory registration storage (for demo purposes)
const registrations: any[] = [];

// API routes
app.post("/api/register", (req, res) => {
  try {
    const { firstName, lastName, email, phone } = req.body;
    
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
async function setupVite() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }
}

setupVite();

// Only listen if not handled by Vercel
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
  });
}

export default app;
