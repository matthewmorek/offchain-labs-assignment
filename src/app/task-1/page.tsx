import type { Metadata } from "next";
import Link from "next/link";
import Markdown from "react-markdown";

export const metadata: Metadata = {
  title: "Task #1",
};

const content = `# Arbitrum Open House CMS Schema

The Arbitrum Open House website showcases a multi-stage builder acceleration program that guides developers "from idea to launch" through various event types across global locations. This schema was designed to capture the folowing information:

- Online Buildathons
- IRL Founder Houses
- Demo Days
- Arbitrum Mentorship

### Validation

The schema includes validation rules to maintain data quality:

- Required fields for essential information (Title, EventType, StartDate)
- Slug generation from Title for consistency
- Date validation ensuring EndDate comes after StartDate
- URL validation for registration links

### Testing

Run the schema validation script to check for errors:

\`\`\`bash
npx tsx schema-check.ts --strict
\`\`\`
`;

export default function Task1Page() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center gap-6 p-4">
      <nav className="w-full max-w-prose">
        <Link href="/" className="px-3 py-2 font-bold outline-2">
          ← Back
        </Link>
      </nav>
      <article className="prose prose-lg max-w-2xl">
        <Markdown>{content}</Markdown>
      </article>
    </main>
  );
}
