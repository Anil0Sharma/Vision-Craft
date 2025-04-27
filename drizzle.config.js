/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_8QWbScKNp4in@ep-hidden-rain-a5jo1plp-pooler.us-east-2.aws.neon.tech/Vision-Craft?sslmode=require",
  },
};
