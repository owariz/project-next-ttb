import Container from '@/components/interface/Container'

export default function products() {
  return (
    <Container>
      <div id="way" className="pt-[100px] pb-[100px] flex justify-center px-6 2xl:px-0">
          <div className="w-full xl:w-[1280px]">
            <div className="md:min-w-[450px]">
                <h1 className="font-thai text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-500 font-bold">All Product</h1>
            </div>
          </div>
        </div>
    </Container>
  )
}
