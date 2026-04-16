import { it, expect } from "vitest";
import { renderToBuffer } from "@react-pdf/renderer";
import { CvDocument } from "./CvDocument";

// A new skill or bullet can silently push Contact onto a third page.
it("fits the CV on two pages", async () => {
  const pdf = (await renderToBuffer(<CvDocument />)).toString("latin1");
  expect(pdf.match(/\/Type \/Page\b(?!s)/g)).toHaveLength(2);
}, 60_000);
