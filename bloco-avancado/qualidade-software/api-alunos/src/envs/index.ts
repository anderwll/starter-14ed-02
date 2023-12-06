import "dotenv/config";

const envs = {
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY as string,
  JWT_EXPIRE_IN: process.env.JWT_EXPIRE_IN as string,
};

export default envs;
