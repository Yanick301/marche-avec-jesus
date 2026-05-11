import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Registration from "../components/sections/Registration";
import "@testing-library/jest-dom";

// Mock fetch for registration
global.fetch = vi.fn();

describe("Registration Section", () => {
  it("renders the registration form", () => {
    render(<Registration />);
    expect(screen.getByText(/Rejoignez le/i)).toBeInTheDocument();
    expect(screen.getByText(/Mouvement/i)).toBeInTheDocument();
    expect(screen.getByText("Prénom")).toBeInTheDocument();
    expect(screen.getByText("Nom")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("shows validation errors on empty submission", async () => {
    render(<Registration />);
    const submitBtn = screen.getByText("Valider mon Inscription");
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText("Le prénom est requis (min 2 caractères)")).toBeInTheDocument();
      expect(screen.getByText("Le nom est requis")).toBeInTheDocument();
      expect(screen.getByText("Adresse email invalide")).toBeInTheDocument();
    });
  });

  it("submits the form successfully", async () => {
    (global.fetch as any).mockResolvedValue({
      ok: true,
      json: async () => ({ message: "Success" }),
    });

    render(<Registration />);
    
    fireEvent.change(screen.getByPlaceholderText("Jean"), { target: { value: "Martin" } });
    fireEvent.change(screen.getByPlaceholderText("Dupont"), { target: { value: "Koffi" } });
    fireEvent.change(screen.getByPlaceholderText("jean.dupont@email.com"), { target: { value: "martin@example.com" } });
    
    const submitBtn = screen.getByText("Valider mon Inscription");
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText("C'est confirmé !")).toBeInTheDocument();
    });
  });
});
