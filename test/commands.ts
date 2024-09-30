import type { BrowserCommand } from "vitest/node";

declare module "@vitest/browser/context" {
    interface BrowserCommands {
        pageScreenshot: () => Promise<Buffer>;
    }
}

export const pageScreenshot: BrowserCommand<[]> = async (ctx) => {
    if (ctx.provider.name === "playwright") {
        return await ctx.page.screenshot();
    }
};
