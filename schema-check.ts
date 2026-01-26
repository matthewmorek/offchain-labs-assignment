// Run this file like this:
// npx tsx schema-check.ts --strict
import { createSchema } from "sanity";
import { Event, Location, Coordinates } from "./cms-types";

const schema = createSchema({
  name: "default",
  types: [Event, Location, Coordinates],
});

let hasErrors = false;
let hasWarnings = false;

for (const item of schema._validation) {
  const path = item.path.map((segment: any) => segment.name).join(" → ");
  console.log(`${path}:`);

  for (const problem of item.problems) {
    if (problem.severity === "error") {
      hasErrors = true;
      console.error(`  - [error] ${problem.message}`);
    } else if (problem.severity === "warning") {
      hasWarnings = true;
      console.warn(`  - [warning] ${problem.message}`);
    }
  }

  console.warn("");
}

if (hasErrors) {
  process.exit(1);
}

if (hasWarnings && process.argv.includes("--strict")) {
  process.exit(2);
}
