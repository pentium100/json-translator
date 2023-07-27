
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


/*

以下是发票或者收条的文本信息，请从中提取出发票日期，供应商，客户，发票币别，发票金额，发票项目, 如果是一张住宿发票，请额外提取住宿日期，房型，房间数，人数，房间单价.请仔细检查你生成的数据，如果不能确定数据正确，请放空。
"""

 */