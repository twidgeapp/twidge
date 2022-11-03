// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { PrismaClient } from '@prisma/client';

declare global {
    let prisma: PrismaClient | undefined;
}

let logs = [];

if (process.env.NODE_ENV == 'development') {
    logs = ['query', 'info', 'warn'];
}

const client = globalThis.prisma || new PrismaClient({ log: logs });
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;
