import { afterEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Resume } from "./Resume";

afterEach(cleanup);

describe("Resume", () => {
  it("startet auf Deutsch im klassischen Layout", () => {
    render(<Resume />);
    expect(screen.getByRole("heading", { level: 2, name: "Berufserfahrung" })).toBeDefined();
    expect(screen.getByRole("button", { name: "Layout wechseln" }).textContent).toBe("Bento-Layout");
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

  it("wechselt zwischen klassischem und Bento-Layout", () => {
    const { container } = render(<Resume />);
    const toggle = screen.getByRole("button", { name: "Layout wechseln" });

    fireEvent.click(toggle);
    expect(container.querySelector(".bento")).not.toBeNull();
    expect(container.querySelector(".hero")).toBeNull();
    expect(toggle.textContent).toBe("Klassisches Layout");
    expect(screen.getByRole("heading", { level: 2, name: "Berufserfahrung" })).toBeDefined();

    fireEvent.click(toggle);
    expect(container.querySelector(".bento")).toBeNull();
    expect(container.querySelector(".hero")).not.toBeNull();
  });
});
