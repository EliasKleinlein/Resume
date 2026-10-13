import { afterEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Resume } from "./Resume";

afterEach(cleanup);

describe("Resume", () => {
  it("startet auf Deutsch", () => {
    render(<Resume />);
    expect(screen.getByRole("heading", { level: 2, name: "Berufserfahrung" })).toBeDefined();
    expect(document.documentElement.lang).toBe("de");
  });

  it("schaltet per Button auf Englisch und zurück", () => {
    render(<Resume />);
    const toggle = screen.getByRole("button");

    fireEvent.click(toggle);
    expect(screen.getByRole("heading", { level: 2, name: "Experience" })).toBeDefined();
    expect(document.documentElement.lang).toBe("en");

    fireEvent.click(toggle);
    expect(screen.getByRole("heading", { level: 2, name: "Berufserfahrung" })).toBeDefined();
    expect(document.documentElement.lang).toBe("de");
  });
});
