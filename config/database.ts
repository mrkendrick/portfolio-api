export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", "strapi"),
      password: env("DATABASE_PASSWORD", "strapi"),
    },
    useNullAsDefault: true,
  },
  debug: true,
});

// export default ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: env("LOCAL_DATABASE_HOST", "127.0.0.1"),
//       port: env.int("LOCAL_DATABASE_PORT", 5432),
//       database: env("LOCAL_DATABASE_NAME", "strapi"),
//       user: env("LOCAL_DATABASE_USERNAME", "strapi"),
//       password: env("LOCAL_DATABASE_PASSWORD", "strapi"),
//     },
//     useNullAsDefault: true,
//   },
//   debug: true,
// });
