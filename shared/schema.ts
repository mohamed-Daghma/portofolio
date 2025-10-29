import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Default user table (not used in portfolio, but needed for storage template)
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Portfolio data types - no database needed, static content
export interface Skill {
  name: string;
  level: "Expert" | "Advanced" | "Proficient";
  category: "technical" | "software";
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  metrics: {
    area?: string;
    timeline?: string;
    scope?: string;
  };
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  location: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  status: "completed" | "in-progress";
}

export interface ContactInfo {
  name: string;
  title: string;
  titleFr: string;
  phone: string;
  email: string;
  location: string;
  oiqNumber: string;
}

export interface Translation {
  en: string;
  fr: string;
}

// Language type
export type Language = "en" | "fr";
