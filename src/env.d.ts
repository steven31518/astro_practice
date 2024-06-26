/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    user: {
      name: string;
    };
    welcomeTitle: () => string;
    orders: Map<string, object>;
  }
}
