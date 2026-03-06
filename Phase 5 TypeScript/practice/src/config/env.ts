export const env = {
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET as string,
  jwtExpires: process.env.JWT_EXPIRES || "1h"
};