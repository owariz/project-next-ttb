import mockdata from '../mock/data.json'
export async function GET() {

    const filter = mockdata.map(t=>({
        'email' : `std${t.std_id}@petkasem.ac.th`,
        'grade': `${t.grade}/${t.classroom}`
    }))

    const data = {
        count:filter.length,
        data:filter
    }
   
    return Response.json(data)
  }
