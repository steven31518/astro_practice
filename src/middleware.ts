import { defineMiddleware } from "astro:middleware";
import { fetchEmpData } from "./api";
export const onRequest = defineMiddleware(async (context, next) => {
  const randomUser = await fetchEmpData();
 console.log(context)
  context.locals.user = {
    name: randomUser.name.first + " " + randomUser.name.last,
  };
  if (context.url.pathname === "/") {
    context.locals.welcomeTitle = () => {
      return "Welcome back " + context.locals.user.name;
    };
  } else {
    context.locals.welcomeTitle = () => {
      return "Welcome to new page " + context.locals.user.name;
    };
  }

  return next();
});
