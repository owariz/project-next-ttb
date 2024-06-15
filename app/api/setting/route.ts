import Setting from "@/schema/Setting"

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const res = await Setting.findOne()

    if (res == null || !res) {
        return Response.json({ isError: false, message: "Data not fount" }, { status: 404 })
    }

    return Response.json({ isError: false, data: res }, { status: 200 })
}

export async function POST(req: Request) {
    const website = await req.json()

    await Setting.create(website)
    return Response.json({ message: 'ok' }, { status: 200 })
}