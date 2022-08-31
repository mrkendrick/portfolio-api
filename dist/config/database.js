"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    connection: {
        client: "postgres",
        connection: {
            host: env(process.env.NODE_ENV === "production"
                ? "DATABASE_HOST"
                : "LOCAL_DATABASE_HOST", "127.0.0.1"),
            port: env.int(process.env.NODE_ENV === "production"
                ? "DATABASE_PORT"
                : "LOCAL_DATABASE_PORT", 5432),
            database: env(process.env.NODE_ENV === "production"
                ? "DATABASE_NAME"
                : "LOCAL_DATABASE_NAME", "strapi"),
            user: env(process.env.NODE_ENV === "production"
                ? "DATABASE_USERNAME"
                : "LOCAL_DATABASE_USERNAME", "strapi"),
            password: env(process.env.NODE_ENV === "production"
                ? "DATABASE_PASSWORD"
                : "LOCAL_DATABASE_PASSWORD", "strapi"),
        },
        useNullAsDefault: true,
    },
    debug: true,
});
