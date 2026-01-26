# Arbitrum Open House CMS Schema

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

```bash
npx tsx schema-check.ts --strict
```
