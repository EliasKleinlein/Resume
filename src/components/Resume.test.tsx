import { afterEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Resume } from "./Resume";

afterEach(cleanup);

describe("Resume", () => {
  it("startet auf Deutsch im Portfolio-Layout", () => {
    render(<Resume />);
    expect(screen.getByRole("heading", { level: 2, name: "Berufserfahrung" })).toBeDefined();
    expect(screen.getByRole("button", { name: "Layout wechseln" }).textContent).toBe("Klassisches Layout");
    expect(document.documentElement.lang).toBe("de");
  });

  it("schaltet per Button auf Englisch und zurück", () => {
    render(<Resume />);
    fireEvent.click(screen.getByRole("button", { name: "Sprache auf Englisch umstellen" }));
    expect(screen.getByRole("heading", { level: 2, name: "Experience" })).toBeDefined();
    expect(document.documentElement.lang).toBe("en");

    fireEvent.click(screen.getByRole("button", { name: "Switch language to German" }));
    expect(screen.getByRole("heading", { level: 2, name: "Berufserfahrung" })).toBeDefined();
    expect(document.documentElement.lang).toBe("de");
  });

  it("ändert die Anzahl der Expertise-Karten beim Sprachwechsel nicht", () => {
    const { container } = render(<Resume />);
    const cards = () => container.querySelectorAll(".pf-card").length;
    const before = cards();

    for (let i = 0; i < 3; i++) {
      fireEvent.click(screen.getByRole("button", { name: /Sprache auf Englisch|Switch language to German/ }));
    }
    expect(cards()).toBe(before);
  });

  it("wechselt zwischen klassischem und Portfolio-Layout", () => {
    const { container } = render(<Resume />);
    const toggle = screen.getByRole("button", { name: "Layout wechseln" });

    expect(container.querySelector(".pf")).not.toBeNull();
    expect(container.querySelector(".hero")).toBeNull();

    fireEvent.click(toggle);
    expect(container.querySelector(".pf")).toBeNull();
    expect(container.querySelector(".hero")).not.toBeNull();
    expect(toggle.textContent).toBe("Portfolio-Layout");
    expect(screen.getByRole("heading", { level: 2, name: "Berufserfahrung" })).toBeDefined();

    fireEvent.click(toggle);
    expect(container.querySelector(".pf")).not.toBeNull();
  });
});
