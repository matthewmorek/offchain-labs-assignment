import { defineType, defineField, defineArrayMember } from "sanity";

export const Event = defineType({
  type: "document",
  name: "Event",
  title: "Event",
  fields: [
    defineField({
      type: "string",
      name: "Title",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "slug",
      name: "Slug",
      title: "Slug",
      options: {
        source: "Title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "string",
      name: "EventType",
      title: "Event Type",
      options: {
        list: [
          { title: "Online Buildathon", value: "buildathon" },
          { title: "IRL Founder House", value: "founder-house" },
          { title: "Demo Day", value: "demo-day" },
          { title: "Workshop", value: "workshop" },
          { title: "Mentorship", value: "mentorship" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "text",
      name: "Description",
      title: "Description",
      rows: 3,
    }),
    defineField({
      type: "datetime",
      name: "StartDate",
      title: "Start Date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: "datetime",
      name: "EndDate",
      title: "End Date",
      validation: (rule) => rule.required().min(rule.valueOfField("StartDate")),
    }),
    defineField({
      type: "Location",
      name: "Location",
      title: "Location",
    }),
    defineField({
      type: "string",
      name: "RegistrationStatus",
      title: "Registration Status",
      options: {
        list: [
          { title: "Open - Register Now", value: "open" },
          { title: "Coming Soon - Notify When Available", value: "coming-soon" },
          { title: "Closed", value: "closed" },
          { title: "Full", value: "full" },
        ],
      },
      initialValue: "open",
    }),
    defineField({
      type: "url",
      name: "RegistrationUrl",
      title: "Registration URL",
    }),
    defineField({
      type: "array",
      name: "Features",
      title: "Event Features",
      of: [defineArrayMember({ type: "string" })],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      type: "array",
      name: "Benefits",
      title: "Benefits/Outcomes",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      type: "boolean",
      name: "IsHighlighted",
      title: "Featured Event",
      initialValue: false,
    }),
    defineField({
      type: "number",
      name: "Order",
      title: "Display Order",
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: "Title",
      subtitle: "EventType",
    },
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title,
        subtitle: subtitle ? subtitle.replace("-", " ").toUpperCase() : "Event",
      };
    },
  },
  orderings: [
    {
      title: "Start Date, New",
      name: "startDateDesc",
      by: [{ field: "StartDate", direction: "desc" }],
    },
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "Order", direction: "asc" }],
    },
  ],
});

export const Location = defineType({
  type: "object",
  name: "Location",
  title: "Location",
  fields: [
    defineField({
      type: "string",
      name: "City",
      title: "City",
    }),
    defineField({
      type: "string",
      name: "Country",
      title: "Country",
    }),
    defineField({
      type: "boolean",
      name: "IsVirtual",
      title: "Virtual Event",
      initialValue: false,
    }),
    defineField({
      type: "Coordinates",
      name: "Coordinates",
      title: "Coordinates",
    }),
  ],
});

export const Coordinates = defineType({
  type: "object",
  name: "Coordinates",
  title: "Coordinates",
  fields: [
    defineField({
      type: "number",
      name: "Latitude",
      title: "Latitude",
    }),
    defineField({
      type: "number",
      name: "Longitude",
      title: "Longitude",
    }),
  ],
});
