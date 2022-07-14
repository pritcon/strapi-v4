export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '135a032b05ee388da012232ce2c2f3c8'),
  },
});
