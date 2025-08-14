import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

// The schema is normally optional, but Convex Auth
// requires indexes defined on `authTables`.
// The schema provides more precise TypeScript types.
export default defineSchema({
  ...authTables,

  addresses: defineTable({
    line1: v.string(),
    line2: v.optional(v.string()),
    city: v.string(),
    state: v.string(),
    postalCode: v.string(),
    country: v.string(),
    type: v.string(), // "outlet" | "staff" | "customer" etc.
    refId: v.string(), // ID of the outlet/profile/customer
  }).index("by_ref", ["type", "refId"]),

  profiles: defineTable({
    userId: v.optional(v.string()),
    staffId: v.optional(v.string()), // Auto generated: <outlettype><branch><staffCount>
    name: v.string(),
    role: v.string(), // "admin" | "techinician" | "frontdesk"
    addressId: v.optional(v.string()),
  }).index("by_staffId", ["staffId"]),

  outlets: defineTable({
    name: v.string(),
    code: v.string(), // Number of outlet in each type, e.g. 01, 02, 03
    type: v.string(), // hq | outlet | warehouse | office (1 | 2 | 3 | 4)
    addressId: v.optional(v.string()), // optional shortcut to main address
  }).index("by_code", ["code"]),
});

// 0 - HQ;
// 1 - Office;
// 2 - Retail;
// 3 - Warehouse;
// Staff ID = <outlettype><branch><staffCount>
// 010201
