import { sheets } from "./sheetsClient";

export async function getExistingJobLinks(
  spreadsheetId: string
): Promise<Set<string>> {

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: "Sheet1!F:F",
  });

  const rows = response.data.values || [];

  console.log("Rows fetched:", rows.length);

  const links = rows
    .slice(1)
    .map((row) => row[0])
    .filter(Boolean);

  console.log("Links found:", links.length);

  return new Set(links);
}