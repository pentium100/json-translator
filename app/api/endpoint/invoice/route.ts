
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { createLanguageModel, createJsonTranslator, processRequests } from "typechat";
dotenv.config({ path: path.join(__dirname, "../../../.env") });
const model = createLanguageModel(process.env);

export async function POST(req: NextRequest) {
    const { prompt } = await req.json();
    if (!prompt) {
        return NextResponse.json({ error: "Missing required parameters: schema, typeName, prompt" }, { status: 400, statusText: "Bad Request" });
    }

    const model = createLanguageModel(process.env);
    const schema = fs.readFileSync(path.join(__dirname, "invoiceSchema.ts"), "utf8");

    const typeName = "Invoice" ;

    const translator = createJsonTranslator(model, schema, typeName);
    const resp = await translator.translate(prompt);
    const data = resp.success ? resp.data : { error: resp.message };
    return NextResponse.json(data);
}
